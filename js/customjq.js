$(document).ready(function(){

const ww = $(window).width();

 //window width 1600이상에서만 적용시킨다
 $(window).scroll(function(){
    if( ww >= 1600){
          ///Shop By Style 투명하게 만들기///
          //window scrollTop값
          const wscrT = $(window).scrollTop();
          console.log(wscrT);

          //투명하게 만들기
          //적용하고싶은 섹션 scrollTop값 구하기 2476에서 3060까지 
          //0과1은 opacity
          //1 = a * 2476 + b
          //0 = a * 3060 + b
          //1=a*2476+b,0=a*3060+b 방정식 풀기
          //a = - 1/584
          //b = 765/146
          const Styleopacity = -1/584 * wscrT + 765/146;
          $('.style-section').css('opacity',Styleopacity);

          //작아지게 만들기
          //1 과 0.8은 scale
          // 1 = a * 2476 + b
          // 0.8 = a * 3060 + b
          //a = - 1/2920
          //b = 1349/730
            //const scale = - 1/2920 * wscrT + 1349/730;
            //$('.style-section').css('transform',`scale(${scale})`);

         ///Swiper New Product 투명하게 만들기///
          //1 = a * 3418 + b
          //0 = a * 3936 + b
          //1=a*2476+b,0=a*3060+b 방정식 풀기
          //a = - 1/518
          //b = 1968/259
          const Productopacity = -1/518 * wscrT + 1968/259;
          $('.product-section').css('opacity',Productopacity);

        ///Md Pick 투명하게 만들기///
          //1 = a * 4443 + b
          //0 = a * 5035 + b
          //1=a*2476+b,0=a*3060+b 방정식 풀기
          //a = - 1/592
          //b = 5035/592
          const pickopacity = -1/592 * wscrT + 5035/592;
          $('.md-section').css('opacity',pickopacity);


    }
});



}); //end 