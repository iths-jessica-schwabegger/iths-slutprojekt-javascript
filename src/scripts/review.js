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

function randomStarRating() {
    let starList = document.querySelectorAll(".star");
    let random = Math.floor(Math.random() * 5);
    let index = 0;

    for (let star of starList) {
        if (index <= random) {
            star.classList.add("clicked");
        }
        index++;
    }
    
}
async function renderUser() {
    let reviewBox = document.querySelectorAll(".review-box");
    let userImg = document.querySelectorAll(".user-img");
    let userText = document.querySelectorAll(".user-text");
    let userName = document.querySelectorAll(".name");
    let list = await getUser();
    let index = 0;

    for(let box of reviewBox) {
    
    userImg[index].src = list[index].picture.large;
    
    let paragraph = await baconIpsum();
    userText[index].innerText = paragraph;

    userName[index].innerText = list[index].name.first + " " + list[index].name.last;

    randomStarRating();
    //console.log(index);
    index++;
    
    }
}


