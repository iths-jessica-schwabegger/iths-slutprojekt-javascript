export {placeOrder};

function placeOrder() {

    let orderBtn = document.querySelector(".rdy-btn");
    let roomBox = document.querySelector(".room-section");

    orderBtn.addEventListener("click", function(){  
        roomBox.classList.remove("hide");
        chooseRoom();

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
            // getPrice(myArr);
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

    for (let room of rooms) {
        room.addEventListener("click", event => {
            let myRoom = event.target.classList.value;

                myArr.push(myRoom);
                roomBox.classList.add("hide");
                styleBox.classList.remove("hide");
        
        });
    }

    for (let style of styles) {
        style.addEventListener("click", event => {
            let myStyle = event.target.classList.value;

                myArr.push(myStyle);
                styleBox.classList.add("hide");
                areaBox.classList.remove("hide");
  
        });
    }

    input.addEventListener("change", function(){

            let myArea = input.value;
            let oldErrors = document.querySelectorAll(".error");
            
            for(let error of oldErrors){
                error.remove();
            }
            if (myArea > 15) {

                let areaBox = document.querySelector(".area-section .grid");
                let error = document.createElement("p");
                error.classList.add("gridmid");
                error.classList.add("error");
                areaBox.appendChild(error).innerText = "That room is too big!";

            }else {
                myArr.push(myArea);
                areaBox.classList.add("hide");
                finalBox.classList.remove("hide");

                confirmOrder(myArr);
            }

    });

    for (let button of closeBtns) {
        button.addEventListener("click", event =>{

                roomBox.classList.add("hide");
                styleBox.classList.add("hide");
                areaBox.classList.add("hide");
                finalBox.classList.add("hide");

        });
    }
}

function removeUnderline(myStr) {

    let newString = "";

    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i] != "_") {
            newString = newString + myStr[i];
        }else {
            newString = newString + " ";
        }
    }
    return newString;

}


