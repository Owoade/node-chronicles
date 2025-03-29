/*
Typed[] is a data structure that helps in reading and writting data to memory buffers
UInt8[] is a subclass of typed array it provides context to the underlying buffer.
*/


const uint8_array = new Uint8Array(4);

// would be converted to unsigned value  before assigning to uint8[]
uint8_array[0] = -20 // actual unsigned equivalence will be 236;

uint8_array[1] = 34

// would be set to 0 cos 'string' is not a valid int8 value
uint8_array[2] = 'string';

// However the value below is a stringified integer 
// and fits within the constraint of uint8[] hence willl be parsed as an integer value
uint8_array[3] = '2';

console.log( uint8_array.BYTES_PER_ELEMENT, uint8_array )

const base_64_string = "SGVsbG8gd29ybGQh";

// convert base64 string to normal string
const string = atob(base_64_string);

console.log({ string })

const string_uint8_array = new Uint8Array(string.length);

// convert string to uint8[]
for ( let i = 0; i < string.length; i++ ){
    string_uint8_array[i] = string.charCodeAt(i);
}
// convert uint[] to string
const decoded_string = String.fromCharCode(...string_uint8_array);

console.log(decoded_string);
