
//imports:
import {Apple} from './apple.js'; //import apple class

//data for apples:
const applesData = [
    {id: "apple1", xPos: 120, yPos: 176},
    {id: "apple2", xPos: 273, yPos: 132},
    {id: "apple3", xPos: 518, yPos: 231},
    {id: "apple4", xPos: 632, yPos: 119},
    {id: "apple5", xPos: 720, yPos: 188}
];

//apples made from apple data:
export const apples = applesData.map((appleData)=>{
    return new Apple(appleData.id, appleData.xPos, appleData.yPos);
});

//draw apples:
/*export const drawApples = ()=>{
    console.log("ddddddddd");
    apples.forEach((apple)=> apple.draw());
}*/
