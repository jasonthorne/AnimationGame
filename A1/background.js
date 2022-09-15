
import {drawInitialBasket} from "./basket.js"; //import basket method

//background canvas element:
const backgroundCanvas = document.getElementById("background"); //grab element

//background image:
const backgroundImg = new Image();
backgroundImg.src = "./background.png"; //image source

//after background image load:
backgroundImg.onload = () =>{ 
    backgroundCanvas.getContext("2d").drawImage( //draw background:
        backgroundImg, 0, 0, backgroundCanvas.width, backgroundCanvas.height);
    drawInitialBasket(); //then draw initial basket
}
