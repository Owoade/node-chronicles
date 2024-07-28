import stream, { pipeline, finished } from "stream";
import { promisify } from "util";

const ac = new AbortController();

const { signal } = ac;

const write_stream = new stream.Writable({
    write( chunk ){
        console.log( chunk )
    }
})

const promisified_finished = promisify( finished );

promisified_finished( write_stream )
.then(()=> console.log("Write stream eneded"))

let interval_id;

setImmediate(()=> ac.abort(), 200)

pipeline(
    async function*({ signal }){
        // source.push('hello', '=====>')
        // while(true){
            // console.log(signal)
            yield Buffer.alloc(Date.now()/4294967296)
        // }
    },
    write_stream,
    ( err )=> console.log( "Pipeline complete" )
)

