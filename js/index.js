 //等页面加载完成后执行的js代码

 window.addEventListener('load', function() {

     //调用构造函数
     var jd = new JD();
     jd.searchGradient();
     jd.downTime();
     jd.slide();

 });



 //创建一个jd构造函数
 var JD = function() {

 };

 //构造函数的原型

 JD.prototype = {
     //顶部收缩颜色框渐变方法
     searchGradient: function() {

         // 1. 给滚动条添加滚动事件
         window.addEventListener('scroll', scrollTopFun);
         //页面加载就调用颜色渐变函数
         scrollTopFun();

         //监听事件
         function scrollTopFun() {

             var header = document.querySelector('#header'); //获取头部
             var slide = document.querySelector('#slide'); //轮播图区域

             var scrollTop = document.documentElement.scrollTop; //页面滚动高度
             // console.log(scrollTop);
             var slideHeight = slide.offsetHeight; //轮播图的高度
             // console.log(slideHeight);

             //计算透明度变化
             var opacity = scrollTop / slideHeight;

             //设置顶部的透明度值
             if (opacity > 1) {
                 header.style.backgroundColor = 'rgba(222, 24, 27, 1)';
             } else {
                 header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
             }
         }


     },

     //2.设置秒杀时间
     downTime: function() {
         var futureTime = new Date(2018, 8, 23, 12, 00, 00).getTime() / 1000; //获取将来时间的毫秒数
         // console.log(futureTime);
         var nowTime = new Date().getTime() / 1000; //当前时间毫秒数

         var seckillTime = futureTime - nowTime;

         //获取所有的时间显示框
         var spans = document.querySelectorAll('.down-time span');
         // console.log(spans);  

         //开启定时器
         var timeID = setInterval(function() {
             seckillTime--;
             if (seckillTime <= 0) {
                 clearInterval(timeID);

             }
             var hour = Math.floor(seckillTime / 3600); //时
             var min = Math.floor(seckillTime % 3600 / 60); //分
             var sec = Math.floor(seckillTime % 60); //秒， 60除不尽的都是秒数

             spans[0].innerHTML = Math.floor(hour / 10);
             spans[1].innerHTML = Math.floor(hour % 10);
             spans[3].innerHTML = Math.floor(min / 10);
             spans[4].innerHTML = Math.floor(min % 10);
             spans[6].innerHTML = Math.floor(sec / 10);
             spans[7].innerHTML = Math.floor(sec % 10);

         }, 1000);

     },



     //轮播图的js
     slide: function() {
         var mySwiper = new Swiper('.swiper-container', {
             direction: 'horizontal', // 垂直切换选项
             autoplay: true, //等同于以下设置
             // autoplay: {
             //   delay: 3000,
             //   stopOnLastSlide: false,
             //   disableOnInteraction: true,
             //   },
             loop: true, // 循环模式选项

             // 如果需要分页器
             pagination: {
                 el: '.swiper-pagination',

             }

         });
     }

 }
