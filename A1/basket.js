
//basket canvas element:
const basketCanvas = document.getElementById("basket"); //grab element

//basket images:
const basketImgs = [];
for (let i=0;i<=11;i++){
    basketImgs[i] = new Image(110, 110);
    basketImgs[i].src = './img/baskets/basket' + i.toString() + '.png';
}

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
    basketCtx.drawImage(basket.img, basket.xPos, basket.yPos, basket.width, basket.height); //draw basket
}

//draw basket:
/*export const drawFirstBasket = () =>{
    basketCtx.drawImage(
        basketImgs[0], (canvasWidth - basketImgs[0].width) /2, //center on canvas
        (canvasHeight - basketImgs[0].height) - 10, //set 10 pix from canvas bottom
        basketImgs[0].width, basketImgs[0].height
    );
}*/
