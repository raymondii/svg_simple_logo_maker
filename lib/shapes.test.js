// lib/shapes.test.js
const { Circle, Rectangle, Triangle } = require('./shapes');

describe('Circle', () => {
  test('draws a circle', () => {
    const circle = new Circle(10);
    expect(circle.draw()).toContain('<circle');
  });
});

describe('Rectangle', () => {
  test('draws a rectangle', () => {
    const rectangle = new Rectangle(10, 20);
    expect(rectangle.draw()).toContain('<rect');
  });
});

describe('Triangle', () => {
  test('draws a triangle', () => {
    const triangle = new Triangle(10, 20);
    expect(triangle.draw()).toContain('<polygon');
  });
});
