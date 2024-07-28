import stream, { pipeline } from "stream";
import fs, { write } from "fs";

const read_file_stream = fs.createReadStream('link.txt');

const transform_stream = new stream.Transform({
   transform( chunk, enc, callback ){
     callback(null, chunk.toString('hex'))
   }
});

const write_stream = new stream.Writable({
    write( chunk ){
        console.log(chunk.toString(), "Incoming data")
    }
});

pipeline(
    read_file_stream,
    transform_stream,
    write_stream,
    ( err )=> console.log( err )
)








