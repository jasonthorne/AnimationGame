
//++++++++++++++++++++++++++++++++++++++++++THis preloading is dumb :P 
 //++++++++++++++++LOOSE ALL CLASSES - NO ONJECTS :P 
const images = (()=>{ //basket images
    const images = [];
    for (let i=0;i<=11;i++){
        images[i] = new Image(110, 110);
        images[i].src = './img/baskets/basket' + i.toString() + '.png';}
    return images;
})();

//basket class:
export class Basket {

	constructor(){
        /*this.images = (()=>{ //basket images
            const images = [];
            for (let i=0;i<=11;i++){
                images[i] = new Image(110, 110);
                images[i].src = './img/baskets/basket' + i.toString() + '.png';}
            return images;
        })();*/
        this.currImg = images[0]; //current image
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
