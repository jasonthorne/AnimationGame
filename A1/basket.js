
/*
//basket canvas element:
const basketCanvas = document.getElementById("basket"); //grab element

//basket images:
const basketImgs = (function(){
    const imgs = [];
    for (let i=0;i<=11;i++){
        imgs[i] = new Image(110, 110);
        imgs[i].src = './img/baskets/basket' + i.toString() + '.png';}
    return imgs;
})();

//basket object:
const basket = {
    img: basketImgs[0], //basket image
    xPos: (basketCanvas.width - basketImgs[0].width) /2, //x pos of basket
    yPos: (basketCanvas.height - basketImgs[0].height) -10, //y pos of basket
    width: basketImgs[0].width, //width of basket
    height: basketImgs[0].height, //height of basket
    move: function(eventKey){
        if (eventKey["ArrowLeft"]){ //if left was pressed:
            this.xPos -= 25; //decrease x pos of basket 
            if(this.xPos <0){this.xPos = 0;}  //stop at canvas's left edge
        }else if (eventKey["ArrowRight"]){ //if right was pressed:
            this.xPos += 25; //increase x pos of basket
            if(this.xPos > (basketCanvas.width - this.width)){ //stop at canvas's right edge
                this.xPos = basketCanvas.width - this.width;} 
        }
    }
}

//basket 2d context:
const basketCtx = basketCanvas.getContext("2d");
basketCtx.drawImage(basket.img, basket.xPos, basket.yPos, basket.width, basket.height); //draw basket

//draw basket:
export const drawBasket = (eventKey) =>{
    basketCanvas.getContext("2d").clearRect(0, 0, basketCanvas.width, basketCanvas.height); //clear basket canvas
    basket.move(eventKey); //move basket
    basketCanvas.getContext("2d").drawImage(basket.img, basket.xPos, basket.yPos, basket.width, basket.height); //draw basket
}
*/

//draw basket:
/*export const drawFirstBasket = () =>{
    basketCtx.drawImage(
        basketImgs[0], (canvasWidth - basketImgs[0].width) /2, //center on canvas
        (canvasHeight - basketImgs[0].height) - 10, //set 10 pix from canvas bottom
        basketImgs[0].width, basketImgs[0].height
    );
}*/

//basket class:
export class Basket {

	constructor(){
        this.images = (()=>{ //basket images
            const images = [];
            for (let i=0;i<=11;i++){
                images[i] = new Image(110, 110);
                images[i].src = './img/baskets/basket' + i.toString() + '.png';}
            return images;
        })();
        this.currImg = this.images[0]; //current image
        this.canvas = document.getElementById("basket"); //basket's canvas
        this.xPos = (this.canvas.width - this.currImg.width) /2; //x pos of basket
        this.yPos = (this.canvas.height - this.currImg.height) -10; //y pos of basket
        this.width = this.currImg.width; //width of basket
        this.height = this.currImg.height; //height of basket
	}

    //move basket:
    move(eventKey){
        if (eventKey["ArrowLeft"]){ //if left was pressed:
            this.xPos -= 25; //decrease x pos of basket 
            if(this.xPos <0){this.xPos = 0;}  //stop at canvas's left edge
        }else if (eventKey["ArrowRight"]){ //if right was pressed:
            this.xPos += 25; //increase x pos of basket
            if(this.xPos > (this.canvas.width - this.width)){ //stop at canvas's right edge
                this.xPos = this.canvas.width - this.width;} 
        }
    }

    //draw basket:
    draw(eventKey){
        //clear basket's canvas:
        this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.move(eventKey); //move basket according to event key
        this.canvas.getContext("2d").drawImage( //draw basket
            this.currImg, this.xPos, this.yPos, this.width, this.height); 
    }

    //update image:
    updateImg(score){
        if (score <10){ //if score is less than 10:
            this.currImg = this.images[score]; //update img equal to score
        }else{ //score is >= 10:
            if(score%2 == 0){this.currImg = this.images[10];} //set this img when an even score
            else{this.currImg = this.images[11];} //set this img when an odd score
        }
    }
}

//darw basket using it's initial properties:
export const drawInitialBasket = ()=>{
    const basket = new Basket(); //create basket
    basket.canvas.getContext("2d").drawImage( //draw basket
    basket.currImg, basket.xPos, basket.yPos, basket.width, basket.height); 
}
