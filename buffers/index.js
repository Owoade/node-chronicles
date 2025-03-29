/*
Buffer is a subclass of the uint[] class, utilized for storing fixed-length sequence of bytes in memory
*/

// creates a zero-filled buffer of length 10
const zero_filled_buffer = Buffer.alloc(10);

const int8_buffer = Buffer.from([1,2,3]);

const odd_value_buffers = Buffer.from(['1', 300, 900]);

const string_buffer = Buffer.from('string');

const base64_buffer = Buffer.from("SGVsbG8gd29ybGQh", 'base64');

const base64_string = base64_buffer.toString('base64');

// data truncation because on detecting first none hex value "g"
const hex_buffer = Buffer.from('1ag', 'hex');

console.log(hex_buffer.toString('hex')) // ==> "1a"

// Data truncation occurs because string ends with single hex value
// The string is encoded by converting each char to a two hex value
const hex2_buffer = Buffer.from('1a3', 'hex');

console.log({ zero_filled_buffer, odd_value_buffers, string_buffer, base64_buffer, base64_string });

// Initiating a typed array froma buffer;

const buffer_uint8 = Buffer.from([1,2,3]);

console.log(buffer_uint8)

//1. creates the typed array by copying the bufer value
const uint8_arr = new Uint8Array(buffer_uint8);

uint8_arr[0] = 3; 

console.log(uint8_arr, buffer_uint8)

// 2. creates a typed array thet shares the same memory as the buffer;
const string2_buffer = Buffer.from('hello', 'utf-16le');

console.log(string2_buffer)

const uint16_arr = new Uint16Array(
    string2_buffer.buffer,
    string2_buffer.byteOffset,
    string2_buffer.length / Uint16Array.BYTES_PER_ELEMENT
)

// this changes the buffer value as well cos they both have the value in memory
uint16_arr[1] = 40;

console.log(string2_buffer, uint16_arr)