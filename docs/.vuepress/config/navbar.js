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
        text: '地信研学',
        link: '/02.geography/',
        icon: "fas fa-globe-asia",
        items: [
            {
                text: '坐标系',
                items: [
                    { text: '地理坐标系', link: '/02.geography/CoordinateSystem/1.gcs' }

                ]

            }
        ]
    },

    { 
        text: '气象研学', 
        link: '/03.meteorology/', 
        icon: "fas fa-cloud-sun-rain",
        items:[
            {
                text:'插值', 
                items:[
                    {text:'ANUSPLIN', link:'/03.meteorology/ANUSPLIN/1.Start'}
                ]
            }
        ]
    },

    {
        text: '遥感研学',
        link: '/04.RS/',
        icon: "fas fa-satellite",
        items: [
            {
                text: '植被指数',
                items: [
                    { text: 'Sentinel-2', link:'/04.RS/VI/1.Sentinel-2'}
                ]
            }
        ]
    },

    {
        text: '资源教程',
        link: '/05.resources/',
        icon: "fab fa-sourcetree",
        items: [
            {
                text: 'Python',
                items: [
                    { text: '获取路径', link: '/05.resources/Python/0.GetPath'},
                    { text: '缺失值插补', link: '/05.resources/Python/1.FillNoData' }
                ]
            }
        ]
    },

    {
        text: '地理人文',
        link: '/06.literature/',
        icon: "fab fa-artstation",
        items: [
            {
                text: '寓言短诗',
                items: [
                    { text: '2020：一途旅行，一途人生', link: '/06.literature/Sinngedichte/ReiseLeben' }
                ]
            }
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