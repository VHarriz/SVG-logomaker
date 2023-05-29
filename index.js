const inquirer = require ('inquirer');
const fs = require ('fs');
const Shape = require('./lib/shapes');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

const promptQ = [
    {
        type: 'input',
        message: 'Type in 3 letters',
        name: 'textCharacters'
    },
    {
        type: 'list',
        message: ' Select one of the 3 shapes',
        name: 'shapes',
        choices: ['Triangle','Circle','Square']
    },
    {
        type: 'input',
        message: 'Select the color for your shape',
        name: 'shapeColor'
    },
    {
        type: 'input',
        message: 'Select a color for the 3 letters',
        name: 'textColor'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            return console.log(err);
        }
    })
}

function init() {
    inquirer.prompt(promptQ).then((data) => {
        writeToFile('logo.svg', data);
    })

}

init();