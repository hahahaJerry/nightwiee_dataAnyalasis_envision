//人群密度比较
option1 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        data: ['真实值', '预测值'],
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }

    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data: ['21:37:00','21:38:00','21:39:00','21:40:00','21:41:00','21:42:00','21:43:00','21:44:00','21:45:00','21:46:00','21:47:00','21:48:00','21:49:00','21:50:00','21:51:00','21:52:00','21:53:00','21:54:00','21:55:00','21:56:00','21:57:00','21:58:00','21:59:00','22:00:00','22:01:00','22:02:00','22:03:00','22:04:00','22:05:00','22:06:00','22:07:00','22:08:00','22:09:00','22:10:00','22:11:00','22:12:00','22:13:00','22:14:00','22:15:00','22:16:00','22:17:00','22:18:00','22:19:00','22:20:00','22:21:00','22:22:00','22:23:00','22:24:00','22:25:00','22:26:00','22:27:00','22:28:00','22:29:00','22:30:00','22:31:00','22:32:00','22:33:00','22:34:00','22:35:00','22:36:00','22:37:00','22:38:00','22:39:00','22:40:00','22:41:00','22:42:00','22:43:00','22:44:00','22:45:00','22:46:00','22:47:00','22:48:00','22:49:00','22:50:00','22:51:00','22:52:00','22:53:00','22:54:00','22:55:00','22:56:00','22:57:00','22:58:00','22:59:00','23:00:00','23:01:00','23:02:00','23:03:00','23:04:00','23:05:00','23:06:00','23:07:00','23:08:00','23:09:00','23:10:00','23:11:00','23:12:00','23:13:00','23:14:00','23:15:00','23:16:00','23:17:00','23:18:00','23:19:00','23:20:00','23:21:00','23:22:00:','23:23:00','23:24:00','23:25:00','23:26:00','23:27:00','23:28:00','23:29:00','23:30:00','23:31:00','23:32:00','23:33:00','23:34:00','23:35:00','23:36:00','23:37:00','23:38:00','23:39:00','23:40:00','23:41:00','23:42:00','23:43:00','23:44:00','23:45:00','23:46:00','23:47:00','23:48:00','23:49:00','23:50:00','23:51:00','23:52:00','23:53:00','23:54:00','23:55:00','23:56:00','23:57:00','23:58:00','23:59:00']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
    },
    series: [
        {
            name: '真实值',
            type: 'line',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: 'rgb(245,174,30)'
                }
            },
            data: [6,7,34,7,20,15,15,21,30,13,17,11,7,19,10,6,10,14,11,17,21,12,9,12,17,14,17,2,24,25,27,18,35,17,31,17,9,32,21,23,0,16,34,18,16,18,37,30,56,46,39,17,17,33,28,16,18,40,33,31,4,24,26,20,74,34,29,22,39,27,47,9,45,23,23,30,23,5,31,31,44,38,23,31,27,31,14,42,46,52,40,30,51,17,48,59,42,41,40,8,28,33,60,29,52,37,26,24,36,33,44,49,46,28,57,34,16,25,18,20,23,15,28,11,18,26,9,16,20,30,22,23,4,18,20,27,34,37,67,14,2,0,0]
        },
        {
            name: '预测值',
            type: 'line',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: 'rgb(130,255,19)'
                }
            },
            data: [10,11,35,13,19,15,14,18,26,13,14,10,8,16,10,9,10,14,11,15,19,12,10,11,14,11,14,4,22,20,22,14,31,14,25,14,8,27,16,16,4,11,27,13,9,10,28,21,50,36,30,14,12,24,20,10,24,40,32,29,6,16,17,12,73,24,17,12,26,16,33,10,33,16,13,17,14,4,20,22,35,29,17,22,19,22,11,33,37,43,32,23,41,23,43,52,36,33,32,14,22,25,49,24,40,28,19,17,25,23,31,37,34,20,46,35,20,24,22,24,26,24,31,20,24,29,18,19,18,25,19,18,7,13,15,21,28,31,63,18,10,10,12]
        }
    ]
};
////////////////////// 人群密度比较 end

//人群密度预测--公交
option2 = {

    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['公交', '地铁'],
        right: '10px',
        top: '0px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        x: 35,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data:['00:00:00','00:00:01','00:00:02','00:00:03','00:00:04','00:00:05','00:00:06','00:00:07','00:00:08','00:00:09','00:00:10','00:00:11','00:00:12','00:00:13','00:00:14','00:00:15','00:00:16','00:00:17','00:00:18','00:00:19','00:00:20','00:00:21','00:00:22','00:00:23','00:00:24','00:00:25','00:00:26','00:00:27','00:00:28','00:00:29','00:00:30','00:00:31','00:00:32','00:00:33','00:00:34','00:00:35','00:00:36','00:00:37','00:00:38','00:00:39','00:00:40','00:00:41','00:00:42','00:00:43','00:00:44','00:00:45','00:00:46','00:00:47','00:00:48','00:00:49','00:00:50','00:00:51','00:00:52','00:00:53','00:00:54','00:00:55','00:00:56','00:00:57','00:00:58','00:00:59','00:01:00','00:01:01','00:01:02','00:01:03','00:01:04','00:01:05','00:01:06','00:01:07','00:01:08','00:01:09','00:01:10','00:01:11','00:01:12','00:01:13','00:01:14','00:01:15','00:01:16','00:01:17','00:01:18','00:01:19','00:01:20','00:01:21','00:01:22','00:01:23','00:01:24','00:01:25','00:01:26','00:01:27','00:01:28','00:01:29','00:01:30','00:01:31','00:01:32','00:01:33','00:01:34','00:01:35','00:01:36','00:01:37','00:01:38','00:01:39','00:01:40','00:01:41','00:01:42','00:01:43','00:01:44','00:01:45','00:01:46','00:01:47','00:01:48','00:01:49','00:01:50','00:01:51','00:01:52','00:01:53','00:01:54','00:01:55','00:01:56','00:01:57','00:01:58','00:01:59']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            textStyle: {
                color:'#fff',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '公交',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(189,35,11)'
            }
        },
        data:[14,34,37,7,10,15,33,27,31,36,40,13,31,36,36,21,22,59,25,19,18,24,14,34,35,31,21,9,28,30,15,25,11,11,10,30,37,20,19,12,53,38,21,48,33,33,33,18,13,34,40,8,33,19,20,14,24,12,21,21,33,28,9,30,19,36,25,20,38,24,29,15,7,20,9,23,34,17,25,15,14,32,8,15,7,29,34,20,29,22,29,16,15,12,11,19,18,3,20,32,10,8,6,13,16,24,30,5,11,30,33,7,5,14,13,12,16,24,4,3]
    }, {
        name: '地铁',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)'
            }
        },
        data:[2,1,4,0,1,0,0,1,1,0,4,3,1,3,1,1,2,5,0,2,2,1,2,0,1,3,1,0,3,1,0,1,0,2,0,0,2,4,0,1,5,4,3,1,2,1,3,2,3,1,1,0,2,0,0,0,1,3,2,0,4,2,0,1,1,3,1,0,3,3,2,0,0,3,2,0,3,5,2,2,0,1,1,0,0,2,1,3,6,3,1,1,2,0,1,1,1,1,0,2,0,2,1,0,0,2,0,0,1,5,5,2,0,1,1,0,0,2,0,0]
    }, ]
};
////////////////////// 公交预测 end

//人群密度预测--地铁
option033yy = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        data: ['真实值', '预测值'],
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }

    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data: ['21:37:00','21:38:00','21:39:00','21:40:00','21:41:00','21:42:00','21:43:00','21:44:00','21:45:00','21:46:00','21:47:00','21:48:00','21:49:00','21:50:00','21:51:00','21:52:00','21:53:00','21:54:00','21:55:00','21:56:00','21:57:00','21:58:00','21:59:00','22:00:00','22:01:00','22:02:00','22:03:00','22:04:00','22:05:00','22:06:00','22:07:00','22:08:00','22:09:00','22:10:00','22:11:00','22:12:00','22:13:00','22:14:00','22:15:00','22:16:00','22:17:00','22:18:00','22:19:00','22:20:00','22:21:00','22:22:00','22:23:00','22:24:00','22:25:00','22:26:00','22:27:00','22:28:00','22:29:00','22:30:00','22:31:00','22:32:00','22:33:00','22:34:00','22:35:00','22:36:00','22:37:00','22:38:00','22:39:00','22:40:00','22:41:00','22:42:00','22:43:00','22:44:00','22:45:00','22:46:00','22:47:00','22:48:00','22:49:00','22:50:00','22:51:00','22:52:00','22:53:00','22:54:00','22:55:00','22:56:00','22:57:00','22:58:00','22:59:00','23:00:00','23:01:00','23:02:00','23:03:00','23:04:00','23:05:00','23:06:00','23:07:00','23:08:00','23:09:00','23:10:00','23:11:00','23:12:00','23:13:00','23:14:00','23:15:00','23:16:00','23:17:00','23:18:00','23:19:00','23:20:00','23:21:00','23:22:00:','23:23:00','23:24:00','23:25:00','23:26:00','23:27:00','23:28:00','23:29:00','23:30:00','23:31:00','23:32:00','23:33:00','23:34:00','23:35:00','23:36:00','23:37:00','23:38:00','23:39:00','23:40:00','23:41:00','23:42:00','23:43:00','23:44:00','23:45:00','23:46:00','23:47:00','23:48:00','23:49:00','23:50:00','23:51:00','23:52:00','23:53:00','23:54:00','23:55:00','23:56:00','23:57:00','23:58:00','23:59:00']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
    },
    series: [
        {
            name: '真实值',
            type: 'line',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: 'rgb(186,39,245)'
                }
            },
            data:[1,0,3,0,1,1,2,1,1,2,1,1,0,0,2,0,1,2,0,3,0,1,2,1,1,0,2,0,2,1,1,2,3,0,1,1,1,2,0,1,0,0,4,2,2,1,1,1,6,2,0,0,2,5,1,1,1,4,2,0,1,4,1,0,7,2,1,0,5,2,1,0,3,1,1,2,1,1,4,1,4,1,2,1,2,0,2,3,3,0,5,8,2,1,5,9,4,3,6,0,3,7,8,2,3,2,0,4,6,4,4,8,6,3,5,5,1,4,1,1,1,3,2,1,3,1,1,1,3,2,0,0,0,3,2,3,4,2,9,2,0,0,0]        },
        {
            name: '预测值',
            type: 'line',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: 'rgb(24,204,184)'
                }
            },
            data:[1,1,3,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,3,0,1,1,0,0,0,1,0,1,0,0,1,2,0,0,1,0,1,0,0,0,0,4,1,1,1,0,0,6,2,1,1,2,5,1,1,0,3,1,0,0,3,1,0,7,2,1,0,5,2,1,0,2,1,0,1,0,0,3,1,4,1,1,0,1,0,1,2,2,0,5,8,2,2,5,9,4,3,6,2,3,7,8,3,3,2,0,3,5,3,3,8,6,3,5,5,2,3,2,2,1,2,2,1,2,2,2,1,2,1,0,0,0,3,2,2,4,2,9,3,2,2,2]        }
    ]
};
/////////////////////// 地铁预测 end

//实时人群密度轮播（除康平县）
option3 = {
    title: {
        text: '00:01:00',
        x: '75%',
        y: '1%',
        textStyle: {
            fontSize: 20,
            color:'#00fffb'
        }
    },
    color: ['#ACD', '#FDD56A', '#A2CD5A', '#D2A2CC', '#FD866A', '#E1C4C4'],
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '55%'],
        radius: ['25%', '60%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 25,
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '和平区',
            'value': 2
        }, {
            'name': '沈河区',
            'value': 3
        }, {
            'name': '大东区',
            'value': 1
        }, {
            'name': '皇姑区',
            'value': 7
        }, {
            'name': '铁西区',
            'value': 1
        }, {
            'name': '苏家屯',
            'value': 3
        },{
            'name': '浑南区',
            'value': 2
        }, {
            'name': '沈北新区',
            'value': 1
        },{
            'name': '于洪区',
            'value': 4
        }, {
            'name': '法库县',
            'value': 0
        },{
            'name': '新民市',
            'value': 5
        },{
            'name': '其他区域',
            'value': 3
        }],
    }]
};
/////////////////////////////end


//各区县总人群密度统计
option4 = {
    title: {
        text: '',
        left: 'center',
        top: '49%',
        textStyle: {
            fontSize: 16,
            color: '#3C4353',
            fontStyle: 'normal',
            fontWeight: '300',
            fontFamily: 'PingFangSC-Regular,PingFang SC;',
        }
    },
    color: ['#7eacea', '#e15777', '#95ea71', '#ea9b4f', '#7577df', '#be72d8', '#fff'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '统计',
        type: 'pie',
        radius: [30, 110],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
            show: true,
            formatter: '{d}%',
        },
        emphasis: {
            label: {
                show: true
            }
        },
        data: [{
            value: 3477,
            name: '和平区'
        }, {
                value: 1103,
                name: '沈河区'
            },
            {
                value: 468,
                name: '大东区'
            },
            {
                value: 1595,
                name: '皇姑区'
            },
            {
                value: 1628,
                name: '铁西区'
            },
            {
                value: 195,
                name: '苏家屯区'
            },{
                value: 129,
                name: '浑南区'
            },
            {
                value: 162,
                name: '沈北新区'
            },
            {
                value: 582,
                name: '于洪区'
            },
            {
                value: 108,
                name: '辽中区'
            },
            {
                value: 0,
                name: '康平县'
            },{
                value: 25,
                name: '法库县'
            },{
                value: 115,
                name: '新民市'
            },
            {
                value: 266,
                name: '市外区域'
            }
        ]
    }, {
        name: '占位',
        type: 'pie',
        silent: true,
        center: ['50%', '50%'],
        radius: 30,
        hoverAnimation: false,
        label: {
            show: false,
            position: 'center'
        },
        data: [{
            value: 1,
            name: '占位2'
        },

        ],
        itemStyle: {

            normal: {
                color: '#061436',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
            },
        }
    }, ]
};
//////////////////////各区县人群密度统计比较 end
//今日实时流量

var shadowColor = '#374b86';
var value = 42;
option5 = {

    title: {
        text: '公交',
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [
        {
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: true,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = 20;
option6 = {
    
    title: {
        text: '地铁',
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: true,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = 38;
option7 = {
    
    title: {
        text: '其他出行方式',
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: true,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                    colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

//////////////////////今日实时流量 end
//和平区人群密度统计
option_heping_density = {

    grid: {
        top: '15%',
        right: '8%',
        left: '8%',
        bottom: '15%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: [],
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 15
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}',
            color: '#999',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [],
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF9A22' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFD56E' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
            }
        },
        label: {
            normal: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
                position: 'top',
            }
        }
    }, {
        data: [],
        type: 'line',
        smooth: true,
        name: '折线图',
        symbol: 'none',
        lineStyle: {
            color: '#05e1ff',
            width: 4,
            shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
            shadowBlur: 15,
            shadowOffsetY: 20,
        }
    }]
}
///////////////////////////////end

