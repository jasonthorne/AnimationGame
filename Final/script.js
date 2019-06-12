
//var canvasBounds = canvas.getBoundingClientRect(); //+++++++++++++++++++++++

var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");
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
       var img =  new Image(110, 110);
       img.src = 'img/baskets/basket0.png';
       //////////////////////////////////img.style.opacity = 0.5;
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


//var loopMe = true; ////////////////////////////////////////////
var num = 0;
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
    //fade here, then reset //++++++++++++++++++++++++++++++++++
        this.canFall = false;
        console.log("Hi");
       
        var thisApple = this;
     
        //var count = 0;

        (function animateFade(){
            
            //count++;
           //console.log(count);
           $(thisApple).fadeOut("slow", function(){
            console.log("hello!");
                cancelAnimationFrame(animateFade);
           });
           

          ////////////// thisApple.img.src='img/baskets/basket0.png';
            //draw();
            ////drawApple(testApple);
            //ctx.drawImage(testApple.img, testApple.xPos, testApple.yPos, testApple.width, testApple.height); //draw Apple
           /*
            if(count < 100){

               // thisApple.img.src='img/baskets/basket' + count.toString() + '.png'; 
                requestAnimationFrame(animateFade);
            }else{
                cancelAnimationFrame(animateFade);
            }
            */

        }(thisApple));
        

        /////////////this.img.src='img/baskets/basket0.png';  //++++++++++++++++++++++++++
        //this.img.style.opacity = parseFloat(this.img.style.opacity) - 0.5;
        //ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height); //draw Apple
        ////////////////drawApple(this);
        ///////////////////////////////////////this.reset();
    }//else{
          
};

/*
Apple.prototype.drawApple = function(){
    draw();
    ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height); //draw Apple
};*/

//var appleImg = new Image(); //apple image
//appleImg.src = 'img/apple.png'; //image source
function Apple(xPos, yPos){
   this.img = (function(){ //apple image
        var img =  new Image();
        img.src = 'img/apple.png';
        /////////////////img.style.opacity = 0;
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
        //console.log("hi"); //////////////////////////////////////////////////
        this.yPos = yPos; //reset y pos
        this.speed = appleSpeeds.pickElement(); //reset speed
        this.canScore = true; //reset ability to score
        this.canFall = true;
    };

   

/*
    this.fall = function(){
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

        //check if apple has hit bottom of canvas: //APPLE MAY STILL BE ABLE TO BE PICKED DURING BOUNCE (maybe use a boolean here to prevent!)
        if(this.yPos >= ((canvas.height - 10) - this.height)){  //'canvas height -10' to make contact level with basket
           //this.reset(); //reset apple
            this.canScore = false;
            this.yPos = (canvas.height - 10) - this.height; //repostion at bottom of canvas
            this.speed *= -this.bounce;


            
            //fade out apple
             //this.reset(); //reset apple
             
              //=============pop it out of array and THEN do timed fade on it, then pop it back in

              //var testOld = this.speed;

              // console.log(this.speed);
              //this.reset()
                //this.speed *= -this.bounce; 
             //this.canDrop = false;

             
              
              //console.log(applesArray);

              //console.log(this.id);
           
             
              
              
              //console.log(applesArray);
              //console.log(testArray);
            //reset apple after fade

        }

      

        //this.canDrop = true;
        //this.reset();
        //console.log(this.canScore)
             // ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
             // ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  //draw background
              //ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height); //draw Apple
            // requestAnimationFrame(this.fall());
    };*/

}

//----------------------------------------------------------------------------------------------------
//animate game:
function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  //draw background
    //drawApples(); //draw apples +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    
    //draw apples:
    for (var i=0; i<applesArray.length; i++){
        ctx.drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++
    }


    Basket.move(); //move basket
    ctx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket
    ////////////draw();
    //



    //update apples:
    for (var i=0; i<applesArray.length; i++){
    ////////////console.log(applesArray[i].speed);
        if (applesArray[i].canFall == true){
         applesArray[i].fall(); //invoke fall
        ////////////////////////++++++++++++++++++++++ drawApple(applesArray[i]); make another loop for printing!!! +++++++++
         //ctx.drawImage(applesArray[i].img, applesArray[i].xPos, applesArray[i].yPos, applesArray[i].width, applesArray[i].height); //draw Apple //+++++++++++++++++++++++++++++++++++++++
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
/*
function moveBasket(){
    //draw();
    Basket.move(); //move basket
    ctx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw moved basket
    //requestAnimationFrame(moveBasket);
}*/

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
    for (var i=0; i<3; i++){
      applesArray.push(new Apple(appleX[i], appleY[i], i)); //add Apple to array 
    }

/*
    for (var i=0; i<applesArray.length; i++){
        var apple = applesArray[i];
        apple.fall(); 
     }
*/

/*
   var test1 = new Apple(50, 180);
   var test2 = new Apple(130, 100);
   var test3= new Apple(200, 180);
   
    applesArray.push(test1); //add Apple to array 
    applesArray.push(test2); //add Apple to array 
    applesArray.push(test3); //add Apple to array 
    
   test1.fall();
  // test2.fall();
   //test3.fall();
*/
    //================================
    
    //testLoop();
    animate();
   // moveBasket();
   
    //================================

/////}());