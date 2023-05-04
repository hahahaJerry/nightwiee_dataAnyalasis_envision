# -*- coding: utf-8 -*-
import time
import warnings
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from numpy import newaxis
import keras
from keras.layers.core import Dense, Activation, Dropout
from keras.layers.recurrent import LSTM
from keras.models import Sequential
warnings.filterwarnings("ignore")

data_min = []
data_max = []
data_L2 = []
def load_data(filename, seq_len, normalise_window):
    f = open(filename, 'r').read()
    data = f.split('\n')

    print('data len:', len(data))
    print('sequence len:', seq_len)

    sequence_length = seq_len + 1
    result = []
    for index in range(len(data) - sequence_length):
        result.append(np.array(data[index: index + sequence_length],dtype=float))  # 得到长度为seq_len+1的向量，最后一个作为label
    print('result len:', len(result))
    print('result shape:', np.array(result).shape)
    print(result[-5:])

    if normalise_window:
        result = StandarWindows(result)
        tt2 = np.square(result)
        global data_L2
        data_L2 = np.sqrt(tt2.sum(axis=1))
        from sklearn.preprocessing import normalize
        result = normalize(result)

    print(result[:1])
    print('normalise_windows result shape:', np.array(result).shape)

    result = np.array(result)
    global data_min,data_max
    data_min = np.array(data_min)
    data_max = np.array(data_max)

    # 划分train、test
    row = round(0.9 * result.shape[0])
    train = result[:row, :]
    np.random.shuffle(train)
    x_train = train[:, :-1]
    y_train = train[:, -1]
    x_test = result[row:, :-1]
    y_test = result[row:, -1]
    data_min = data_min[row:]
    data_max = data_max[row:]
    data_L2 = data_L2[row:]
    x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))
    x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))
    return [x_train, y_train, x_test, y_test]

# 归一化
def StandarWindows(window_data):
    normalised_data = []
    for window in window_data:  # window shape (sequence_length L ,)
        normalised_window = [(((float(p)- np.min(window))/ (np.max(window)-np.min(window)))) for p in window]
        data_min.append(np.min(window))
        data_max.append(np.max(window))
        normalised_data.append(normalised_window)
    return normalised_data

# 反归一化
def UnStandarWindows(window_data):
    normalised_window=[]
    for i in range(len(window_data)):
        normalised_window.append(window_data[i]*(data_max[i]-data_min[i])+data_min[i])
    return normalised_window

# 反正则化
def UnNormalizeL2(window_data,ss):
    ori_data = []
    for i in range(len(window_data)):
        ori_data.append(window_data[i]* ss[i])
    return np.array(ori_data)

def build_model(layers):
    model = Sequential()

    model.add(LSTM(input_dim=layers[0], output_dim=layers[1], return_sequences=True))
    model.add(Dropout(0.3))
    model.add(LSTM(layers[2], return_sequences=False))
    model.add(Dropout(0.3))
    model.add(Dense(output_dim=layers[3]))
    model.add(Activation("linear"))
    model.summary()
    start = time.time()
    model.compile(loss="mse", optimizer="adam")
    print("Compilation Time : ", time.time() - start)
    return model

# 直接全部预测
def predict_point_by_point(model, data):
    predicted = model.predict(data)
    print('predicted shape:', np.array(predicted).shape)  # (412L,1L)
    predicted = np.reshape(predicted, (predicted.size,))
    return predicted

def plot_results(predicted_data, true_data, filename):
    fig = plt.figure(facecolor='white')
    ax = fig.add_subplot(111)
    ax.plot(true_data, label='Bus True Data')
    plt.plot(predicted_data, label='Bus Prediction')
    plt.legend()
    plt.show()
    plt.savefig(filename + '.png')

if __name__ == '__main__':
    global_start_time = time.time()
    epochs = 30
    seq_len = 15

    print('> Loading data... ')
    X_train, y_train, X_test, y_test = load_data('公交.txt', seq_len, True)
    print('X_train shape:', X_train.shape)
    print('y_train shape:', y_train.shape)
    print('X_test shape:', X_test.shape)
    print('y_test shape:', y_test.shape)
    print('> Data Loaded. Compiling...')

    model = build_model([1, 128, 128, 1])
    model.fit(X_train, y_train, batch_size=10, nb_epoch=epochs, validation_split=0.05)

    point_by_point_predictions = predict_point_by_point(model, X_test)
    print('point_by_point_predictions shape:', np.array(point_by_point_predictions).shape)
    print('Training duration (s) : ', time.time() - global_start_time)
    point_by_point_predictions = UnNormalizeL2(point_by_point_predictions,data_L2)
    point_by_point_predictions = UnStandarWindows(point_by_point_predictions)
    y_test = UnNormalizeL2(y_test,data_L2)
    y_test = UnStandarWindows(y_test)
    print(y_test)
    plot_results(point_by_point_predictions, y_test, 'point_by_point_predictions')

    to_file = pd.DataFrame(data=point_by_point_predictions, columns=[''])
    to_file.to_csv('pre公交.txt', index=False)
