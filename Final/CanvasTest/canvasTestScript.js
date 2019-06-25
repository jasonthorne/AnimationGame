
var backgroundCanvas = document.getElementById("background");
var basketCanvas = document.getElementById("basket");

var canvasW = backgroundCanvas.width; //canvas width
var canvasH = backgroundCanvas.height; //canvas height

var basketW = 110, basketH = basketW; //width & height of basket

var backgroundCtx = backgroundCanvas.getContext("2d"); 
var basketCtx = basketCanvas.getContext("2d"); 

//------------


var backgroundImg = new Image(); //background image
backgroundImg.src = '../img/backgroundTEST6.png'; //image source

var basketImg = new Image(); //basket image

//document.getElementById("timerId").innerHTML = 99; //show time

//------------

backgroundImg.onload = function(){
    
    backgroundCtx.drawImage(backgroundImg, 0, 0, canvasW, canvasH);  //draw background
    basketImg.src = '../img/baskets/basket0.png'; //basket image source (assigned here so that background is drawn first)
    
   //load and draw basket:
    basketImg.onload = function(){
        basketCtx.drawImage(basketImg, (canvasW - basketW) /2, (canvasH - basketH) - 10, basketW, basketH); 
    }
    
}