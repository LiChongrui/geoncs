module.exports = {
    // 地理研学侧边栏，
    // 地理
    '/geography/GIS/CoordinateSystem/': [
        {
            title: '坐标系', 
            collapsable: false, 
            children: [
                'GEOGCS', 
                'PROJCS', 
                'GEOCCS',
                'VERT_CS',
                'COMPD_CS',
                'GEOGCRS',
                'PROJCRS',
            ]
        },
    ],
    //气象
    '/geography/MET/ANUSPLIN/': [
        {
            title: 'ANUSPLIN',
            collapsable: false,//true, 
            children: [
                'Start',
                'Description',
                'IPProcess',
                'DataPP', 
                'DEMPP', 
                'Scripting'
            ]
        }
    ],
    //遥感
    '/geography/RS/Sentinel-2/': [
        {
            title: 'Sentinel-2',
            collapsable: false,
            children: [
                'S2-Introduce',
                'S2-Spectrum',
                'S2-VI',
            ]
        }
    ],
    // Python 基础
    '/BasicPy/DataType/': [
        {
            title: '数据类型',
            collapsable: false,//true, 
            children: [
                'str',
                'list',
                'dict',
                'tuple',
                'set',
            ]
        },
    ],
    '/BasicPy/System/': [
        {
            title: '系统操作',
            collapsable: false,//true, 
            children: [
                'GetPath',
            ]
        },
    ],
    '/BasicPy/DataCleaning/': [
        {
            title: '数据处理',
            collapsable: false,//true, 
            children: [
                'FillNoData',
            ]
        },
    ],
    // 资源教程
    '/resources/': [
        {
            title: '陆表覆盖',
            collapsable: false,
            children: [
                'LST/WC_China_ESA_2020_Data',
            ]
        }
    ],

}