

function sendHello (){
    return "hello world"
}

function double(m){
    return 2 * m
}



process.on("exit",()=> console.log("process exited"))
process.on("message",(msg)=>{
  const dub = double(5)
  process.send(dub)
  process.exit();
})
process.send(sendHello())
