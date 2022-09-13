
//imports:
import {canvasWidth, canvasHeight} from "./canvas.js"; //import canvas vars

//basket canvas element:
const basketCanvas = document.getElementById("basket"); //grab element
basketCanvas.width = canvasWidth; //set width
basketCanvas.height = canvasHeight; //set height



//basket images:
/*var basketImgs = [];
for (let i=0;i<=11;i++){
    basketImgs[i] = new Image();
    basketImgs[i].src = 'img/baskets/basket' + i.toString() + '.png';
}*/


//basket image:
const basketImg = new Image(110, 110);
basketImg.src = "./basket0.png"; //image source 

//basket 2d context:
const basketCtx = basketCanvas.getContext("2d");

//draw basket:
export const drawBasket = () =>{
    basketCtx.drawImage(
        basketImg, (canvasWidth - basketImg.width) /2, 
        (canvasHeight - basketImg.height) - 10, 
        basketImg.width, basketImg.height
    );
}