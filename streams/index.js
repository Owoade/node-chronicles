import util from "util";
import Stream from "stream";



const readableStream = new Stream.Readable({
  read() {},
});


const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  // console.log(JSON.parse(chunk.toString()));
  next();
};


// readableStream.pipe(writableStream);

readableStream.on("data", (data)=>{
  writableStream.write(data)
})

readableStream.on("end",()=> writableStream.end())

readableStream.push(JSON.stringify({
    action:"active",
    data:["all actions", "manah=ged actions"]
}));
// readableStream.push('ho!');

readableStream.on('close', () => writableStream.end());
writableStream.on('close', () => console.log('ended'));

readableStream.destroy();

writableStream.write('hello there');

writableStream.cork();

writableStream.write('this is another dose');

writableStream.cork();

// This specify the amount of times wrtable.uncork has to be called to fully uncork the stream
const amountOfUncorkCallsTobeMade = writableStream.writableCorked;

console.log(amountOfUncorkCallsTobeMade)
