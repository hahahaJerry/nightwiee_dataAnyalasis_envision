import numpy as np
import pandas as pd
import time
from math import radians, cos, sin, asin, sqrt, acos,pi

EARTH_REDIUS = 6378.137
def haversine(lon1, lat1, lon2, lat2):  # 经度1，纬度1，经度2，纬度2 （十进制度数）
    """
    haversine()
    Calculate the great circle distance between two points
    on the earth (specified in decimal degrees)
    """
    # 将十进制度数转化为弧度
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    r = EARTH_REDIUS  # 地球平均半径，单位为公里
    #print(radToLonLat(r*sin(lat1)*cos(lon1),r*sin(lat1)*sin(lon1),r*cos(lat1),r))
    # haversine公式
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * asin(sqrt(a))
    return c * r * 1000

all_data = pd.read_csv('all_data.txt')
tra_lon = np.array(all_data['longitude'])
tra_lat = np.array(all_data['latitude'])
tra_mode = np.array(all_data['mode'])

time_user = pd.read_csv('TimeUser02.csv')
time_u = np.array(time_user['time'])
user_lon = np.array(time_user['longitude'])
user_lat = np.array(time_user['latitude'])
user_id = np.array(time_user['id'])

time0 = time.time()
ans = []
for i in range(len(time_u)):
    if i%1000==0:
        print(time.time()-time0)
        time0=time.time()

    Min = 1000000007
    mode = "-1"
    for j in range(len(tra_lon)):
        Alon = user_lon[i]
        Alat = user_lat[i]
        Blon = tra_lon[j]
        Blat = tra_lat[j]
        dis = haversine(Alon,Alat,Blon,Blat)
        if dis<Min:
            Min = dis
            mode = tra_mode[j]
    tt = []
    tt.append(time_u[i])
    tt.append(user_id[i])
    tt.append(user_lon[i])
    tt.append(user_lat[i])

    # print(Min)
    if Min>100:
        tt.append(0)
    else:
        if mode == 'bus':
            tt.append(1)
        else:
            tt.append(2)
    ans.append(tt)

to_file = pd.DataFrame(data=ans, columns=['time','id','longitude','latitude','mode'])
to_file.to_csv('TimeUserLabel.txt',index=False)






