
import {canvasWidth, canvasHeight} from "./canvas.js"; //import canvas vars
import {basketImg, basketCtx} from "./basket.js"; //import basket vars

//background canvas element:
export const backgroundCanvas = document.getElementById("background");
backgroundCanvas.width = canvasWidth; //set width
backgroundCanvas.height = canvasHeight; //set height

//background image:
export const backgroundImg = new Image(); 
backgroundImg.src = "./background.png"; //image source

//after background image load:
backgroundImg.onload = () =>{ //draw background:
    backgroundCtx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
    basketCtx.drawImage( //then draw basket:
        basketImg, (canvasWidth - basketImg.width) /2, 
        (canvasHeight - basketImg.height) - 10, 
        basketImg.width, basketImg.height);
}

//background 2d context:
export const backgroundCtx = backgroundCanvas.getContext("2d");

////////document.getElementById("canvas-container").appendChild(backgroundCanvas);


//export const layers = document.createElement("div"); //create canvas element
//layers.id = "layers"; //give id


//<canvas id="background" class="layer1" width="873" height="640"></canvas>