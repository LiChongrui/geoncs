module.exports = {
    // gma的侧边栏
    '/01.gma/': [
        {
            title: '开始', 
            collapsable: false, 
            children: [
                '1.Introduce', 
                '2.Setup'
            ]
        },
        {
            title: '函数和功能', 
            collapsable: false, 
            children: [
                '3.Structure', 
                '4.Function', 
                '5.Default',
                '6.Use'
            ]
        },
        {
            title: '更新', 
            collapsable: false, 
            children: [
                '7.Plan', 
                '8.Update'
            ]
        }
    ],
    // 地理研学侧边栏，
    // 地理
    '/02.geography/GIS/CoordinateSystem/': [
        {
            title: '坐标系', 
            collapsable: false, 
            children: [
                '1.gcs', 
            ]
        }
    ],
    //气象
    '/02.geography/MET/ANUSPLIN/': [
        {
            title: 'ANUSPLIN',
            collapsable: false,//true, 
            children: [
                '1.Start',
                '2.Description',
                '3.IPProcess',
                '4.DataPP', 
                '5.DEMPP', 
                '6.Scripting'
            ]
        }
    ],
    //遥感
    '/02.geography/RS/Sentinel-2/': [
        {
            title: 'Sentinel-2',
            collapsable: false,
            children: [
                '1.S2-Introduce',
                '2.S2-Spectrum',
                '3.S2-VI',
            ]
        }
    ],
    // 资源教程
    '/03.resources/': [
        {
            title: '数据处理',
            collapsable: false,//true, 
            children: [
                'DataProcessing/0.GetPath',
                'DataProcessing/1.FillNoData',
            ]
        },
        {
            title: '陆表覆盖',
            collapsable: false,
            children: [
                'LST/1.WC_China_ESA_2020_Data',
            ]
        }
    ],
    // 地理人文就不配置侧边栏了
    //'/06.literature/': [
    //    {
    //        title: '寓言短诗',
    //        collapsable: false,
    //        children: [
    //            'Sinngedichte/ReiseLeben'
    //        ]
    //    }
    //]
}