import { createServer } from "node:http";
import { Writable } from "node:stream";

const server = createServer((req, res)=>{

})

const writableStream = new Writable({
    write(chunk){
        console.log(chunk)
    }
})
writableStream.on("pipe", chunk => console.log(chunk))

server.on("request", (req)=>{
    req.pipe(writableStream)
})

server.listen(3000).on("listening", ()=> console.log("Server running on port 3000"))