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
    let roomObjects = document.querySelectorAll(".final-section p");
    for(let object of roomObjects) {
        console.log(roomObjects);

        if (i >= myArr.length){
            
        }
        
        if (i <= myArr.length -1) {
            object.innerText = object.innerHTML + myArr[i];
            i++;
        }else {
            object.innerText = object.innerHTML + "hej";
        }
    }

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

            //myObject(myRoom);
            if (myArr.length == 1) {
                // myArr.pop();
                // myArr.push(myRoom);
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
                // myArr.pop();
                // myArr.push(myStyle);
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
            //myObject(myArr);
            areaBox.classList.add("hide");
            finalBox.classList.remove("hide");

            confirmOrder(myArr);

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


// Behövdes ej, ville mest bara göra ett objekt :)))))
// function myObject(myArr) {

//     let myChoice = {

//         Room: myArr[0],
//         style: myArr[1],
//         m2: myArr[2]
//     };
//     console.log(myChoice);
// }


let priceOffer = {

    Rooms: {
        Bedroom: 800,
        Kitchen: 700,
        Bathroom: 500,
        Living_room: 1000,
        Kids_room: 800,
        Entrance: 500
    }

};


