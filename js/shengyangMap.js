
var allData={
    "citys":[{
        "name": "沈河区",
        "value": [123.4306640625, 41.8115234375, 2],
        "symbolSize": 5,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },{
        "name": "新民市",
        "value": [122.828868, 41.956508, 2],
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },{
        "name": "法库县",
        "value": [123.216722, 42.337045, 2],
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },{
        "name": "康平县",
        "value": [123.322703, 42.711533, 2],
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },{
        "name": "辽中区",
        "value": [122.751269, 41.562725, 2],
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    },{
        "name": "沈北新区",
        "value": [123.531471, 41.992312, 14],
        "symbolSize": 14,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },{
        "name": "于洪区",
        "value": [123.260829, 41.965833, 14],
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    },{
        "name": "铁西区",
        "value": [123.020664, 41.607808, 14],
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },{
        "name": "浑南区",
        "value": [123.618981, 41.701946, 14],
        "symbolSize": 8,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    },{
        "name": "大东区",
        "value": [123.509956, 41.880503, 14],
        "symbolSize": 6,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    },{
        "name": "苏家屯区",
        "value": [123.501604, 41.555904, 14],
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }],
    "moveLines":[{
        "fromName": "沈河区",
        "toName": "新民市",
        "coords": [
            [123.4306640625, 41.8115234375],
            [122.828868, 41.956508]
        ]
    },{
        "fromName": "沈河区",
        "toName": "法库县",
        "coords": [
            [123.4306640625, 41.8115234375],
            [123.216722, 42.337045]
        ]
    },{
        "fromName": "康平县",
        "toName": "沈河区",
        "coords": [
            [123.4306640625, 41.8115234375],
            [123.322703, 42.711533]
        ]
    },{
        "fromName": "沈河区",
        "toName": "辽中区",
        "coords": [
            [123.4306640625, 41.8115234375],
            [122.751269, 41.562725]
        ]
    },{
        "fromName": "新民市",
        "toName": "法库县",
        "coords": [
            [122.828868, 41.956508],
            [123.216722, 42.337045]
        ]
    },{
        "fromName": "沈河区",
        "toName": "沈北新区",
        "coords": [
            [123.4306640625, 41.8115234375],
            [123.531471, 41.992312]
        ]
    },{
        "fromName": "沈河区",
        "toName": "于洪区",
        "coords": [
            [123.4306640625, 41.8115234375],
            [123.260829, 41.965833]
        ]
    },{
        "fromName": "沈河区",
        "toName": "铁西区",
        "coords": [
            [123.4306640625, 41.8115234375],
            [123.020664, 41.607808]
        ]
    },{
        "fromName": "沈河区",
        "toName": "浑南区",
        "coords": [
            [123.4306640625, 41.8115234375],
            [123.618981, 41.701946]
        ]
    },{
        "fromName": "沈河区",
        "toName": "大东区",
        "coords": [
            [123.4306640625, 41.8115234375],
            [123.509956, 41.880503]
        ]
    },{
        "fromName": "沈河区",
        "toName": "苏家屯区",
        "coords": [
            [123.4306640625, 41.8115234375],
            [123.501604, 41.555904]
        ]
    }]
};

// var myChart = echarts.init(document.getElementById('main8'));
echarts.registerMap('沈阳市', geoJson);
option_shengyangMap = {
    title:{
        text:'',
        padding:18,
        textStyle:{
            color:'#75777a'
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: '沈阳市',
        label: {
            emphasis: {
                show: true,
                color:'#950a23'
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: 'rgba(7,21,57,0.5)',
                borderColor: '#950a23'
            },
            emphasis: {
                areaColor: '#00fffb', //鼠标指上市时的颜色
                shadowBlur:15,
                shadowColor:'#000'
            }
        },
        zoom:2.5,
        center:[123.0927036,41.76217911]
    },
    series: [{
        type: 'map'
    },{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',
            symbolSize: 12,
            trailLength: 0.2 ,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#58B3CC'
                }, {
                    offset: 1,
                    color: '#F58158'
                }], false),
                width: 1,
                opacity: 0.5,
                curveness: 1
            }
        },
        data: allData.moveLines
    }]
};
// myChart.setOption(option_shengyangMap);