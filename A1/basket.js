
//imports:
import {canvasWidth, canvasHeight} from "./canvas.js"; //import canvas vars

//basket canvas element:
const basketCanvas = document.getElementById("basket"); //grab element
basketCanvas.width = canvasWidth; //set width
basketCanvas.height = canvasHeight; //set height

//basket images:
const basketImgs = [];
for (let i=0;i<=11;i++){
    basketImgs[i] = new Image(110, 110);
    basketImgs[i].src = './img/baskets/basket' + i.toString() + '.png';
}

//basket 2d context:
export const basketCtx = basketCanvas.getContext("2d");


export const Basket = {
    /*img: (function(){ //basket image
        let img =  new Image(110, 110);
        img.src = 'img/baskets/basket0.png';
        return img;
    }()),*/

    /*constructor(){
        //this.img = basketImgs[0],
        this.img = basketImgs[0],
        this.xPos = (canvasWidth - basketImgs[0].width) /2, //x pos of basket
        this.yPos = (canvasHeight - basketImgs[0].height) -10, //y pos of basket
        this.width = basketImgs[0].width, //width of basket
        this.height = basketImgs[0].height //height of basket
    }

    moveLeft(){
        this.xPos -=25; //decrease x pos of basket 
        if(this.xPos <0){this.xPos = 0;}  //stop at canvas's left edge
    }
    moveRight(){
        this.xPos += 25; //increase x pos of basket
        if(this.xPos > (canvasWidth - this.width)){this.xPos = canvasWidth - this.width;} //stop at canvas's right edge
    }      */



    
    img: basketImgs[0],
    xPos: (canvasWidth - basketImgs[0].width) /2, //x pos of basket
    yPos: (canvasHeight - basketImgs[0].height) -10, //y pos of basket
    width: basketImgs[0].width, //width of basket
    height: basketImgs[0].height, //height of basket
    /*moveLeft: function(){
        this.xPos -=25; //decrease x pos of basket 
        if(this.xPos <0){this.xPos = 0;}  //stop at canvas's left edge
    },
    moveRight: function(){
        this.xPos += 25; //increase x pos of basket
        if(this.xPos > (canvasWidth - this.width)){this.xPos = canvasWidth - this.width;} //stop at canvas's right edge
    }*/
    
    
        
    move: function(eventKey){
        //if (eventKey === "ArrowLeft"){ //if left is pressed:
        if (eventKey["ArrowLeft"]){ //if left was pressed:
            this.xPos -=25; //decrease x pos of basket 
            if(this.xPos <0){this.xPos = 0;}  //stop at canvas's left edge
               
        //}else if (eventKey === "ArrowRight"){ //if right is pressed:
        }else if (eventKey["ArrowRight"]){ //if right was pressed:
            this.xPos += 25; //increase x pos of basket
            if(this.xPos > (canvasWidth - this.width)){this.xPos = canvasWidth - this.width;} //stop at canvas's right edge
        }
    }

}


export const testDraw = () =>{

    //basketCtx.clearRect(0, 0, canvasWidth, canvasHeight); //clear basket canvas
    //////Basket.move(); //move basket
   // basketCtx.drawImage(Basket.img, Basket.xPos, Basket.yPos, Basket.width, Basket.height); //draw basket
}

export const testMove = () =>{



}

//draw basket:
export const drawFirstBasket = () =>{
    basketCtx.drawImage(
        basketImgs[0], (canvasWidth - basketImgs[0].width) /2, //center on canvas
        (canvasHeight - basketImgs[0].height) - 10, //set 10 pix from canvas bottom
        basketImgs[0].width, basketImgs[0].height
    );
}
