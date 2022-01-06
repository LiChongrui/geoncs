module.exports = [  
    { text: '首页', link: '/', icon: "fas fa-house-user" },

    { 
        text: '地理与气象分析库', 
        link: '/01.gma/',
        icon:"fas fa-book-reader",
        items: [
            {
                text: '开始', 
                items:[
                    { text: '简介', link:'/01.gma/1.Introduce'},
                    { text: '安装和引用', link:'/01.gma/2.Setup'}
                 ]
             },
            {
                text: '函数和功能', 
                items:[
                    {text:'库组织方式', link: '/01.gma/3.Structure'},
                    {text:'函数功能列表', link: '/01.gma/4.Function'},
                    {text:'默认设置', link: '/01.gma/5.Default'},
                    {text:'使用函数', link: '/01.gma/6.Use'},
                ]
                
             },
            {
                text: '更新',
                items:[
                    {text:'更新计划', link: '/01.gma/7.Plan'},
                    {text:'更新日志', link: '/01.gma/8.Update'},
                ]
             },
        ]
    },
    {
        text: '地理研学',
        icon: "fas fa-globe-asia",
        items: [
            {
                text: '地信研学',
                link: '/02.geography/GIS/',
                items: [
                    { text: '坐标系', link: '/02.geography/GIS/CoordinateSystem/1.gcs' }
                ]
            },
            {
                text: '气象研学',
                link: '/02.geography/MET/',
                items: [
                    { text: 'ANUSPLIN', link: '/02.geography/MET/ANUSPLIN/1.Start' }
                ]
            },
            {
                text: '遥感研学',
                link: '/02.geography/RS/',
                items: [
                    { text: 'Sentinel-2', link: '/02.geography/RS/Sentinel-2/1.S2-Introduce' }
                ]
            },

        ]
    },
    {
        text: '资源教程',
        link: '/03.resources/',
        icon: "fab fa-sourcetree",
        items: [
            {
                text: '数据处理',
                items: [
                    { text: '获取路径', link: '/03.resources/DataProcessing/0.GetPath' },
                    { text: '缺失值插补', link: '/03.resources/DataProcessing/1.FillNoData' }
                ]
            },
            {
                text: '陆表覆盖',
                items: [
                    { text: 'ESA WorldCover', link: '/03.resources/LST/1.WC_China_ESA_2020_Data' },
                ]
            },
        ]
    },
    {
        text: '地理人文',
        link: '/04.literature/',
        icon: "fab fa-artstation",
        items: [
            {
                text: '寓言短诗',
                items: [
                    { text: '2020：一途旅行，一途人生', link: '/04.literature/Sinngedichte/ReiseLeben' }
                ]
            },
            {
                text: '绘画设计展',
                items: [
                    { text: '卡通画', link: '/04.literature/Drawing/1.Cartoon' },
                    { text: '艺术手绘', link: '/04.literature/Drawing/2.Art' }
                ]
            },
        ]
    },
    {
        text:'探索',
        icon:"fab fa-wpexplorer",
        items:[
            { text: '时间线', link: '/timeline/', icon:"reco-date"},
            { text: '分类', link: '/categories/地理与气象分析库/', icon:"reco-category"},
            { text: '标签', link: '/tag/', icon: 'reco-tag' },
        ]      
    }
]