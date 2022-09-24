
//apple class:
export class Apple {

	constructor(id, xPos, yPos){
        this.img = (()=>{ //apple image
            const img = new Image();
            img.src = './apple2.png';
            return img;
        })();
        this.canvas = document.getElementById(id); //apple's canvas

        /*
        this.canvas.addEventListener("custom-event-test", function(event){
            this.getContext("2d").globalAlpha = event.detail.passedValue;
            console.log("hit bottom!");
        });*/



        this.xPos = xPos; //x pos of apple
        this.yPos = yPos; //y pos of apple
        this.width = 60; //width of apple
        this.height = 60; //height of apple
        this.speed = 6; //speed of drop
        this.gravity = 0.2; //gravity force
        this.bounce = 0.2; //bounce factor
        //this.speed = appleSpeeds.pickElement(); //picks a speed
        this.speeds = [6, 9]; //initial drop speeds 
        this.pauses = [1000, 2000, 3000, 4000, 5000]; //pause times
        this.canScore = true;
        
       
    }

    /*
    testMethod(passedValArg){
        this.canvas.dispatchEvent(new CustomEvent("custom-event-test", {
            detail:{passedValue: passedValArg}
        }));
    };*/

    //++++++++++++++++++++++TRIGGER THIS AFTER A TIMER ???????????
    move(){
        this.speed += this.gravity; //add gravity to speed
        this.yPos += this.speed; //change y pos according to speed

        //if hit bottom of canvas:
        if (this.yPos >= (this.canvas.height -10) - this.height){
            this.canScore = false; //prevent scoring 
            this.yPos = (this.canvas.height -10) - this.height; //position at bottom
            this.speed *= -this.bounce; //bounce apple
            ///////console.log(this.speed);
        }

        //if apple has stopped bouncing:
        if(this.speed == -0.03333333333333334){ 
           //console.log("stopped");
           //////this.canvas.getContext("2d").globalAlpha -= 0.025;
           ////////this.testMethod(0);

        }
    };

    //draw apple:
    draw(){
        //clear apples's canvas:
        this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.move(); //move apple
        this.canvas.getContext("2d").drawImage( //draw apple
            this.img, this.xPos, this.yPos, this.width, this.height); 
    };

    //ready apple:
    waitToDrop(){

        const time = 30; //(re)set time
       
    
        let timer = setInterval(function(){ 
            time--; //reduce time
            if (time<10){ 
                time = "0" + time; //add leading 0
                document.getElementById("timer").style.color = "#ff0000"; //turn red to warn user
            }
            if(time<=0){ //timer has run out
                clearInterval(timer); //clear timer 
                cancelAnimationFrame(animationFrameRef); //cancel animation
                showScoreModal(); //show game score modal
            } 
            document.getElementById("timer").innerHTML = time; //show new time
        
        }, 1000); //run timer every second














        /*
        const test2 = (timer) =>{

            if(start){  // do we need to start the timer
                stopTime = timer + stopIn; // yes the set the stoptime
                start = false;             // clear the start flag
            }else{                         // waiting for stop
                if(timer >= stopTime){     // has stop time been reached?
                    stop = true;           // yes the flag to stop
                }
            }
        
            timeTillStop = stopTime - timer;      // for display of time till stop
            // log() should be whatever you use to display the time.
            //log(Math.floor(timeTillStop / 10) );  // to display in 1/100th seconds
            //console.log(Math.round(timeTillStop % 60000)/1000);
            
            if(!stop){
                /////console.log(stopTime);
                //console.log(Math.floor(timer/1000));
                ///////console.log(Math.round(timeTillStop/1000));
                
                basket.draw(eventKey);
                apples.forEach((apple)=> apple.draw());
        
                //drawImages();
        
                
                requestAnimationFrame(test2); // continue animation until stop 
            }
        }*/





    }


}