
//html canvas layers: 
var backgroundCanvas = document.getElementById("background");
var backgroundCtx = backgroundCanvas.getContext("2d");
var apple1Canvas = document.getElementById("apple1");
var apple1Ctx = apple1Canvas.getContext("2d"); 
var apple2Canvas = document.getElementById("apple2");
var apple2Ctx = apple2Canvas.getContext("2d"); 
var apple3Canvas = document.getElementById("apple3");
var apple3Ctx = apple3Canvas.getContext("2d"); 
var apple4Canvas = document.getElementById("apple4");
var apple4Ctx = apple4Canvas.getContext("2d"); 
var apple5Canvas = document.getElementById("apple5");
var apple5Ctx = apple5Canvas.getContext("2d"); 
var basketCanvas = document.getElementById("basket");
var basketCtx = basketCanvas.getContext("2d"); 

var canvasW = backgroundCanvas.width; //canvas width
var canvasH = backgroundCanvas.height; //canvas height

//storing apple ctxs
var applesCtx = [apple1Ctx, apple2Ctx, apple3Ctx, apple4Ctx, apple5Ctx];

const MAX_APPLES = 5; //max apples
//======================================================

//document.getElementById("timerId").innerHTML = 0; //set timer element //+++++++++++++++++++
//document.getElementById("scoreId").innerHTML = 0; //set hits element //+++++++++++++++++++

var backgroundImg = new Image(); //background image
backgroundImg.src = 'img/background.png'; //image source


//=================
var score = 0;

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
       //ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height); //draw moved basket ++++++++++++++++
    }
};

//----------------------------------------------------------------------------------------------------
//create apples:

var applesArray = []; //array for holding apples 
var appleX = [120, 273, 518, 632, 720]; //x pos of apples  
var appleY = [176, 132, 231, 119, 188]; //y pos of apples  
var appleSpeeds = [3, 12];//[3, 6, 12]; //holds apple drop speeds //+++++++++++++++++
var applePauses = [2000, 4000, 8000]; //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var initialPause = [1, 2];
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
       ////// console.log("Hi there!");
        //this.reset();
        ///////////$(this.canvasId).fadeOut();
        ///////////this.reset();

       ////////////////// this.canFade = true; //allow fading
       
       /*
        //---------------
        var test = this;
        var testTime = 5; //game length
       
       
        $(this.canvasId).fadeOut(function() {
            console.log("Done fading, do something else");
            let myVar = setInterval(function(){
                console.log("testTime is: " + testTime);
                testTime--;
                if(testTime <=0){
                    console.log("counter stop at: " + testTime);
                    //console.log(this.canvasId); //ONLY GETTING A COPY OF APPLE< NOT THE TARGET APPLE
                    clearInterval(myVar);
                    //test.reset();
                }
            }, 1000); //run timer
           
        }(test));
          //----------------
        */
    }  
}          



Apple.prototype.pauseApple = function(apple, i){
//function pauseApple (apple, i){ /////////////////////////PROTOTYPE THIS!!!!
   // console.log("start pause: " + Apple.canvasId + " pauseTime is: " + Apple.pauseTime);

   


    let pause = setInterval(function(){
        apple.pauseTime--;
        if(apple.pauseTime <=0){

            apple.reset();
            apple.canBeDrawn = true;
            let x = testArray.pickElement();
            console.log(x);
            $(applesArray[i].canvasId).fadeIn(x, function() { 
                
                apple.canFall = true;
                //(//applesArray[i].canvasId).fadeIn();

            


            /*
            console.log("finished pause:" + apple.canvasId);
           apple.yPos = appleY[i]; //reset y pos
          apple.canBeDrawn = true;
            $(apple.canvasId).fadeIn(function() { //fade back apple
                apple.speed = appleSpeeds.pickElement(); //reset speed
                apple.canFall = true;
                apple.pauseTime = applePauses.pickElement(); //picks a pause time
                apple.canScore = true; //reset ability to score
               */



                clearInterval(pause);
               
                ////console.log("reset speed: " + this.speed) ///////////////////////////
               
                //this.canFall = true; //???????????????????????????????????????????
                ///this.canBeDrawn = true;
               


               
                
               // apple.reset();
            });
          
          

            ////////////////////applesArray[i].reset();
           // test.reset();
        }
    }, apple.pauseTime); //1000); //run timer

    ////console.log("please be 5!");


}



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
    this.canFall = true; //if apple can drop
    this.canScore = true; //if apple can score
    this.canFadeOut = false;
    this.canBeDrawn = true;
    this.pauseTime = appleSpeeds.pickElement();//initialPause.pickElement(); //picks a pause time
    this.reset = function(){ 

        //console.log("in reset");

       // $(this.canvasId).fadeOut(function() {
       
/*
        $(this.canvasId).fadeOut(function() {
            console.log("Done fading, do something else");

            //-------------------
            //var testTime = 5

            }(testApple));
            //------------------
*/
            /*
             var test = this;
        
            var x = setInterval(function(){
                test.waitTime--;
                if(test.waitTime <=0){
                    console.log("hiyo");
                    ///applesArray[i].reset();
                   // test.reset();
                }
            }, 1000)(test); //run timer

            console.log("5 secs done");
            */

        
        this.yPos = yPos; //reset y pos
        this.speed = appleSpeeds.pickElement(); //reset speed
        ////console.log("reset speed: " + this.speed) ///////////////////////////
        this.canScore = true; //reset ability to score
        //this.canFall = true; //???????????????????????????????????????????
        ///this.canBeDrawn = true;
        this.pauseTime =  applePauses.pickElement(); //picks a pause time
        this.canFadeOut = false;
        
    };
    /*
    this.fall = function(){

    };
    */
}

//----------------------------------------------------------------------------------------------------
//animate game:

function animate(){ 
    drawBackground();
    drawBasket();
    drawApples();
    requestAnimationFrame(animate); //continue animation
}

function drawBackground(){
    backgroundCtx.clearRect(0, 0, canvasW, canvasH); //clear canvas
    backgroundCtx.drawImage(backgroundImg, 0, 0, canvasW, canvasH);  //draw background
}

function drawBasket(){
    basketCtx.clearRect(0, 0, canvasW, canvasH); //clear canvas
    Basket.move(); //move basket
    basketCtx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw basket
 }

/*
function drawApple1(){
    apple1Ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    apple1Ctx.drawImage(applesArray[0].img, applesArray[0].xPos, applesArray[0].yPos, applesArray[0].width, applesArray[0].height); 
}
*/
///var testTime = 5; //game length //++++++++++++++++++++++++++++++++++++++++++++
var testArray = [600];
function drawApples(){
    for (let i=0; i<applesArray.length; i++){
        //console.log("apple loop hit");
        if (applesArray[i].canFall){
            applesArray[i].fall(); //allow apple to fall
        }

        if (applesArray[i].canFadeOut){ //if apple can fade
            applesArray[i].canFadeOut = false; //prevent further entry
            $(applesArray[i].canvasId).fadeOut(function() { //fade apple
               ///////// applesArray[i].canBeDrawn = false; //stop drawing apple
               applesArray[i].pauseApple(applesArray[i], i); //pause apple 
               
                /*
                applesArray[i].reset();
                applesArray[i].canBeDrawn = true;
                //let x = 400;//testArray.pickElement();
                let x = testArray.pickElement();
                console.log(x);
                $(applesArray[i].canvasId).fadeIn(x, function() { 
                   
                    applesArray[i].canFall = true;
                    //(//applesArray[i].canvasId).fadeIn();

                });
                */

            });
        
           
            
            // $(applesArray[i].id).fadeOut("fast").fadeIn();

            /*
            setInterval(function(){
                testTime--;
                if(testTime <=0){
                    console.log("hiyo");
                    applesArray[i].reset();
                   // test.reset();
                }
            }, 1000); //run timer
            */


           // var test = "apple"
            //console.log(test);

            /*
            $(applesArray[i].id).fadeOut(function() {
                console.log("Done fading, do something else");

                setInterval(function(){
                    testTime--;
                    if(testTime <=0){
                        console.log("hiyo");
                        applesArray[i].reset();
                       // test.reset();
                    }
                }, 1000); //run timer

            }); //}(test));
            */



            
                
             

            /*
            applesCtx[i].globalAlpha += -0.02; //fade opacity
            ////////////console.log("num:" +  applesCtx[i].globalAlpha);

            if(applesCtx[i].globalAlpha == 0.019999999999999383){ //when opacity is faded
                 //console.log("bum");
                 applesCtx[i].globalAlpha =1;
                 applesArray[i].reset(); //reset apple
            }  
            */ 
        }

        if(applesArray[i].canBeDrawn){
            applesCtx[i].clearRect(0, 0, canvasW, canvasH); //clear canvas
            applesCtx[i].drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); 
        }
        
    }
}

//----------------------------------------------------------------------------------------------------
//timer:

var time = 16; //game length
var timer = setInterval(function(){
    document.getElementById("timerId").innerHTML = time;
    time--;

    if(time<=0){
      //stop game
    }

}, 1000); //run timer

//----------------------------------------------------------------------------------------------------
//initialise the game:

//////var innit = (function(){

    //create and store Apples:  //++++++++++++++++++++INCREASE APPLE NUMBER
    for (let i=0; i<MAX_APPLES; i++){
        let test = new Apple(appleX[i], appleY[i], i);
        //pauseApple(test);
        applesArray.push(test); //add Apple to array 
        //applesArray.push(new Apple(appleX[i], appleY[i], i)); //add Apple to array 
    }

    //=============================
    animate(); //=====================================
    //=============================


   

/////}());