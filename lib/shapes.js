// lib/shapes.js
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    draw() {
      // Replace with your actual circle SVG generation logic
      return `<circle cx="50" cy="50" r="${this.radius}" stroke="black" stroke-width="3" fill="red" />`;
    }
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    draw() {
      // Replace with your actual rectangle SVG generation logic
      return `<rect width="${this.width}" height="${this.height}" stroke="black" stroke-width="3" fill="green" />`;
    }
  }
  
  class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    draw() {
      // Replace with your actual triangle SVG generation logic
      return `<polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" stroke="black" stroke-width="3" fill="blue" />`;
    }
  }
  
  module.exports = { Circle, Rectangle, Triangle };
  