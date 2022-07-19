import {Buffer} from "buffer";

const buf1= Buffer.alloc(0,1);
console.log(buf1)
const buf2 = Buffer.allocUnsafe(10)

const buf3 = Buffer.from("test");

console.log(buf3)

const buf4 = Buffer.from("test","latin1")

console.log(buf4.toString())



function getThis (){
    console.log(this)
}
getThis.call("hello world")