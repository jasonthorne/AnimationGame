
//import {testDraw} from "./background.js";
import {drawBasket} from "./basket.js";
//import {canvasWidth, canvasHeight} from "./canvas.js"; //import canvas vars

let eventKey = []; //for holding event key values 

//keydown event listener:
window.addEventListener("keydown", (event) =>{ 
    eventKey[event.key] = true; //set pressed key as true
    if(event.code === "Space"){
        console.log("SPACE"); //+++++++++++++++++pause game :)
    }
});

//keyup event listener:
window.addEventListener("keyup", (event) =>{ 
    eventKey[event.key] = false; //set unpressed key as false 
});

let num = 0;

const test = () =>{
    console.log(num);
    num++;
    if (num < 1000){
        requestAnimationFrame(test);

        drawBasket(eventKey); //draw basket

        //draw background:
        /*backgroundCtx.clearRect(0, 0, canvasWidth, canvasHeight); //clear background canvas
        backgroundCtx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);  //draw background*/

        //draw basket:
        /*basketCtx.clearRect(0, 0, canvasWidth, canvasHeight); //clear basket canvas
        Basket.move(eventKey); //move basket
        basketCtx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw basket
        */
    }

};

///////window.requestAnimationFrame(test);



var start = true;     // flags that you want the countdown to start
var stopIn = 10000;    // how long the timer should run
var stopTime = 0;     // used to hold the stop time
var stop = false;     // flag to indicate that stop time has been reached
var timeTillStop = 0; // holds the display time

// main update function
const test2 = (timer) =>{

    if(start){  // do we need to start the timer
        stopTime = timer + stopIn; // yes the set the stoptime
        start = false;             // clear the start flag
    }else{                         // waiting for stop
        if(timer >= stopTime){     // has stop time been reached?
            stop = true;           // yes the flag to stop
        }
    }

    timeTillStop = stopTime - timer;      // for display of time till stop
    // log() should be whatever you use to display the time.
    //log(Math.floor(timeTillStop / 10) );  // to display in 1/100th seconds
    //console.log(Math.round(timeTillStop % 60000)/1000);
    
    if(!stop){
        //console.log(Math.floor(timer/1000));
        console.log(Math.round(timeTillStop/1000));
        drawBasket(eventKey); //draw basket
        requestAnimationFrame(test2); // continue animation until stop 
    }
}
/////////requestAnimationFrame(test2);  // start the animation




const maxApples = 5; //+++++??????






export class Game {

	constructor(){
                //set canvas element:
                ////document.getElementById("layers-container").replaceChildren(canvas);
                //buildCanvases(maxApples);
	}

    

	
}

//canvas




