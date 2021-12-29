module.exports = {
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
    '/02.geography/': [
        {
            title: '坐标系', 
            collapsable: false, 
            children: [
                'CoordinateSystem/1.gcs', 
            ]
        }
    ],
    '/03.meteorology/ANUSPLIN/': [
        {
            title:'插值',
            collapsable: false, 
            children:[
                {
                    title: 'ANUSPLIN',
                    collapsable: true, 
                    children: [
                        '1.Start',
                        '2.Description',
                        '3.IPProcess',
                        '4.DataPP', 
                        '5.DEMPP', 
                        '6.Scripting'
                    ]
                }
            ]
        }
    ],
    '/04.RS/': [
        {
            title: '植被指数',
            collapsable: false,
            children: [
                 '/04.RS/VI/1.Sentinel-2',
            ]
        }
    ],
    '/05.resources/': [
        {
            title: 'Python',
            collapsable: false,//true, 
            children: [
                'Python/0.GetPath',
                'Python/1.FillNoData',
            ]
        }
    ],
    '/06.literature/': [
        {
            title: '寓言短诗',
            collapsable: false,
            children: [
                'Sinngedichte/ReiseLeben'
            ]
        }


    ]
}