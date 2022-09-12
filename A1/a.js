
import {B} from "./b.js";

const b = new B();

console.log(b.text);
console.log("hullo!");
console.log(b.printTxt());

console.log("dfdfdfedeee");

//document.querySelector("#test").innerHTML = "dfdffdd";
document.getElementById("test").innerHTML = b.printTxt();