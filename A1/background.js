
import {canvasWidth, canvasHeight} from "./canvas.js"; //import canvas vars
import {drawFirstBasket, testDraw} from "./basket.js"; //import basket vars

//background canvas element:
const backgroundCanvas = document.getElementById("background"); //grab element
backgroundCanvas.width = canvasWidth; //set width
backgroundCanvas.height = canvasHeight; //set height

//background image:
export const backgroundImg = new Image(); 
backgroundImg.src = "./background.png"; //image source

//after background image load: //++++++++++++++++++++++++NEEDED???????
backgroundImg.onload = () =>{ //draw background:
    backgroundCtx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
    //drawFirstBasket(); //then draw first basket
    testDraw();
}

//background 2d context:
export const backgroundCtx = backgroundCanvas.getContext("2d");
