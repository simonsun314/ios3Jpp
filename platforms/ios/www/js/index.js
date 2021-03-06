// Initialize your app
var myApp = new Framework7({
    template7Pages: true,

    animateNavBackIcon: true,

    material: true,
    uniqueHistory: true,
    uniqueHistoryIgnoreGetParameters: true,
    allowDuplicateUrls:true,
    reloadPages:true,
    modalTitle:"<font style='color:green'>金坛软件友情提示：</font>",
    init: false,
    
    template7Data: {
        'page:ResultInfo': {
            Result: '正品',
            Tag: '已开封',
            Count: 2,
            Date: "16-Apr-17 16:24:03 CST",
            Addr: "上海市浦东新区永泰路1757号",
            Vendor: '金口酒业',
            VD: '金口酒业继承了毫州酒之精华,生产的金坛子系列白酒具有清如水晶,香如幽兰,入口绵甜,回味经久不息等特点,产品倍受消费者青睐.',
            Product: '山水金坛窖原浆60度',
            PD: '金坛子安徽原浆白酒古井镇山水金坛窖60度5000ml浓香型酒水收藏酒',
            BatchNum: 'batch001',
            SN: '38742e67732f616a4662',
            ManufDate: 'Tuesday, 28-Feb-17 00:00:00 CST',
            Origin: '亳州',
            ManufAddr: '金坛一厂',
            ShelfLife: '3 Y',
            VendorIcon: "http://106.14.1.85/static/img/jt-vendor.jpg",
            Icon: "http://106.14.1.85/static/img/jt-product-1.jpg"
        },

        HisList: [
            {
                "Count": 1,
                "Addr": "Addr: 重庆市江北区宏帆路",
                "DT": "Sunday, 16-Apr-17 08:44:52 CST",
                "Status": "sealed"
            },
            {
                "Count": 2,
                "Addr": "Addr: 重庆市江北区宏帆路",
                "DT": "Sunday, 16-Apr-17 08:44:55 CST",
                "Status": "sealed"
            },
            {
                "Count": 3,
                "Addr": "Addr: 重庆市江北区宏帆路",
                "DT": "Sunday, 16-Apr-17 08:44:57 CST",
                "Status": "sealed"
            },
            {
                "Count": 4,
                "Addr": "Addr: 重庆市江北区宏帆路",
                "DT": "Sunday, 16-Apr-17 08:44:58 CST",
                "Status": "sealed"
            },
            {
                "Count": 5,
                "Addr": "Addr: 重庆市江北区宏帆路",
                "DT": "Sunday, 16-Apr-17 08:44:59 CST",
                "Status": "sealed"
            },
            {
                "Count": 6,
                "Addr": "Addr: 重庆市江北区宏帆路",
                "DT": "Sunday, 16-Apr-17 08:45:00 CST",
                "Status": "sealed"
            },
            {
                "Count": 7,
                "Addr": "Addr: 重庆市江北区华新街270号",
                "DT": "Sunday, 16-Apr-17 08:50:15 CST",
                "Status": "opened"
            },
            {
                "Count": 8,
                "Addr": "Addr: 重庆市江北区华新街270号",
                "DT": "Sunday, 16-Apr-17 08:51:41 CST",
                "Status": "opened"
            },
            {
                "Count": 9,
                "Addr": "Addr: 重庆市江北区华新街270号",
                "DT": "Sunday, 16-Apr-17 08:51:44 CST",
                "Status": "opened"
            },
            {
                "Count": 10,
                "Addr": "Addr: 重庆市江北区华新街270号",
                "DT": "Sunday, 16-Apr-17 08:51:45 CST",
                "Status": "opened"
            },
            {
                "Count": 11,
                "Addr": "Addr: 重庆市江北区华新街270号",
                "DT": "Sunday, 16-Apr-17 08:51:45 CST",
                "Status": "opened"
            },
            {
                "Count": 12,
                "Addr": "Addr: 重庆市江北区华新街270号",
                "DT": "Sunday, 16-Apr-17 08:51:46 CST",
                "Status": "opened"
            }
        ]
    }
    }
);
var $$ = Dom7;
// Add main View
var mainView = myApp.addView('.view-main');

// Swiper method
var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

//页面跳转resultInfo.html方法
var result = function () {
     myApp.hidePreloader();

    mainView.router.load({
        url: 'resultInfo.html',
        context: testobj,
        ignoreCache: true, 
        //reload: true,
    });
       //mainView.router.refreshPage() ;
};


//bootUp页面的测试按钮
$$('.load-home').on('click',function () {
    mainView.router.load({
        url:'home.html'
    })
});

//home page事件(测试按钮)，添加了loading反馈，之后跳转到resultInfo.html
$$('.result').on('click', function () {
   /* myApp.showPreloader();
    setTimeout(function () {
        myApp.hidePreloader();
        result();
    }, 2000);
    */
});

//ResultInfo page的回调函数,页面切换至detail.html
myApp.onPageInit('ResultInfo', function (page) {
    $$('.detail-click').on('click', function () {
	reqHistoryMyServer();
    /*
        mainView.router.load({
            url: 'detail.html',
            context: Template7.data.HisList // CSS
        })
        */
    });
    $$('.home-click').on('click', function () {
        mainView.router.load({
            url: 'home.html'
        })
    });
});


//页面返回时，home page的回调函数
myApp.onPageInit('bootUp', function (page) {
    //myApp.alert(hellosimon);
    //myApp.alert(initNfcCount);
    myApp.alert("你好");
    //checkNfcAuthor();
   // showhint("wo shuo");
  if(initNfcCount==0) {
    myApp.alert("A");
     setTimeout(logFunc,500); 
    // setTimeout(logFunc,500); 
    // setTimeout(setlogfunc,500); 
     initNfcCount++;
    }
    if(initNfcCount==0)   {
        myApp.alert("B");
        initNfcCount++;
    } 

});


myApp.onPageInit('home', function (page) {
    //myApp.alert(hellosimon);
    //myApp.alert(initNfcCount);
    //myApp.alert("你好");

 
    $$('.result-back').on('click', function () {
        myApp.showPreloader();
        setTimeout(function () {
            myApp.hidePreloader();
            result();
        }, 2000); //添加了loading反馈，之后跳转到pagetwo.html
    });
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
});
//detail page的回调函数,页面切换至detail.html
myApp.onPageInit('detail', function (page) {
    $$('.home-click').on('click', function () {
        mainView.router.load({
            url: 'home.html'
        })
    });
});

myApp.init();



window.onload = function(){
 //   myApp.alert("window init ok");
   //  if(initNfcCount==0)  setTimeout(logFunc,500); 
  //      initNfcCount++;
    

       
        //if(initNfcCount==0)    initNfcCount++;
}



