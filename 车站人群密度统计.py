import numpy as np
import pandas as pd
from math import radians, cos, sin, asin, sqrt

EARTH_REDIUS = 6378.137
def haversine(lon1, lat1, lon2, lat2):  # 经度1，纬度1，经度2，纬度2 （十进制度数）
    """
    haversine()
    Calculate the great circle distance between two points
    on the earth (specified in decimal degrees)
    """
    # 将十进制度数转化为弧度
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    # haversine公式
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * asin(sqrt(a))
    r = EARTH_REDIUS  # 地球平均半径，单位为公里
    return c * r * 1000

def ConvTime(id):
    hour = id//3600
    mod = id % 3600
    min = mod//60
    sec = mod % 60
    tt="2018-10-03 "
    if len(str(hour)) == 1:
        tt += "0"
    tt += str(hour)+":"
    if len(str(min)) == 1:
        tt += "0"
    tt += str(min)+":"
    if len(str(sec)) == 1:
        tt += "0"
    tt += str(sec);
    return tt

class pair:
    def __init__(self,first,second):
        self.first=first
        self.second=second

time_user=pd.read_csv('TimeUser.txt',sep='\t')
u_time=np.array(time_user['time'])
u_lon=np.array(time_user['lon'])
u_lat=np.array(time_user['lat'])

u_map=dict()
for i in u_time:
    u_map[i]=[]

for i in range(0,len(u_time)):
    u_map[u_time[i]].append(pair(u_lon[i],u_lat[i]))

station = pd.read_csv('traffic_station01.csv')
s_lon=np.array(station['longitude'])
s_lat=np.array(station['latitude'])
s_mode=np.array(station['mode'])
s_mode_name=np.array(station['mode_name'])

dis=300  # 定义车站范围
st=0
ed=24*60*60
cnt = np.zeros([ed,len(s_lat)])

for i in range(st,ed):
    tt=ConvTime(i)
    if u_map.get(tt,-1)!=-1:
        for j in u_map[tt]:
            lon1=j.first
            lat1=j.second
            for k in range(0,len(s_lon)):
                if(haversine(lon1,lat1,s_lon[k],s_lat[k])<dis):
                    cnt[i][k]+=1

file_name  = 'ans300.txt'
with open(file_name, 'w', encoding = 'utf-8') as f:
    for i in range(cnt.shape[0]):
        for j in range(cnt.shape[1]):
            if cnt[i][j]!=0:
                f.write(ConvTime(i)+",")
                f.write(str(s_lon[j])+",")
                f.write(str(s_lat[j])+",")
                f.write(str(int(cnt[i][j]))+",")
                f.write(s_mode[j]+","+s_mode_name[j]+"\n")








