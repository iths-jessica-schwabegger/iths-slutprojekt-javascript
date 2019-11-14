import '../styles/index.scss';
import {imgSlide} from './slider';
import {placeOrder} from './order';
import anime from 'animejs';
export {fadeIn, slideIn};
import {renderUser} from './review';

console.log(window.location.pathname)


let path = window.location.pathname.split("/");
console.log(path);

if(path[1] == "order.html") {
    placeOrder();

}else if(path[1] == "index.html" || path[1] == "") {
    imgSlide();
}else if(path[1] == "review.html") {

    renderUser();
}


function fadeIn(target) {

    anime({
      targets: target,
      //translateX: -250,
      opacity: [0, 1],
      easing: "linear",
      duration: 1000

    });
}

function slideIn(target) {
    anime({
        targets: target,
        translateX: 550,
        delay: 1000,
        opacity: [0, 1],
      });
}



