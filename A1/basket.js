
//imports:
import {canvasWidth, canvasHeight} from "./canvas.js"; //import canvas vars

//basket canvas element:
export const basketCanvas = document.getElementById("basket"); // document.createElement("canvas");
basketCanvas.width = canvasWidth; //set width
basketCanvas.height = canvasHeight; //set height



//basket images:
/*var basketImgs = [];
for (let i=0;i<=11;i++){
    basketImgs[i] = new Image();
    basketImgs[i].src = 'img/baskets/basket' + i.toString() + '.png';
}*/


//basket image:
export const basketImg = new Image(110, 110);
basketImg.src = "./basket0.png"; //image source 

//basket 2d context:
export const basketCtx = basketCanvas.getContext("2d");