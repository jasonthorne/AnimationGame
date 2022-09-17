
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
    }

    move(){
        this.yPos += 5;

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