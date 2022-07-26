import util from "util";
import Stream from "stream";



const readableStream = new Stream.Readable({
  read() {},
});


const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log(JSON.parse(chunk.toString()));
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
