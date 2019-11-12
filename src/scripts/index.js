import '../styles/index.scss';
import {imgSlide} from './slider';
import {placeOrder} from './order';
import anime from 'animejs';
export {fadeIn, slideIn};


if(window.location.pathname == "/order.html") {
    placeOrder();

}else if(window.location.pathname == "/index.html") {
    imgSlide();
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
        translateX: 370,
        delay: 1000,
        opacity: [0, 1],
      });
}



