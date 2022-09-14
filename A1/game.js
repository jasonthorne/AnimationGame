
import {backgroundImg, backgroundCtx} from "./background.js";
import {testDraw, testMove, Basket, basketCtx} from "./basket.js";
import {canvasWidth, canvasHeight} from "./canvas.js"; //import canvas vars


let eventKey = []; //for holding event key values 

//keydown event listener:
window.addEventListener("keydown", (event) =>{ eventKey[event.key] = true; });
//keyup event listener:
window.addEventListener("keyup", (event) =>{ eventKey[event.key] = false; });

let num = 0;

function test(){
    console.log(num);
    num++;
    if (num < 1000){
        requestAnimationFrame(test);

        ///////testDraw();

        //draw background:
        /*backgroundCtx.clearRect(0, 0, canvasWidth, canvasHeight); //clear background canvas
        backgroundCtx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);  //draw background*/

        //draw basket:
        basketCtx.clearRect(0, 0, canvasWidth, canvasHeight); //clear basket canvas
        Basket.move(eventKey); //move basket
        basketCtx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw basket
        
    }

}

window.requestAnimationFrame(test);




const maxApples = 5; //+++++??????






export class Game {

	constructor(){
                //set canvas element:
                ////document.getElementById("layers-container").replaceChildren(canvas);
                //buildCanvases(maxApples);
	}

    

	
}

//canvas




