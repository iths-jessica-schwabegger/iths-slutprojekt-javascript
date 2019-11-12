export {imgSlide};

function imgSlide() {

    let index = 0;
    console.log(index);
    let leftBtn = document.querySelector(".left-btn");
    let rightBtn = document.querySelector(".right-btn");
    let images = document.querySelectorAll(".pictures");
    
    rightBtn.addEventListener("click", function(){

        index++;

        if (index > images.length -1) {

            index = 0;
            images[index].classList.remove("hide");
            images[images.length-1].classList.add("hide");
    
        }else {
            
            images[index].classList.remove("hide");
            images[index-1].classList.add("hide");
    
        }
        console.log(index);
        

     });

     leftBtn.addEventListener("click", function(){

        index--;
        if (index < 0) {
            index = images.length -1;
    
            images[index].classList.remove("hide");
            images[0].classList.add("hide");
            
    
        }else {
            images[index].classList.remove("hide");
            images[index+1].classList.add("hide");
    
        }
    
        console.log(index);
    

     });

     
}


