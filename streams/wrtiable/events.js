import { open } from "fs/promises"
import { Stream } from "stream";
import fs from "fs";

const file = await open('video.mp4', 'r');

const stream = file.createWriteStream();

stream.on('close', ()=> console.log('file has been closed'));

file.close();


const write = fs.createWriteStream('file.txt', {
    autoClose: false
})

write.write('hello');
write.write('hello there again');
write.write('hello there again again');
write.write('are you deaf?');
write.write('I give up');

write.cork();

write.cork();

// The writable.cork() method forces all written data to be buffered in memory. The buffered data will be flushed when either the stream.uncork() or stream.end() methods are called.

write.end() 

// write.uncork();

// write.uncork()

// When using writable.cork() and writable.uncork() to manage the buffering of writes to a stream, defer calls to writable.uncork() using process.nextTick(). Doing so allows batching of all writable.write() calls that occur within a given Node.js event loop phase.
