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
    let styleBox = document.querySelector(".style-section");
    let closeBtn = document.querySelector(".close-btn");

    orderBtn.addEventListener("click", function(){

        roomBox.classList.remove("hide");
        chooseRoom();

    });

    closeBtn.addEventListener("click", function(){

        roomBox.classList.add("hide");

    });


}

function closeButton() {

    
}


function chooseRoom() {

    let roomBox = document.querySelector(".room-section");
    let styleBox = document.querySelector(".style-section");
    let rooms = document.querySelectorAll(".room-section img");
    let styles = document.querySelectorAll(".style-section img");
    let myArr = [];

    for (let room of rooms) {
        room.addEventListener("click", event => {

            let myRoom = event.target.classList.value;
            //myObject(myRoom);
            myArr.push(myRoom);
            roomBox.classList.add("hide");
            styleBox.classList.remove("hide");
            console.log(myArr);

        });
    }

    for (let style of styles) {
        style.addEventListener("click", event => {

            let myStyle = event.target.classList.value;
            myArr.push(myStyle);
            styleBox.classList.add("hide");
            console.log(myArr);

        });

    }
    




}

function myObject(myRoom, myStyle, myArea) {

    let myChoice = {

        Room: myRoom,
        style: myStyle,
        m2: myArea
    };
    console.log(myChoice);
}


placeOrder();
//imgSlide();










