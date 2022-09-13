
//canvas
const backgroundCanvas = document.createElement("canvas"); //document.getElementById("test");

//maybe create cavas file that returnsa a canvas element with given specs and a passed id +++++++
backgroundCanvas.height = 640;
backgroundCanvas.width = 873;
backgroundCanvas.id = "background";
backgroundCanvas.className = "layer3"


const backgroundImg = new Image(); //background image
backgroundImg.src = "./background.png"; //image source 



var backgroundCtx = backgroundCanvas.getContext("2d");

backgroundImg.onload = function(){
    backgroundCtx.drawImage(backgroundImg, 0, 0, backgroundCanvas.width, backgroundCanvas.height);  //draw background
}


document.getElementById("test").appendChild(backgroundCanvas);

//export const layers = document.createElement("div"); //create canvas element
//layers.id = "layers"; //give id


//<canvas id="background" class="layer1" width="873" height="640"></canvas>