import {  createServer } from "http";
import fs from "fs";

const server = createServer((req, res)=>{

    let body = '';

    req.setEncoding('utf8');

    req.on('data', (chunk) => {
        body += chunk;
    });
    
    if( req.method === "GET" ){

        if( req.url === "/video" ){

            req.on('end', () => {
                try {

                    const video_stream = fs.createReadStream('video.mp4');

                    video_stream.pipe( res );
                  
                } catch (er) {
                  // uh oh! bad json!
                  res.statusCode = 400;
                  return res.end(`error: ${er.message}`);
                }
            });
        }
    }


})  

server.listen(1337, undefined, undefined, ()=> console.log('Running server') );