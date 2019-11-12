export {imgSlide};
import anime from 'animejs';

function fadeIn(target) {

    anime({
      targets: target,
      opacity: [0, 1],
      easing: "linear",
      duration: 2000

    });
}

function imgSlide() {


    let index = 0;
    let leftBtn = document.querySelector(".left-btn");
    let rightBtn = document.querySelector(".right-btn");
    let images = document.querySelectorAll(".pictures");
    fadeIn(images);
    
    rightBtn.addEventListener("click", function(){
        index++;
        fadeIn(images);

        if (index > images.length -1) {

            index = 0;
            images[index].classList.remove("hide");
            images[images.length-1].classList.add("hide");
    
        }else {
            
            images[index].classList.remove("hide");
            images[index-1].classList.add("hide");
        }

     });

     leftBtn.addEventListener("click", function(){
        index--;
        fadeIn(images);

        if (index < 0) {

            index = images.length -1;
            images[index].classList.remove("hide");
            images[0].classList.add("hide");
            
        }else {
            
            images[index].classList.remove("hide");
            images[index+1].classList.add("hide");
        }
     });

}






