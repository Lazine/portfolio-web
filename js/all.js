// hide navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}

//hoverclick for mobile

var hovermobile = document.querySelectorAll('.workpic');
var hovertop = document.querySelector('.hovertop');

for(let i=0 ; i<hovermobile.length ; i++){
  hovermobile[i].addEventListener('touchstart',function(event){
    hovertop.style.opacity= 10;
  },false);

  hovermobile[i].addEventListener('touchend',function(event){
    hovertop.style.opacity= 0;
  },false);
}

// hovermobile.addEventListener('touchstart',function(event){
//   hovertop.style.opacity= 10;
// },false);

// hovermobile.addEventListener('touchmove',touchMove);

// hovermobile.addEventListener('touchend',function(event){
//   hovertop.style.opacity= 0;
// },false);

// hovermobile.addEventListener('click',function touchStart(event){
//   hovertop.style.opacity= "10";
// });


// hovermobile.addEventListener('touchend',touchEnd);

// $(".workpic").on("click",function touchStart(event) {
//   $(".hovertop").addClass("hovertop-mobile");
// });
// $(".pr-account-tab").on("touchmove", touchMove);
// $(".workpic").on("touchend", touchEnd);

// function touchEnd(event) {
//   $(.hovertop).removeClass(".hovertop-mobile"+".hovertop-mobile h3");
// }