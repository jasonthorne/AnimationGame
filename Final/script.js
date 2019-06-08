

console.log("Yo");
//var canvasBounds = canvas.getBoundingClientRect(); //+++++++++++++++++++++++

var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");
//document.getElementById("timerId").innerHTML = 0; //set timer element //+++++++++++++++++++
//document.getElementById("scoreId").innerHTML = 0; //set hits element //+++++++++++++++++++

var backgroundImg = new Image(); //background image
backgroundImg.src = 'img/background.png'; //image source




//----------------------------------------------------------------------------------------------------
/*

//var basketImg = new Image(); //basket image

//onload events:
backgroundImg.onload = function(){
    
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  //draw background
      
    basketImg.src = 'img/basket.png'; //basket image source (assigned here so that background is drawn first)
    
    //load and draw basket:
    basketImg.onload = function(){
         ctx.drawImage(basketImg, (canvas.width - basketW) /2, (canvas.height - basketH) - 10, basketW, basketH); 
    }
    
}
*/
//----------------------------------------------------------------------------------------------------
//key event listeners:

var key = []; //for holding keycode values 
window.addEventListener("keydown", function(event){ //listens for key press, adds its keycode 
    key[event.keyCode] = true; 
});

window.addEventListener("keyup", function(event){ //listens for key release, removes its keycode
    key[event.keyCode] = false;
});

//----------------------------------------------------------------------------------------------------
//create basket:

var basketW = 110, basketH = basketW; //width & height of basket

var Basket = {
    img: (function(){ //basket image
       var foo =  new Image();
        foo.src = 'img/basket.png';
        return foo;
    }()),
    xPos: (canvas.width - basketW) /2, //x pos of basket
    yPos: (canvas.height - basketH) - 10, //y pos of basket
    width: basketW, //width of basket
    height: basketH, //height of basket
    move: function(){
        if (key[37]){ //if left is pressed
            this.xPos -=30; //decrease x pos
            
            if(this.xPos <0){ //check for canvas collision
                this.xPos = 0; //stop at screen edge
                ////////////this.img.src = 'img/apple.png'; ++++++++++++++++++++++++++
            }
        }else if (key[39]){ //if right is pressed
            this.xPos += 30; //increase x pos
          
            if(this.xPos > (canvas.width - this.width)){ //check for canvas collision
                this.xPos = canvas.width - this.width; //stop at screen edge
            }
        }
       ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height); //draw moved basket
    }
};

//----------------------------------------------------------------------------------------------------
//create apples:

var applesArray = []; //array for holding apples 
var appleX = [50, 130, 200, 260, 350, 450, 600]; //x pos of apples  
var appleY = [180, 100, 180, 80, 150, 220, 40]; //y pos of apples  


var appleImg = new Image(); //apple image
appleImg.src = 'img/apple.png'; //image source

function makeApple(xPos, yPos){
   this.img = (function(){ //apple image
        var foo =  new Image();
        foo.src = 'img/apple.png';
        return foo;
    }());
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = 60;
    this.height = 60;
    this.speed = (function(){
        var speeds = [3, 6, 12]; //hold apple drop speeds
        return speeds[Math.floor(Math.random() * speeds.length)];
    }());


}


var test1 = new makeApple(50, 180);
console.log("test1 is " + test1.speed);
var test2 = new makeApple(50, 180);
console.log("test2 is " + test2.speed);

//----------------------------------------------------------------------------------------------------
//animate game:
function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  //draw background
    Basket.move(); //move basket
    //ctx.drawImage(basketImg, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket

    requestAnimationFrame(animate); //continue animation
}

//================================
animate();
//================================