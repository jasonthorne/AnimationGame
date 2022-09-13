
import * as background from "./background.js";
import {testDraw, testMove, Basket} from "./basket.js";


//keydown event listener:
window.addEventListener("keydown", (event) =>{
    
    if(event.key === "ArrowLeft"){
        console.log("Boooom!");
        Basket.moveLeft();


    }
});

let num = 0;

function test(){
    console.log(num);
    num++;
    if (num < 800){
        requestAnimationFrame(test);

        testDraw();

        //draw background:
        /////backgroundCtx.clearRect(0, 0, canvasW, canvasH); //clear background canvas
        /////backgroundCtx.drawImage(backgroundImg, 0, 0, canvasW, canvasH);  //draw background

        //draw basket:
        //basketCtx.clearRect(0, 0, canvasW, canvasH); //clear basket canvas
        //////Basket.move(); //move basket
        //basketCtx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw basket
        
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




