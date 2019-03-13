// hide navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}

//hover for mobile

// var hovermobile = document.querySelector('.workpic');
// var hovertop = document.querySelector('.hovertop');

// hovermobile.addEventListener('touchstart',function touchStart(event){
//   hovertop.addClass('.hovertop-mobile'+'.hovertop-mobile h3');
// });
// hovermobile.addEventListener('touchmove',touchMove);
// hovermobile.addEventListener('touchend',touchEnd);

$(".workpic").on("tap",function touchStart(event) {
  $(".hovertop").addClass("hovertop-mobile");
});
// $(".pr-account-tab").on("touchmove", touchMove);
// $(".workpic").on("touchend", touchEnd);



// function touchEnd(event) {
//   $(.hovertop).removeClass(".hovertop-mobile"+".hovertop-mobile h3");
// }
