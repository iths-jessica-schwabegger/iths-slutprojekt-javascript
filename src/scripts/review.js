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


async function renderUser() {

    let userImg = document.querySelector(".user-img");
    let userText = document.querySelector(".user-text");
    let userName = document.querySelector(".name");

    let list = await getUser();
    userImg.src = list[0].picture.large;

    let paragraph = await baconIpsum();
    userText.innerText = paragraph;

    userName.innerText = list[0].name.first + " " + list[0].name.last;

    randomStarRating();

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