const os= require("os")
// USER INFO FUNCTION
// prints user info
// console.log(os.userInfo())
// EOL FUNCTION
// this prints the eol value for you for your particular os
// Paragraphs always contains EOL
// EOL stands for end of line
// EOL varies from os to os
// For windows it is \r\n
// For POSIX it is \n
// console.log(JSON.stringify(os.EOL)); 
// ARCH FUNCTION
// Returns an estimate of the default amount of parallelism a program should use. Always returns a value greater than zero.
// console.log(os.arch())
// CPUS FUNCTION
// Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.
// console.log(os.cpus())

// FREEMEM FUNCTION
// Returns the amount of free system memory in bytes as an integer.
// console.log(os.freemem())

const currentOs={
    name:os.hostname(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}
console.log(currentOs)