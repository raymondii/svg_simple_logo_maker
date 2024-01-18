// lib/shapes.js
class Circle {
  constructor() {}

  draw(userInput) {
    const radius = 50; // Set a default radius for the circle

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="${radius}" stroke="black" stroke-width="3" fill="${userInput.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">${userInput.text}</text>
    </svg>`;
  }
}

class Rectangle {
  constructor() {}

  draw(userInput) {
    const width = 100; // Set a default width for the rectangle
    const height = 50; // Set a default height for the rectangle

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
        <rect width="${width}" height="${height}" stroke="black" stroke-width="3" fill="${userInput.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">${userInput.text}</text>
    </svg>`;
  }
}

class Triangle {
  constructor() {}

  draw(userInput) {
    const base = 100; // Set a default base for the triangle
    const height = 50; // Set a default height for the triangle

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
        <polygon points="0,0 ${base},0 ${base / 2},${height}" stroke="black" stroke-width="3" fill="${userInput.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">${userInput.text}</text>
    </svg>`;
  }
}

module.exports = { Circle, Rectangle, Triangle };