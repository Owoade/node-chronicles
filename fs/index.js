import fs from "node:fs";
import { open } from "fs/promises"
import path from "path";
import { Stream } from "stream";
import fsPromises from "fs/promises"
import { watch } from "node:fs/promises"


const file = await open('text.txt', 'r');

const stream = file.createReadStream({
    emitClose: true,
});

const writable_stream = new Stream.Writable({
    emitClose: true,
    write(chunk){
        console.log(stream.bytesRead)
        // this.cork()
        console.log(`----------------a new data -------`)
        // console.log(chunk.toString())
    },
})



writable_stream.on('pipe', ()=> console.log('piped'))
writable_stream.on('close', ()=> console.log('pipe closed'))
stream.on('error', (e)=> console.log( error ))

stream.pipe(writable_stream)

stream.on('close', ()=> console.log('stream closed'))
stream.on('end', ()=> console.log('stream ended'))

// file.close(); // triggers the readable stream close event




try {

    // Create a foltder recursively;
    const dir_path = new URL('./folder/child-folder/', import.meta.url) // use __dirname in cjs

    // fs.mkdirSync(dir_path);

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

//  This is reads a file, if no encoding is specified a buffer is returned else a string
const data = fs.readFileSync('book.txt', {
    encoding: 'utf8'
});

//
const folders = fs.opendirSync("./");

const stats = fs.statSync('book.txt');

console.log(stats);

// (async function watch_file(){

//     const watcher = watch('book.txt');
    
//     for await ( const _ of watcher );

//     console.log(_);

// })()


// Create symlink 
// fs.symlinkSync('book.txt', 'link.txt');

