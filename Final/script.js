

console.log("Yo");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
console.log(canvas.width);
//background vars: 
var backgroundImg = new Image(); //background image
backgroundImg.src = 'img/background.png'; //image source
//var backgroundX  = //(window.innerWidth - canvas.width)/2; //x pos of background 
//var backgroundY  = (window.innerHeight - canvas.height)/2;; //y pos of background 
var backgroundW  = canvas.width; //width of background 
var backgroundH  = canvas.height; //height of background 


//var test1 = document.getElementById("canvasWrapper").getBoundingClientRect();


//onload events:
backgroundImg.onload = function(){
    //context.drawImage(backgroundImg, test1.x, test1.y, test1.width, test1.height); //draw background
     /*
    //basket image source (assigned here so that background is drawn first)
    basketImg.src = 'img/basket.png'; 
   
    //load and draw basket:
    basketImg.onload = function(){
        context.drawImage(basketImg, basketX, basketY, basketW, basketH);    
    }*/
    
}