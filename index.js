// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Rectangle, Triangle } = require('./lib/shapes');

// Function to generate SVG content based on user input
function generateSVG(userInput) {
  let shape;

  switch (userInput.shape) {
    case 'circle':
      shape = new Circle(userInput.radius);
      break;
    case 'rectangle':
      shape = new Rectangle(userInput.width, userInput.height);
      break;
    case 'triangle':
      shape = new Triangle(userInput.base, userInput.height);
      break;
    default:
      throw new Error('Invalid shape');
  }

  // Return the generated SVG
  return shape.draw();
}

// Function to prompt the user for input
async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for your logo:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for your logo:',
      choices: ['circle', 'rectangle', 'triangle'],
    },
    {
      type: 'list',
      name: 'color',
      message: 'Select a color for your logo:',
      choices: ['red', 'green', 'blue'],
    },
    {
      type: 'input',
      name: 'width',
      message: 'Enter the width for your shape:',
      when: (answers) => answers.shape === 'rectangle',
    },
    {
      type: 'input',
      name: 'height',
      message: 'Enter the height for your shape:',
      when: (answers) => answers.shape === 'rectangle',
    },
    {
      type: 'input',
      name: 'radius',
      message: 'Enter the radius for your shape:',
      when: (answers) => answers.shape === 'circle',
    },
    {
      type: 'input',
      name: 'base',
      message: 'Enter the base for your shape:',
      when: (answers) => answers.shape === 'triangle',
    },
    {
      type: 'input',
      name: 'height',
      message: 'Enter the height for your shape:',
      when: (answers) => answers.shape === 'triangle',
    },
  ]);

  // Generate SVG content
  const svgContent = generateSVG(userInput);

  // Save SVG to a file
  fs.writeFileSync('examples/logo.svg', svgContent);

  console.log('Logo saved as examples/logo.svg');
}

// Call the promptUser function
promptUser();