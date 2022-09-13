
import {canvasWidth, canvasHeight} from "./canvas.js"; //import canvas vars
import {drawBasket} from "./basket.js"; //import basket vars

//background canvas element:
const backgroundCanvas = document.getElementById("background"); //grab element
backgroundCanvas.width = canvasWidth; //set width
backgroundCanvas.height = canvasHeight; //set height

//background image:
const backgroundImg = new Image(); 
backgroundImg.src = "./background.png"; //image source

//after background image load:
backgroundImg.onload = () =>{ //draw background:
    backgroundCtx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
    drawBasket(); //then draw basket
}

//background 2d context:
const backgroundCtx = backgroundCanvas.getContext("2d");