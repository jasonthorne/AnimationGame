//apple canvas layers:
const apple1Canvas = document.getElementById("apple1");
const apple2Canvas = document.getElementById("apple2"); 
const apple3Canvas = document.getElementById("apple3");
const apple4Canvas = document.getElementById("apple4");
const apple5Canvas = document.getElementById("apple5"); 

const apples = [];

//coordinates for apples:
const appleCoords = [
    {xPos: 120, yPos: 176},
    {xPos: 273, yPos: 132},
    {xPos: 518, yPos: 231},
    {xPos: 632, yPos: 119},
    {xPos: 720, yPos: 188}
];

/*
//////////////////spin through and call get on each element
var appleCtxs = [
    apple1Canvas.getContext("2d"), 
    apple2Canvas.getContext("2d"), 
    apple3Canvas.getContext("2d"), 
    apple4Canvas.getContext("2d"), 
    apple5Canvas.getContext("2d")
];*/
