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
    // 地理研学侧边栏，地理、气象、遥感分别配置
    '/02.geography/GIS/CoordinateSystem/': [
        {
            title: '坐标系', 
            collapsable: false, 
            children: [
                '1.gcs', 
            ]
        }
    ],
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
    '/02.geography/RS/VI/': [
        {
            title: '植被指数',
            collapsable: false,
            children: [
                 '1.Sentinel-2',
            ]
        }
    ],
    // 资源教程
    '/03.resources/': [
        {
            title: 'Python',
            collapsable: false,//true, 
            children: [
                'Python/0.GetPath',
                'Python/1.FillNoData',
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