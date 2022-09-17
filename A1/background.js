
//imports:
import {basket} from './basket.js'; //import basket

//background canvas element:
const canvas = document.getElementById("background"); //grab element

//background image:
const img = new Image();
img.src = './background.png'; //image source

//after background image load:
img.onload = ()=>{ //draw background:
    canvas.getContext("2d").drawImage( img, 0, 0, canvas.width, canvas.height);
    basket.canvas.getContext("2d").drawImage( //then draw basket
    basket.currImg, basket.xPos, basket.yPos, basket.width, basket.height); 
}
