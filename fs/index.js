import fs from "fs";
import { open } from "fs/promises"
import path from "path";
import { Stream } from "stream";


const file = await open('text.txt', 'r');

const stream = file.createReadStream({});

const writable_stream = new Stream.Writable({
    write(chunk){
        this.cork()
        console.log(`----------------a new data -------`)
        // console.log(chunk.toString())
    },
})


writable_stream.on('pipe', ()=> console.log('piped'))
stream.on('error', (e)=> console.log( error ))

stream.pipe(writable_stream)

stream.on('close', ()=> console.log('stream closed'))
stream.on('end', ()=> console.log('stream ended'))


try {

    // Create a foltder recursively;
    const dir_path = new URL('./folder/child-folder/', import.meta.url) // use __dirname in cjs

    fs.mkdirSync(dir_path);

}
catch(e){

    // throws error if folder already exists

    console.error(e);

}

try {

    const dir = fs.readdirSync('./');

    console.log(dir);

    // filters out a sub-directories from a directory
    const sub_dir = dir.filter( content => fs.existsSync(new URL(`./${content.split(".")[0]}`, import.meta.url)));

    console.log( sub_dir )

}
catch(e){

    console.error(e);
    
}
