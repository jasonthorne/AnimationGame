

console.log("Yo");
//var canvasBounds = canvas.getBoundingClientRect(); //+++++++++++++++++++++++

var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");

var backgroundImg = new Image(); //background image
backgroundImg.src = 'img/background.png'; //image source
var basketImg = new Image(); //basket image

//----------------------------------------------------------------------------------------------------
//onload events:
backgroundImg.onload = function(){
   
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  //   canvasBounds.width, canvasBounds.height); //draw background
       
    basketImg.src = 'img/basket.png'; //basket image source (assigned here so that background is drawn first)
    
    //load and draw basket:
    basketImg.onload = function(){

        //ctx.drawImage(basketImg, (canvas.width - basketImg.width)/2, (canvas.height - basketImg.height) - 10, basketImg.width, basketImg.height);
         ctx.drawImage(basketImg, ((canvas.width - basketImg.width)/2), ((canvas.height - basketImg.height) - 10), basketImg.width, basketImg.height);      
    }
    
	//document.getElementById("timerId").innerHTML = 0; //set timer element
    //document.getElementById("scoreId").innerHTML = 0; //set hits element
}

//----------------------------------------------------------------------------------------------------
//key event listeners:
window.addEventListener("keydown", function(event){ //listens for key press, adds its keycode 
    key[event.keyCode] = true; 
});

window.addEventListener("keyup", function(event){ //listens for key release, removes its keycode
    key[event.keyCode] = false;
});

//----------------------------------------------------------------------------------------------------
//create basket:
var Basket = {
    xPos: ((canvas.width - basketImg.width)/2),
    yPos: ((canvas.height - basketImg.height) - 10),
    width: basketImg.width, //maybe change this to a percentage of viewport +++++++++++++
    height: basketImg.height, //maybe change this to a percentage of viewport ++++++++++
    move: function(){
        if (key[37]){ //if left is pressed
            Basket.xPos -=30; //decrease x pos
            
            if(Basket.xPos <0){ //check for canvas collision
                Basket.xPos = 0; //stop at screen edge
            }
        }else if (key[39]){ //if right is pressed
                Basket.xPos += 30; //increase x pos
    
                if(Basket.xPos > (canvas.width - Basket.width)){ //check for canvas collision
                Basket.xPos = canvas.width - Basket.width; //stop at screen edge
                }
        }      
    }

}

//----------------------------------------------------------------------------------------------------
//create apple:


//animate game:
function animate(){
    
}
