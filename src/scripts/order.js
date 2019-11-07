export {placeOrder};

function placeOrder() {

    let orderBtn = document.querySelector(".rdy-btn");
    let orderBox = document.querySelector(".order-section");
    let closeBtn = document.querySelector(".close-btn");

    orderBtn.addEventListener("click", function(){

        orderBtn.classList.add("hide");
        orderBox.classList.remove("hide");

    });

    closeBtn.addEventListener("click", function(){

        orderBox.classList.add("hide");
        orderBtn.classList.remove("hide");

    });


}


