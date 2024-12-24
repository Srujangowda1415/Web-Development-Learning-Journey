//  use the inquirer package

import inquirer from 'inquirer';
import QRCode from 'qr-image';


const questions=[
    {
        message: "Hello! this is a question...",
        type:'input',
        name:'welcome'

    },
    {
        name:'askname',
        message:"Enter your name here...",
        type:'input'
    }
]

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
  })


const qr_png = QRCode.image('qrlink', { type: 'png' });
qr_png.pipe(require('fs').createWriteStream('myqr.png'));