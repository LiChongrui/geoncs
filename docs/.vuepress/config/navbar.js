module.exports = [  
    { text: '首页', link: '/', icon: "fas fa-house-user" },

    {
        text: '地理研学',
        icon: "fas fa-book-reader",
        items: [
            {
                text: '地信研学',
                link: '/geography/GIS/',
                items: [
                    { text: '坐标系', link: '/geography/GIS/CoordinateSystem/GEOGCS' },
                ]
            },
            {
                text: '气象研学',
                link: '/geography/MET/',
                items: [
                    { text: 'ANUSPLIN', link: '/geography/MET/ANUSPLIN/Start' }
                ]
            },
            {
                text: '遥感研学',
                link: '/geography/RS/',
                items: [
                    { text: 'Sentinel-2', link: '/geography/RS/Sentinel-2/S2-Introduce' }
                ]
            },

        ]
    },
    {
        text: '资源教程',
        link: '/resources/',
        icon: "fab fa-sourcetree",
        items: [
            {
                text: '数据处理',
                items: [
                    { text: '获取路径', link: '/resources/DataProcessing/GetPath' },
                    { text: '缺失值插补', link: '/resources/DataProcessing/FillNoData' }
                ]
            },
            {
                text: '陆表覆盖',
                items: [
                    { text: 'ESA WorldCover', link: '/resources/LST/WC_China_ESA_2020_Data' },
                ]
            },
        ]
    },
    {
        text: '地理人文',
        link: '/literature/',
        icon: "fab fa-artstation",
        items: [
            {
                text: '寓言短诗',
                items: [
                    { text: '2020：一途旅行，一途人生', link: '/literature/Sinngedichte/ReiseLeben' }
                ]
            },
            {
                text: '绘画设计展',
                items: [
                    { text: '卡通画', link: '/literature/Drawing/Cartoon' },
                    { text: '艺术手绘', link: '/literature/Drawing/Art' }
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
    },
    { 
        text: '地理与气象分析库', 
        link: 'http://gma.luosgeo.com/',
        icon: "fas fa-globe-asia",
       // items: [
        //    {
        //        text: '开始', 
        //        items:[
        //            { text: '简介', link:'/gma/Introduce'},
        //            { text: '安装和引用', link:'/gma/Setup'}
        //         ]
        //     },
        //    {
        //        text: '函数和功能', 
        //        items:[
        //            {text:'库组织方式', link: '/gma/Structure'},
       //             {text:'函数功能列表', link: '/gma/Function'},
        //            {text:'默认设置', link: '/gma/Default'},
        //        ]              
        //    },
       //     {
       //         text: '使用指南',
       //         items: [
       //             { text: '指数运算', link: '/gma/UserGuide-index' },
       //             { text: '数学运算', link: '/gma/UserGuide-math' },
      //              { text: '系统交互', link: '/gma/UserGuide-osf' },
      //              { text: '空间杂项', link: '/gma/UserGuide-smc' },
     //               { text: '栅格处理', link: '/gma/UserGuide-rasp' },
      //              { text: '矢量处理', link: '/gma/UserGuide-vesp' },
      //          ]
      //      },
      //      {
     //           text: '更新',
     //           items:[
     //               {text:'更新日志', link: '/gma/Update'},
     //               {text:'更新预览', link: '/gma/Plan'},
     //           ]
     //        },
     //   ]
    },
]