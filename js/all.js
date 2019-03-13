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

let hovermobile = document.querySelector('.workpic');
let hovertop = document.querySelector('.hovertop');

hovermobile.addEventListener('click',touchStart,false);
// hovermobile.addEventListener('touchmove',touchMove,false);
// hovermobile.addEventListener('touchend',touchEnd,false);


function touchStart(event) {
  hovertop.addClass(".hovertop-mobile"+".hovertop-mobile h3");
}

// function touchEnd(event) {
//   hovertop.removeClass(".hovertop-mobile"+".hovertop-mobile h3");
// }

