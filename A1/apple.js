
//apple class:
export class Apple {

	constructor(id, xPos, yPos){
        this.img = (()=>{ //apple image
            const img = new Image();
            img.src = './apple2.png';
            return img;
        })();
        this.canvas = document.getElementById(id); //apple's canvas
        this.xPos = xPos; //x pos of apple
        this.yPos = yPos; //y pos of apple
        this.width = 60; //width of apple
        this.height = 60; //height of apple
        this.speeds = [6, 9]; //initial drop speeds 
        this.pauses = [1000, 2000, 3000, 4000, 5000]; //pause times
    }

    move(){
        this.yPos += 5;

        if(this.yPos >= ((this.canvas.height - 10) - this.height)){  //'canvas height -10' to make level with basket
            this.canScore = false; //prevent scoring 
            this.yPos = (this.canvas.height - 10) - this.height; //repostion at bottom of canvas
            //this.speed *= -this.bounce; //bounce apple
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





}