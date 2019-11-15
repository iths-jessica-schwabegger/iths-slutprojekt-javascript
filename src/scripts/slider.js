export {imgSlide, fadeIn};
import {fadeIn} from './index';

let index = 0;

function imgSlide() {
    let leftBtn = document.querySelector(".left-btn");
    let rightBtn = document.querySelector(".right-btn");
    let images = document.querySelectorAll(".pictures");
    fadeIn(images);
    setInterval(autoImgSlide, 3000);
    
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

function autoImgSlide() {
    let images = document.querySelectorAll(".pictures");
    fadeIn(images);
    images[index].classList.add("hide");
    index = (index + 1) % images.length;
    images[index].classList.remove("hide");

}


