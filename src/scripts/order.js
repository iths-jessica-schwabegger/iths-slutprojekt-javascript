export {placeOrder};
import {fadeIn, slideIn} from './index';

function removeUnderline(myStr) {
    let newString = "";

    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i] != "_") {
            newString = newString + myStr[i];
        }else{
            newString = newString + " ";
        }
    }
    return newString;
}

function placeOrder() {
    let orderBtn = document.querySelector(".rdy-btn");
    let roomBox = document.querySelector(".room-section");
    slideIn(orderBtn);

    orderBtn.addEventListener("click", function(){  
        roomBox.classList.remove("hide");
        chooseRoom();
        //fadeIn(roomBox);
    });
}

function confirmOrder(myArr) {
    let i = 0;
    let articles = document.querySelectorAll(".final-section article");
    
    for(let article of articles) {
        let oldParagraphs = article.querySelectorAll(".content");

        for (let paragraph of oldParagraphs) {
            paragraph.remove();
        }
        if (i <= myArr.length -1) {
            let p = document.createElement("p");
            p.classList.add("content");
            article.appendChild(p);
            p.innerText = removeUnderline(myArr[i]).toUpperCase();
            p.style.color = "rgb(53, 51, 51)";
            i++;
        }else {
            let p = document.createElement("p");
            p.classList.add("content");
            article.appendChild(p);
            p.innerText = getPrice(myArr);
            p.style.color = "rgb(53, 51, 51)";
        }
    }
}

function getPrice(myArr) {

    const priceOffer = {

        rooms: {
            bedroom: 800,
            kitchen: 700,
            bathroom: 500,
            living_room: 1000,
            kids_room: 800,
            entrance: 500
        },
        area: {

            1: 300, 2: 300, 3: 350, 4: 400, 5: 400, 6: 500, 7: 550, 8: 600, 9: 600,
            10: 650, 11: 750, 12: 800, 13: 1000, 14: 1100, 15: 1250,
        }
    };

    let priceRoom = priceOffer.rooms[myArr[0]];
    let priceArea = priceOffer.area[myArr[2]];
    let totalPrice = priceRoom + priceArea;
    return totalPrice;
}

function chooseRoom() {

    let roomBox = document.querySelector(".room-section");
    let styleBox = document.querySelector(".style-section");
    let rooms = document.querySelectorAll(".room-section img");
    let styles = document.querySelectorAll(".style-section img");
    let closeBtns = document.querySelectorAll(".close-btn");
    let areaBox = document.querySelector(".area-section");
    let input = document.querySelector("input");
    let finalBox = document.querySelector(".final-section");
    let myArr = [];
    input.value = "";

    for (let room of rooms) {
        room.addEventListener("click", event => {
            let myRoom = event.target.classList.value;

            myArr.push(myRoom);
            roomBox.classList.add("hide");
            styleBox.classList.remove("hide");
            fadeIn(styleBox); //Inte så snyggt men det funkar :):)
        });
    }

    for (let style of styles) {
        style.addEventListener("click", event => {
            let myStyle = event.target.classList.value;

            myArr.push(myStyle);
            styleBox.classList.add("hide");
            areaBox.classList.remove("hide");
            fadeIn(areaBox); //Inte så snyggt men det funkar :):)
        });
    }

    input.addEventListener("keyup", event =>{
        let myArea = input.value;
        let oldErrors = document.querySelectorAll(".error");
        let errorBox = document.querySelector(".area-section .grid");

        if (event.keyCode == 13) {

            for(let error of oldErrors){
                error.remove();
            }
                 
            if (myArea > 15) {
                let error = document.createElement("p");
                error.classList.add("gridmid");
                error.classList.add("error");
                errorBox.appendChild(error).innerText = "That room is too big!";
            }else if(isNaN(myArea)) {
                let error = document.createElement("p");
                error.classList.add("gridmid");
                error.classList.add("error");
                errorBox.appendChild(error).innerText = "That is not a number!";
            }else {
                myArr.push(myArea);
                areaBox.classList.add("hide");
                finalBox.classList.remove("hide");
                fadeIn(finalBox); //Inte så snyggt men det funkar :):)
                confirmOrder(myArr);
            }
        }
    });

    for (let button of closeBtns) {
        button.addEventListener("click", function(){
            roomBox.classList.add("hide");
            styleBox.classList.add("hide");
            areaBox.classList.add("hide");
            finalBox.classList.add("hide");
        });
    }
}


