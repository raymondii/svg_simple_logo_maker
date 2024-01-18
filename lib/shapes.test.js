const { Circle, Rectangle, Triangle } = require('./shapes');

// Test for Circle
test('Circle should generate valid SVG', () => {
  const circle = new Circle();
  const userInput = { text: 'Test', shape: 'circle', color: 'red' };
  const svg = circle.draw(userInput);

  // Replace this assertion with your specific expectations
  expect(svg).toContain('<circle');
  expect(svg).toContain('<text');
});

// Test for Rectangle
test('Rectangle should generate valid SVG', () => {
  const rectangle = new Rectangle();
  const userInput = { text: 'Test', shape: 'rectangle', color: 'green' };
  const svg = rectangle.draw(userInput);

  // Replace this assertion with your specific expectations
  expect(svg).toContain('<rect');
  expect(svg).toContain('<text');
});
