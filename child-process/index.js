import {exec,spawn,fork} from "child_process";
import { stdout } from "process";

// const controller = new AbortController();
// const {abort, signal} = controller;

// const git = spawn("git",["..","add ."]);
// git.stdout.on("data",(data)=>{
//     console.log(data)
// })

// git.on("error",err => console.error(err))


// git.stderr.on("data",(err)=> console.error(err.toString()));


// exec("cwd",{signal}, (err,stdout,stderr)=>{
//     if(err){
//         console.log(err,err.signal);
//         return
//     }

//     console.log(stdout,stderr)
// })

// abort()

const child = fork(`../child-process/child.js`);
child.send({status:"connected"});
child.on("message", message => console.log(message))


