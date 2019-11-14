export {renderUser};

async function getUser() {

    let response = await fetch('https://randomuser.me/api/?results=3');
    let responseBody = await response.json();
    return responseBody.results;
}

async function baconIpsum() {

    let response = await fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1');
    let responseBody = await response.json();
    return responseBody;
}

function randomStarRating(starsContainer) {
    let starList = starsContainer.querySelectorAll(".star");
    let random = Math.floor(Math.random() * 5);

    for (let i = 0; i < random; i++) {   
            starList[i].classList.add("clicked");
    }
    
}
async function renderUser() {
    let reviewBox = document.querySelectorAll(".review-box");
    let userImg = document.querySelectorAll(".user-img");
    let userText = document.querySelectorAll(".user-text");
    let userName = document.querySelectorAll(".name");
    let userList = await getUser();
    let index = 0;

    for(let box of reviewBox) {
        
        randomStarRating(box.querySelector(".stars"));
        userImg[index].src = userList[index].picture.large;
        
        let paragraph = await baconIpsum();
        userText[index].innerText = paragraph;

        userName[index].innerText = userList[index].name.first + " " + userList[index].name.last;
        index++;
    }
}


