

console.log("Yo");

var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");



var backgroundImg = new Image(); //background image



//basket vars:
var basketImg = new Image(); //basket image
//var basketW = 100; //width of basket
//var basketH = 100; //height of basket
//var basketX = (canvasBounds.width - basketW)/2; //x pos of basket 
//var basketY = (canvasBounds.height - basketImg.naturalWidth) - 10; //y pos of basket 


    

//var canvasBounds = canvas.getBoundingClientRect();

backgroundImg.src = 'img/background.png'; //image source

//onload events:
backgroundImg.onload = function(){
   
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  //   canvasBounds.width, canvasBounds.height); //draw background
       
    basketImg.src = 'img/basket.png'; //basket image source (assigned here so that background is drawn first)
    
    //load and draw basket:
    basketImg.onload = function(){
        ctx.drawImage(basketImg, (canvas.width - basketImg.width)/2, (canvas.height - basketImg.height) - 10, basketImg.width, basketImg.height);   
    }
    
    
	document.getElementById("timerId").innerHTML = 0; //set timer element
    document.getElementById("scoreId").innerHTML = 0; //set hits element


}