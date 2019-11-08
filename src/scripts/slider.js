export {imgSlide};
let index = 0;
function nextBtn(index, list) {
    
    if (index >= list.length -1) {

        index = 0 ;
        list[index].classList.remove("hide");
        list[index+1].classList.add("hide");


    }else {
        list[index].classList.add("hide");
        list[index+1].classList.remove("hide");
    }

    
    console.log(index);
    console.log(list[index]);

}

function previousBtn(index, list) {

  
    if (index <= 0) {
        index = list.length-1;

        list[index].classList.remove("hide");
        list[0].classList.add("hide");

    }else {
        list[index].classList.add("hide");
        list[index-1].classList.remove("hide");

    }
    console.log(index);

    console.log(list[index]);


}

function newImg(){


}

function imgSlide() {

    
    console.log(index);
    let leftBtn = document.querySelector(".left-btn");
    let rightBtn = document.querySelector(".right-btn");
    let images = document.querySelectorAll(".pictures");
    
    rightBtn.addEventListener("click", function(){

        index++;
        nextBtn(index, images);
        

     });

     leftBtn.addEventListener("click", function(){

        index--;
        previousBtn(index, images);
    

     });

     
}


