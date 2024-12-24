// we are exploring fs module here
// fs refers to file system module it allows us to read,write files in node

import * as fs from 'node:fs/promises';

 var fileContent = "Hello Cutie! How are you doing? We are trying to make a file here using the fs module"
var errorMessage="An Error has occured... We probably could not find the file you were looking for"
// fs.writeFile("fsfile1.txt",fileContent,(err) =>{
//     if (err) throw err;
//     console.log("The file has been created successfully...")
// })
console.log("Heeelllooooo")
fs.readFile("./fsfile1.txt",(err,data) =>{
    console.log(data);
    if (err) {
        console.log(errorMessage)

    }
    const fileContent2 = data.toString();
    console.log('File content:', fileContent2);
});
// we can see how the above code didnt work directly..
// we are guessing the reason behind that is that readfile is an asynchronous function so the code below that
// is getting processed before that and hence it is not able to print the data
// as soon as we provide an async await the code works perfectly fine
async function readFileAsync() {
    try {
        const data = await fs.readFile('./fsfile1.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFileAsync();