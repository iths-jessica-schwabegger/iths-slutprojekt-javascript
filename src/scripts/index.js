import '../styles/index.scss';
import {imgSlide} from './slider';
import {placeOrder} from './order';
import anime from 'animejs';
export {fadeIn, slideIn};
import {renderUser} from './review';



let path = window.location.pathname.split("/");

if(path[path.length -1] == "order.html") {
    placeOrder();

}else if(path[path.length -1] == "index.html" || path[path.length -1] == "") {
    imgSlide();

}else if(path[path.length -1] == "review.html") {
    renderUser();
}


function fadeIn(target) {
    anime({
      targets: target,
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

