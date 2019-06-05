

console.log("Yo");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var backgroundImg = new Image(); //background image
backgroundImg.src = 'img/background.png'; //image source


//basket vars:
var basketImg = new Image(); //basket image
//var basketW = 100; //width of basket
//var basketH = 100; //height of basket
//var basketX = (canvas.width - basketW) /2; //x pos of basket 
//var basketY = (canvas.height - basketH) - 10; //y pos of basket 

var canvasBounds = canvas.getBoundingClientRect();


//onload events:
backgroundImg.onload = function(){
    ctx.drawImage(backgroundImg, canvasBounds.x, canvasBounds.y, canvasBounds.width, canvasBounds.height); //draw background


    //basket image source (assigned here so that background is drawn first)
    basketImg.src = 'img/basket.png';

    //load and draw basket:
    basketImg.onload = function(){
        ctx.drawImage(basketImg, 0, 0, basketImg.naturalWidth, basketImg.naturalHeight);   
    }
    
}