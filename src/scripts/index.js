import '../styles/index.scss';
//import anime from 'animejs';
// import {imgSlide} from './slider';

// import {placeOrder} from './order';

// placeOrder();
// imgSlide();


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



function placeOrder() {

    let orderBtn = document.querySelector(".rdy-btn");
    let roomBox = document.querySelector(".room-section");

    orderBtn.addEventListener("click", function(){

        
        roomBox.classList.remove("hide");
        chooseRoom();

    });

}



function chooseRoom() {

    let roomBox = document.querySelector(".room-section");
    let styleBox = document.querySelector(".style-section");
    let rooms = document.querySelectorAll(".room-section img");
    let styles = document.querySelectorAll(".style-section img");
    let closeBtns = document.querySelectorAll(".close-btn");
    let areaBox = document.querySelector(".area-section");
    let input = document.querySelector("input");
    let myArr = [];

    for (let room of rooms) {
        room.addEventListener("click", event => {
            let myRoom = event.target.classList.value;

            //myObject(myRoom);
            if (myArr.length == 1) {
                myArr.pop();
                myArr.push(myRoom);
                roomBox.classList.add("hide");
                styleBox.classList.remove("hide");
            }else {
                myArr.push(myRoom);
                roomBox.classList.add("hide");
                styleBox.classList.remove("hide");
            }
       

        });
    }

    for (let style of styles) {
        style.addEventListener("click", event => {
            let myStyle = event.target.classList.value;
            if (myArr.length == 2){
                myArr.pop();
                myArr.push(myStyle);
                styleBox.classList.add("hide");
                areaBox.classList.remove("hide");
            }else {
                myArr.push(myStyle);
                styleBox.classList.add("hide");
                areaBox.classList.remove("hide");
            }
        });
       
    }

    input.addEventListener("change", function(){

            let myArea = input.value;
            myArr.push(myArea);
            //console.log(myArr);
            myObject(myArr);
    });

    for (let button of closeBtns) {
        button.addEventListener("click", event =>{

                roomBox.classList.add("hide");
                styleBox.classList.add("hide");
                areaBox.classList.add("hide");

        });
        
    }

}

function myObject(myArr) {

    let myChoice = {

        Room: myArr[0],
        style: myArr[1],
        m2: myArr[2]
    };
    console.log(myChoice);
}


placeOrder();
//imgSlide();










