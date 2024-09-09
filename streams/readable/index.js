import fs from "fs";

const file = fs.createReadStream('book.txt');

file.on('readable', ()=>{

    let data;

    while( (data = file.read()) !== null ){
        console.log( data.toString() )
    }
})