//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const SvgImage = require('./lib/svg.js');
const { Square, Circle, Triangle, } = require("./lib/shapes.js");

function writeToFile(data) {
    
    fs.writeFile('logo.svg', data , (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
        );
}

function svgGenerator(selection) {

    const svg = new SvgImage();
    svg.setText(selection.text, selection.tcolor);
    let shape;

    if(selection.shape[0] === 'Square') {

        shape = new Square();
    }
    else if(selection.shape[0] === 'Circle') {

        shape = new Circle();

    } else { //==Triangle
        shape = new Triangle();
    }

    shape.setColor(selection.scolor);
    svg.setShape(shape);
    const toWrite = svg.render()
    writeToFile(toWrite);
}

// Function to initialize app with inquirer prompts
function init() {

    inquirer
        .prompt([
        {
            type: 'input',
            message: 'Enter text for logo (max 3 chars):',
            name: 'text',
            default: 'svg'
        },
        {
            type: 'input',
            message: 'Enter text color:',
            name: 'tcolor',
        },
        {
            type: 'checkbox',
            message: 'Select a shape:',
            name: 'shape',
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: 'input',
            message: 'Enter the color of the shape:',
            name: 'scolor',
        },
    ])
    .then((response) => {
       // console.log(response);
        svgGenerator(response);
    });
}

// Function call to initialize app
init();
