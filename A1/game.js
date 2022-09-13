
import {buildCanvases} from "./canvases.js";

//const canvas = new Canvas();

const maxApples = 5;

//console.log(canvas.getCanvas());

//document.getElementById("canvas-container").innerHTML = canvas;

export class Game {

	constructor(){
                //set canvas element:
                ////document.getElementById("layers-container").replaceChildren(canvas);
                buildCanvases(maxApples);
	}
	
}

//canvas



