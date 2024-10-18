import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
const question=[
  {
    type:'input',
    name:'naam',
    message:'Hello User! Enter your name...',
    default:'User'
  },
  {
    type:'input',
    name:'link',
    message:'Enter the link here...'
  }
]

function ask(){
  inquirer.prompt(question).then(answer =>{
    console.log(`Processing your info... Please be patient ${answer.naam}`)
    let url=answer.link
    let qri=qr.image(url)
    qri.pipe(fs.createWriteStream("qr_image.png"))
    fs.appendFile('urls.txt', url, err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  })
}

ask();

