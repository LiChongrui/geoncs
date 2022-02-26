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
        text: 'Python 基础',
        icon: "fab fa-python",
        items: [
            {
                text: '数据类型',
                items: [
                    { text: '字符串', link: '/Python/DataType/str' },
                    { text: '列表', link: '/Python/DataType/list' },
                    { text: '字典', link: '/Python/DataType/dict' },
                    { text: '元组', link: '/Python/DataType/tuple' }
                ]
            },
            {
                text: '系统操作',
                items: [
                    { text: '获取路径', link: '/Python/System/GetPath' }
                ]
            },
            {
                text: '数据处理',
                items: [
                    { text: '缺失值插补', link: '/Python/DataCleaning/FillNoData' }
                ]
            }
        ]
    },
    {
        text: '资源教程',
        icon: "fab fa-sourcetree",
        items: [
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
            { text: '地理与气象分析库', link:'http://gma.luosgeo.com/'},
            { text: '反馈与赞助', link: '/Support'}
        ]      
    },
]