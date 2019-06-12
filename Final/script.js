
//var canvasBounds = canvas.getBoundingClientRect(); //+++++++++++++++++++++++

//var canvas = document.getElementById("canvasId");
var canvas = document.getElementById("bgCanvas");
var ctx = canvas.getContext("2d");

//====================================================
var apple1Canvas = document.getElementById("apple1Canvas");
var apple1Ctx = apple1Canvas.getContext("2d"); //add these to an array???????????

var apple2Canvas = document.getElementById("apple1Canvas");
var apple2Ctx = apple1Canvas.getContext("2d"); //add these to an array???????????

//var basketCanvas = document.getElementById("basketCanvas");
//var basketCtx = basketCanvas.getContext("2d"); //add these to an array???????????


var applesCtx = [apple1Ctx, apple2Ctx];

//======================================================

//document.getElementById("timerId").innerHTML = 0; //set timer element //+++++++++++++++++++
//document.getElementById("scoreId").innerHTML = 0; //set hits element //+++++++++++++++++++

var backgroundImg = new Image(); //background image
backgroundImg.src = 'img/background.png'; //image source

var score = 0;

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
       var img =  new Image();
       img.src = 'img/baskets/basket0.png';
        return img;
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
            }
        }else if (key[39]){ //if right is pressed
            this.xPos += 30; //increase x pos
          
            if(this.xPos > (canvas.width - this.width)){ //check for canvas collision
                this.xPos = canvas.width - this.width; //stop at screen edge
            }
        }
       //ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height); //draw moved basket
    }
};

//----------------------------------------------------------------------------------------------------
//create apples:
var applesArray = []; //array for holding apples 
var appleX = [50, 130, 200, 260, 350, 450, 600]; //x pos of apples  
var appleY = [180, 100, 180, 80, 150, 220, 40]; //y pos of apples  
var appleSpeeds = [3, 6, 12]; //holds apple drop speeds
var checkSpeed = 0;

//prototype function added to Array class, to allow random picking of elements:
Array.prototype.pickElement = function(){ 
    return this[Math.floor(Math.random()*this.length)]; //return a random element
}//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array


Apple.prototype.fall = function(){

    this.yPos += this.speed; //drop apple
    this.speed += this.gravity; //add gravity to drop speed
    
    //check for collison with Basket:
    if (this.xPos < (Basket.xPos + Basket.width) && (this.xPos + this.width) > Basket.xPos
        && this.yPos < (Basket.yPos + Basket.height) && (this.yPos + this.height) > Basket.yPos
        && this.canScore){
        this.reset(); //reset apple
        score++; //add to score 
        console.log(score);
        if (score < 8) {
          Basket.img.src='img/baskets/basket' + score.toString() + '.png'; 
        }
    }

    //check if apple has hit bottom of canvas:
    if(this.yPos >= ((canvas.height - 10) - this.height)){  //'canvas height -10' to make contact level with basket
        //this.reset(); //reset apple
        this.canScore = false; //prevent scoring 
        this.yPos = (canvas.height - 10) - this.height; //repostion at bottom of canvas
        this.speed *= -this.bounce;
    }

    /*
    if(this.speed < checkSpeed){
        checkSpeed = this.speed;
    }

    if(this.speed == checkSpeed){
        this.canFall = false;
    }
    */

    if(this.speed == -0.05454545454545454){
        this.canFall = false;
    }
          
};


function Apple(xPos, yPos){
   this.img = (function(){ //apple image
        var img =  new Image();
        img.src = 'img/apple.png';
        return img;
    }());
    this.xPos = xPos; //x pos of apple
    this.yPos = yPos; //y pos of apple
    this.width = 60; //width of apple
    this.height = 60; //height of apple
    this.gravity = 0.3; //gravity force
    this.bounce = 0.1; //bounce factor
    this.speed = appleSpeeds.pickElement(); //picks a speed
    this.canFall = true; //if apple can drop
    this.canScore = true; //if apple can score
    this.reset = function(){ 
        this.yPos = yPos; //reset y pos
        this.speed = appleSpeeds.pickElement(); //reset speed
        this.canScore = true; //reset ability to score
        this.canFall = true;
        console.log("yo");
    };
    /*
    this.fall = function(){

    };
    */
}

//----------------------------------------------------------------------------------------------------
//animate game:
function animate(){ //CLEAR RECT MEANS EACH CANVAS NEDS TO BE ON ITS OWN ANIMATION FRAME

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  //draw background
    //drawApples(); //draw apples +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //???????????????DONT FORGET TO CHANGE THE WIDTH & HEIGHT PROPERITES OF THESE OTHER CANVASES!!!
    apple1Ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    apple1Ctx.drawImage(applesArray[0].img, applesArray[0].xPos, applesArray[0].yPos, applesArray[0].width, applesArray[0].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++//(backgroundImg, 0, 0, canvas.width, canvas.height);  //draw background


   apple2Ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    apple2Ctx.drawImage(applesArray[1].img, applesArray[1].xPos, applesArray[1].yPos, applesArray[1].width, applesArray[1].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++//(backgroundImg, 0, 0, canvas.width, canvas.height);  //draw background
    //??????????????????????

    //moveBasket();
    /*
    //draw apples:
    for (var i=0; i<applesArray.length; i++){
        apple1Ctx.drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++
    }
    */
   Basket.move(); //move basket;
    //basketCtx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
   //basketCtx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket
   ctx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height);

    //update apples:
    for (var i=0; i<applesArray.length; i++){
    ////////////console.log(applesArray[i].speed);
        if (applesArray[i].canFall == true){

            applesArray[i].fall();
            /*
            applesCtx[i].globalAlpha += 0.02;
            console.log("num:" +  applesCtx[i].globalAlpha);
            if(applesCtx[i].globalAlpha == 1){
                applesArray[i].fall(); //invoke fall
            }*/
        ////////////////////////++++++++++++++++++++++ drawApple(applesArray[i]); make another loop for printing!!! +++++++++
         ////ctx.drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++
        }else{
           applesCtx[i].globalAlpha += -0.02;
           //console.log("num:" +  applesCtx[i].globalAlpha);
           if(applesCtx[i].globalAlpha == 0.019999999999999383){
                console.log("bum");
                applesCtx[i].globalAlpha =1;
                applesArray[i].reset(); //reset apple
           }
        }

    }
   
    
    
       //ctx.drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++
       /*else{
        //applesArray[i].img.src='img/baskets/basket0.png';
        
        //applesArray[i].img.style.opacity = parseFloat(applesArray[i].img.style.opacity) - 0.5;
        $(applesArray[i]).fadeOut();
        drawApple(applesArray[i]);
        //console.log(applesArray[i].img.style.opacity);
       }*/

      //ctx.drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++
       //drawApple(applesArray[i]);
     
       //drawApples();

      
       //ctx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket

    
    
    //Basket.move(); //move basket
    //ctx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket
  
    
    //ctx.drawImage(basketImg, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket

    requestAnimationFrame(animate); //continue animation
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function moveBasket(){
    Basket.move(); //move basket
    basketCtx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    basketCtx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket
    //requestAnimationFrame(moveBasket);
}

function draw(){ //mabye this recieves an apple(s???) to draw?????
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  //draw background
    ctx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket
}

function drawApple(Apple){
    ctx.drawImage(Apple.img, Apple.xPos, Apple.yPos, Apple.width, Apple.height); //draw Apple //+++++++++++++++++++++++++++++++++++++++
}

function drawApples(){
    for (var i=0; i<applesArray.length; i++){
        ctx.drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++
    }
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//----------------------------------------------------------------------------------------------------
//initialise the game:

//////var innit = (function(){

    //create and store Apples:  //++++++++++++++++++++INCREASE APPLE NUMBER
    for (var i=0; i<2; i++){
      applesArray.push(new Apple(appleX[i], appleY[i], i)); //add Apple to array 
    }

    //testLoop();
    animate();
    //moveBasket();
   

/////}());