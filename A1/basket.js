
//basket canvas element:
const basketCanvas = document.getElementById("basket"); //grab element

//basket images:
/*const basketImgs = [];
for (let i=0;i<=11;i++){
    basketImgs[i] = new Image(110, 110);
    basketImgs[i].src = './img/baskets/basket' + i.toString() + '.png';
}*/

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
    basketCtx.clearRect(0, 0, basketCanvas.width, basketCanvas.height); //clear basket canvas
    basket.move(eventKey); //move basket
    basketCanvas.getContext("2d").drawImage(basket.img, basket.xPos, basket.yPos, basket.width, basket.height); //draw basket
}

//draw basket:
/*export const drawFirstBasket = () =>{
    basketCtx.drawImage(
        basketImgs[0], (canvasWidth - basketImgs[0].width) /2, //center on canvas
        (canvasHeight - basketImgs[0].height) - 10, //set 10 pix from canvas bottom
        basketImgs[0].width, basketImgs[0].height
    );
}*/

export class Basket {
	
	constructor(){
		this.images = (function(){ //basket images
            const basketImgs = [];
            for (let i=0;i<=11;i++){
                basketImgs[i] = new Image(110, 110);
                basketImgs[i].src = './img/baskets/basket' + i.toString() + '.png';}
            return basketImgs;
        })();
        this.canvas = document.getElementById("basket"); //basket canvas
        this.xPos = (this.canvas.width - this.images[0].width) /2; //x pos of basket
        this.yPos = (this.canvas.height - this.images[0].height) -10; //y pos of basket
        this.width = this.images[0].width; //width of basket
        this.height = this.images[0].height; //height of basket
	}

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

    getImg(score){ //if score is less than 10, return basket img equal to score:
        if (score <10){ return this.images[score].src; 
        }else{ //score is >= 10:
            if(score%2 == 0){ return this.images[10].src; } //return this img when an even score
            else{ return this.images[11].src; } //return this img when an odd score
        }
    }

    draw(eventKey, score){
        //clear basket canvas:
        this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.move(eventKey); //move basket according to event key
        this.canvas.getContext("2d").drawImage( //draw basket
            this.getImg(score), this.xPos, this.yPos, this.width, this.height); 
    }
}


/*
 if (score <10){ //if score is less than 10:
                Basket.img.src = basketImgs[score].src; //update basket img
                score = "0" + score; //add leading 0
            }else{ //score is >= 10:
                if(score%2 == 0){ Basket.img.src = basketImgs[10].src; } //update to this img when an even score
                else{ Basket.img.src = basketImgs[11].src; } //update to this img when an odd score
            }

*/