const blob = new Blob(['anu is a great dev']);

console.log(blob.stream().values().next().then( val => console.log(val) ))