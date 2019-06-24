
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
var apple1Ctx = apple1Canvas.getContext("2d"); 
var apple2Ctx = apple2Canvas.getContext("2d"); 
var apple3Ctx = apple3Canvas.getContext("2d");
var apple4Ctx = apple4Canvas.getContext("2d");
var apple5Ctx = apple5Canvas.getContext("2d"); 

var appleCtxs = [apple1Ctx, apple2Ctx, apple3Ctx, apple4Ctx, apple5Ctx]; //storing apple ctxs

//======================================================

//document.getElementById("timerId").innerHTML = 0; //set timer element //+++++++++++++++++++
//document.getElementById("scoreId").innerHTML = 0; //set hits element //+++++++++++++++++++

var backgroundImg = new Image(); //background image
backgroundImg.src = 'img/backgroundTEST6.png'; //image source

//=================
var score = 0;
document.getElementById("scoreId").innerHTML = score; //show time
 //set timer element
//=================
//document.getElementById("timerId").innerHTML = time;

//----------------------------------------------------------------------------------------------------
//var appleX = [120, 273, 518, 632, 720]; 
//var appleY = [176, 132, 231, 119, 188];

/*
var testPic1 = new Image();
testPic1.src = 'img/apl1.png';
var testPic2 = new Image();
testPic2.src = 'img/apl2.png';
var testPic3 = new Image();
testPic3.src = 'img/apl3.png';
var testPic4 = new Image();
testPic4.src = 'img/apl4.png';
var testPic5 = new Image();
testPic5.src = 'img/apl5.png';
var testPicsArray = [testPic1, testPic2, testPic3, testPic4, testPic5];


var basketImg = new Image(); //basket image

//onload events:
backgroundImg.onload = function(){
    
    backgroundCtx.drawImage(backgroundImg, 0, 0, canvasW, canvasH);  //draw background
      
    basketImg.src = 'img/baskets/basket0.png'; //basket image source (assigned here so that background is drawn first)
    
    //load and draw basket:
    basketImg.onload = function(){
        //basketCtx.drawImage(basketImg, (canvasW - basketW) /2, (canvasH - basketH) - 10, basketW, basketH); 

        for (let i=0; i<5; i++){
            basketCtx.drawImage(testPicsArray[i], applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw Apple
            }
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
//prototype function added to Array class, to allow random picking of elements:

Array.prototype.pickElement = function(){ 
    return this[Math.floor(Math.random()*this.length)]; //return a random element
}//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

//----------------------------------------------------------------------------------------------------
//create basket:

var basketW = 110, basketH = basketW; //width & height of basket

var Basket = {
    img: (function(){ //basket image
        let img =  new Image();
        img.src = 'img/baskets/basket0.png';
        return img;
    }()),
    xPos: (canvasW - basketW) /2, //x pos of basket
    yPos: (canvasH - basketH) - 10, //y pos of basket
    width: basketW, //width of basket
    height: basketH, //height of basket
    move: function(){
        if (key[37]){ //if left is pressed
            this.xPos -=25; //decrease x pos 
            
            if(this.xPos <0){ //check for canvas collision
                this.xPos = 0; //stop at screen edge
            }
        }else if (key[39]){ //if right is pressed
            this.xPos += 25; //increase x pos
          
            if(this.xPos > (canvasW - this.width)){ //check for canvas collision
                this.xPos = canvasW - this.width; //stop at screen edge
            }
        }
    }
};

//----------------------------------------------------------------------------------------------------
//create apples:

const APPLE_NUM = 5; //number of apples 
var applesArray = []; //array for holding apples 
var appleX = [120, 273, 518, 632, 720]; //x pos of apples  
var appleY = [176, 132, 231, 119, 188]; //y pos of apples  
var appleSpeeds = [6, 9];//3, 6, 9]; //holds apple drop speeds //+++++++++++++++++
var applePauses = [1000, 2000, 3000, 4000, 5000];//[1000, 2000, 3000]; //, 4000, 5000]; //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Apple(xPos, yPos, i){
    this.img = (function(){ //apple image
        let img =  new Image();
        img.src = 'img/apple.png';
        return img;
    }());
    this.xPos = xPos; //x pos of apple
    this.yPos = yPos; //y pos of apple
    this.width = 60; //width of apple
    this.height = 60; //height of apple
    this.canvasId = "#apple" + (i+1).toString(); //canvas id of apple
    this.gravity = 0.3; //gravity force
    this.bounce = 0.1; //bounce factor
    this.speed = appleSpeeds.pickElement(); //picks a speed
    this.canFall = false; //if apple can drop
    this.canScore = true; //if apple can score
    this.canFadeOut = false; //if apple can fade out
    this.canFadeIn = true; //if apple can fade in
    this.pauseTime = applePauses.pickElement(); // + (Date.now() + Math.random());//initialPause.pickElement(); //picks a pause time
    this.reset = function(){ //resets apple vars

        this.yPos = yPos; //reset y pos
        this.speed = appleSpeeds.pickElement(); //reset speed
        ////console.log("reset speed: " + this.speed) ///////////////////////////
        this.canScore = true; //reset ability to score
        //this.canFall = true; //???????????????????????????????????????????
        ///////////////////////////this.canBeDrawn = true;
        //this.pauseTime =  applePauses.pickElement(); //picks a pause time
        this.canFadeOut = false;
        this.canFadeIn = true; 
        this.pauseTime = progress + applePauses.pickElement(); //reasign pause time
        //appleCtxs[i].globalAlpha = 1;
        //this.canFall = false; //@@@@@@@@@@@@@@@@@@
    };
    this.fall = function(){

        this.yPos += this.speed; //drop apple
        this.speed += this.gravity; //add gravity to drop speed
    
        //check for collison with Basket:
        if (this.xPos < (Basket.xPos + Basket.width) && (this.xPos + this.width) > Basket.xPos
            && this.yPos < (Basket.yPos + Basket.height) && (this.yPos + this.height) > Basket.yPos
            && this.canScore){
                score++; //add to score 
                document.getElementById("scoreId").innerHTML = score; //show score
                appleCtxs[i].globalAlpha = 0; //remove apple from screen
                this.reset(); //reset apple //+++++++++++++++++++++++++++++???????????? here????
            //this.canFall = false; //prevent falling
            //this.canFadeOut = true; //allow fading
           
           
        //////////////console.log("collision speed: " + this.speed); //=================
            if (score < 8) {
                Basket.img.src='img/baskets/basket' + score.toString() + '.png'; 
            }
        }

        //check if apple has hit bottom of canvas:
        if(this.yPos >= ((canvasH - 10) - this.height)){  //'canvas height -10' to make level with basket
            this.canScore = false; //prevent scoring 
            this.yPos = (canvasH - 10) - this.height; //repostion at bottom of canvas
            this.speed *= -this.bounce; //bounce apple
        }

        if(this.speed == -0.05454545454545454){ //apple has stopped bouncing
            this.canFall = false; //prevent falling
            this.canFadeOut = true; //allow fading
        }  

    };
    
}

/*
Apple.prototype.fall = function(){

    this.yPos += this.speed; //drop apple
    this.speed += this.gravity; //add gravity to drop speed
    
    //check for collison with Basket:
    if (this.xPos < (Basket.xPos + Basket.width) && (this.xPos + this.width) > Basket.xPos
        && this.yPos < (Basket.yPos + Basket.height) && (this.yPos + this.height) > Basket.yPos
        && this.canScore){
        this.reset(); //reset apple //+++++++++++++++++++++++++++++???????????? here????
        score++; //add to score 
        //////////////console.log("collision speed: " + this.speed); //=================
        if (score < 8) {
          Basket.img.src='img/baskets/basket' + score.toString() + '.png'; 
        }
    }

    //check if apple has hit bottom of canvas:
    if(this.yPos >= ((canvasH - 10) - this.height)){  //'canvas height -10' to make level with basket
        this.canScore = false; //prevent scoring 
        this.yPos = (canvasH - 10) - this.height; //repostion at bottom of canvas
        this.speed *= -this.bounce; //bounce apple
    }

    if(this.speed == -0.05454545454545454){ //apple has stopped bouncing
        this.canFall = false; //prevent falling
        this.canFadeOut = true; //allow fading
    }  
};          

Apple.prototype.reset = function(){
    this.yPos = yPos; //reset y pos
        this.speed = appleSpeeds.pickElement(); //reset speed
        ////console.log("reset speed: " + this.speed) ///////////////////////////
        this.canScore = true; //reset ability to score
        //this.canFall = true; //???????????????????????????????????????????
        ///////////////////////////this.canBeDrawn = true;
        //this.pauseTime =  applePauses.pickElement(); //picks a pause time
        this.canFadeOut = false;
        this.canFadeIn = true; 
};

*/

//----------------------------------------------------------------------------------------------------
//animate game:

var start = null;
var progress = null;

function animate(timestamp){
    
    if (!start) {start = timestamp;} //animation start time
    progress = timestamp - start; //animation progress
    //console.log("progress: " + progress);
    //console.log("timestamp: " + timestamp);
    //console.log("start: " + start);

    //drawBackground:
    backgroundCtx.clearRect(0, 0, canvasW, canvasH); //clear canvas
    backgroundCtx.drawImage(backgroundImg, 0, 0, canvasW, canvasH);  //draw background

    //drawBasket:
    basketCtx.clearRect(0, 0, canvasW, canvasH); //clear canvas
    Basket.move(); //move basket
    basketCtx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw basket

    //drawApples:
    for (let i=0; i<applesArray.length; i++){

        if (progress < applesArray[i].pauseTime) { //if apple can't yet fall
            applesArray[i].canFall = false; //dont allow fall
        }else{ 

            if(applesArray[i].canFadeIn){ //if apple can fade in
                appleCtxs[i].globalAlpha +=0.05; //fade in apple opacity
            
                if (appleCtxs[i].globalAlpha >= 0.95){ //when apple is visible
                    applesArray[i].canFall = true; //allow apple to fall
                }
            }
        }
    
        if (applesArray[i].canFall){ //iff apple can fall
            applesArray[i].fall(); //allow apple to fall
        }
    
        if (applesArray[i].canFadeOut){ //if apple can fade out
           appleCtxs[i].globalAlpha -= 0.1; //fade out apple opacity

           if (appleCtxs[i].globalAlpha <= 0.01){ 
                applesArray[i].reset(); //reset apple when faded
           }

        }

        appleCtxs[i].clearRect(0, 0, canvasW, canvasH); //clear canvas
        appleCtxs[i].drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw apple
    }

   requestAnimationFrame(animate); //continue animation
}

//----------------------------------------------------------------------------------------------------
//timer:
var time = 30; //game length

var timer = setInterval(function(){ 
   
    time--; //reduce time
    if (time <10){ //add leading 0 if less than 10
        time = "0" + time;
    }

    document.getElementById("timerId").innerHTML = time; //show time
    if(time<=0){
        clearInterval(timer); //clear timer 
    }

}, 1000); //run timer



//----------------------------------------------------------------------------------------------------
//initialise the game:

//////var innit = (function(){

    //create and store apples:  //++++++++++++++++++++INCREASE APPLE NUMBER
    for (let i=0; i<5; i++){
        let apple = new Apple(appleX[i], appleY[i], i); //create apple
        appleCtxs[i].globalAlpha = 0; //make apple initially invisible
       //console.log(apple.canvasId + ": " + apple.pauseTime);
        applesArray.push(apple); //add apple to array 
    }

    //=============================
    //animate(); //=====================================
    requestAnimationFrame(animate);
    //=============================


   

/////}());