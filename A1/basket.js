
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

class Basket {

	constructor(){

        this.basketImgs = (function(){
            const images = [];
            for (let i=0;i<=11;i++){
                images[i] = new Image(110, 110);
                images[i].src = './img/baskets/basket' + i.toString() + '.png';}
            return images;
        })();

        //this.basketImgs = this.setBasketImgs();
        //this.img = this.basketImgs[0];
		//this.canvas = document.getElementById("basket"); //html canvas element
        this.setBasketImgs();
       
    
	}

    setBasketImgs(){
        const images = (function(){
            const images = [];
            for (let i=0;i<=11;i++){
                images[i] = new Image(110, 110);
                images[i].src = './img/baskets/basket' + i.toString() + '.png';}
            return images;
        })();
        
        //return images;
        console.log(images);
        console.log(images[2].src);

        
    }
	
	printTxt(){
		return this.text + " dawg";
	}
}

new Basket();

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
