module.exports = {
    // gma的侧边栏
    '/gma/': [
        {
            title: '开始',
            collapsable: false,
            children: [
                'Introduce',
                'Setup',
            ]

        },
        {
            title: '函数和功能', 
            collapsable: false, 
            children: [
                'Structure',
                'Function',
                'Default'
            ]
        },
        {
            title: '使用指南',
            collapsable: false,
            children: [
                'UserGuide-index',
                'UserGuide-math',
                'UserGuide-osf',
                'UserGuide-smc',
                'UserGuide-rasp',
                'UserGuide-vesp',
            ]

        },
        {
            title: '更新', 
            collapsable: false, 
            children: [
                'Plan', 
                'Update'
            ]
        }
    ],
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
    // 资源教程
    '/resources/': [
        {
            title: '数据处理',
            collapsable: false,//true, 
            children: [
                'DataProcessing/GetPath',
                'DataProcessing/FillNoData',
            ]
        },
        {
            title: '陆表覆盖',
            collapsable: false,
            children: [
                'LST/WC_China_ESA_2020_Data',
            ]
        }
    ],
    // 地理人文就不配置侧边栏了
    //'/literature/': [
    //    {
    //        title: '寓言短诗',
    //        collapsable: false,
    //        children: [
    //            'Sinngedichte/ReiseLeben'
    //        ]
    //    }
    //]
}