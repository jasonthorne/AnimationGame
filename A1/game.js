
//imports:
//import {draw} from "./background.js";
import {basket} from "./basket.js"; //import basket class
import {apples} from "./apples.js"; //import apples list
import {Apple} from "./apple.js";

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







////////const apple = new Apple("apple1", 120,176);
//const basket = new Basket();
//basket.draw(0);
//drawApples();


let score = 0;

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
        /////console.log(stopTime);
        //console.log(Math.floor(timer/1000));
        console.log(Math.round(timeTillStop/1000));
        
        basket.draw(eventKey);
        apples.forEach((apple)=> apple.draw());

        //drawImages();

        
        requestAnimationFrame(test2); // continue animation until stop 
    }
}

requestAnimationFrame(test2);  // start the animation

const drawImages = ()=>{
    basket.draw(eventKey);
    apples.forEach((apple)=> apple.draw());

};



export class Game {

	constructor(){
                //set canvas element:
                ////document.getElementById("layers-container").replaceChildren(canvas);
                //buildCanvases(maxApples);
	}

    

	
}

//canvas

/*
let num = 0;

const test = () =>{
    console.log(num);
    num++;
    if (num < 10){
        requestAnimationFrame(test);

        /////////drawBasket(eventKey); //draw basket

        
    }

};*/

///window.requestAnimationFrame(test);

