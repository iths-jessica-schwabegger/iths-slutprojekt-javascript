import '../styles/index.scss';
//import anime from 'animejs';
import {imgSlide} from './slider';
import {placeOrder} from './order';


if(window.location.pathname == "/order.html") {
    placeOrder();
}else if(window.location.pathname == "/index.html") {
    imgSlide();
}



