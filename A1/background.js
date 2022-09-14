
import {drawBasket} from "./basket.js"; //import basket vars

//background canvas element:
const backgroundCanvas = document.getElementById("background"); //grab element

//background image:
const backgroundImg = new Image();
backgroundImg.src = "./background.png"; //image source

//background 2d context:
const backgroundCtx = backgroundCanvas.getContext("2d");

//after background image load:
backgroundImg.onload = () =>{ //draw background:
    backgroundCtx.drawImage(
        backgroundImg, 0, 0, backgroundCanvas.width, backgroundCanvas.height);
    //drawFirstBasket(); //then draw first basket
    //////testDraw();
    ///drawBasket(0); //then draw basket
}
