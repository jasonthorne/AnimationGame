

//export const layers = document.createElement("div"); //create canvas element
//layers.id = "layers"; //give id

/*export const canvas = () => {

    "im  a canvas, baby!"
};*/







/*
//html canvas layers: 
var backgroundCanvas = document.getElementById("background");
var basketCanvas = document.getElementById("basket");
var apple1Canvas = document.getElementById("apple1");
var apple2Canvas = document.getElementById("apple2"); 
var apple3Canvas = document.getElementById("apple3");
var apple4Canvas = document.getElementById("apple4");
var apple5Canvas = document.getElementById("apple5"); 

var canvasW = backgroundCanvas.width; //canvas width
var canvasH = backgroundCanvas.height; //canvas height

//2D contexts:
var backgroundCtx = backgroundCanvas.getContext("2d"); 
var basketCtx = basketCanvas.getContext("2d"); 

var appleCtxs = [
    apple1Canvas.getContext("2d"), 
    apple2Canvas.getContext("2d"), 
    apple3Canvas.getContext("2d"), 
    apple4Canvas.getContext("2d"), 
    apple5Canvas.getContext("2d")
];



*/

///////+++++++++++++++add layers here

const canvasWidth = "873";
const canvasHeight = "740";



//build canvas layers:
export const buildCanvases = (maxApples) => {

    //console.log(max_apples);
    document.getElementById("canvas-container").innerHTML = "buildCanvases";
    
};

const buildAppleCanvases = (maxApples) =>{


}