
//imports:
import {drawInitialBasket} from './basket.js'; //import basket method

//background canvas element:
const canvas = document.getElementById("background"); //grab element

//background image:
const img = new Image();
img.src = './background.png'; //image source

//after background image load:
img.onload = ()=>{ //draw background:
    canvas.getContext("2d").drawImage( img, 0, 0, canvas.width, canvas.height);
    console.log("hiii");
    drawInitialBasket(); //then draw initial basket
}




/*
//basket class:
export class Background {

    constructor(){
        this.canvas = document.getElementById("background"); //background's canvas
        this.img = (()=>{ //background image
            const img = new Image();
            img.src = './background.png';
            return img;
        })(); 
        
        this.img.onload = ()=>{ //draw background:
            canvas.getContext("2d").drawImage( this.img, 0, 0, this.canvas.width, this.canvas.height);
            drawInitialBasket(); //then draw initial basket
        };
        
    }
}*/
