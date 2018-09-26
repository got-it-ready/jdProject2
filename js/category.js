window.addEventListener('load', function() {

    //调用构造函数
    var jdCategory = new JdCategory();
    jdCategory.initLeftSlide();
    jdCategory.initRightSlide();
    jdCategory.leftCeiling();
    
})

//创建构造函数
var JdCategory = function(){

}

JdCategory.prototype = {

    initLeftSlide: function() {
        // 实现左边内容滑动
        var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    },

    //左侧点击吸顶效果
    leftCeiling: function(){
        var ul = document.querySelector('.category-left ul');
        var lis = ul.children;
        // console.log(lis);

        //给li添加下标
        for(var i=0; i<lis.length; i++){
            lis[i].index = i;
             // console.log(lis[i].index);
        }
        //给li添加点击事件,事件捕获
        ul.addEventListener('click',function(e){
                
         //拿到被点击的li的下标
            var li = e.target.parentNode;
          //拿到被点击的li的下标
            var index = li.index;   
            // console.log(li);
            //获取li的高度
            var liHeight = li.offsetHeight;
            //console.log(liHeight);
            //计算需要的位移
            var distanceY = -index * liHeight;
            //计算最大位移
            var maxDistanceY = document.querySelector('.category-left').offsetHeight - ul.offsetHeight;
            // 给滑动容器设置位移 
            if( distanceY > maxDistanceY){
                ul.parentNode.parentNode.style.transform = "translateY("+distanceY+"px"+")";
            }else{
                //如果 小于最大位移就把它设置为最大的位移
                ul.parentNode.parentNode.style.transform = "translateY("+maxDistanceY+"px"+")";
            }

            //给容器添加动画位移
            ul.parentNode.parentNode.style.transitionDuration = "300ms";

            //删除所有li标签的active类
            for(var i=0; i<lis.length; i++){
                lis[i].classList.remove('active');
            }
                
              //改变当前被点击的li的样式
              li.classList.add('active');
        });
    },

    initRightSlide: function() {
        //右边商品列表滑动
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    }



    
}
