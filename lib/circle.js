const Shape = require('./shapes');

class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }
}

module.exports = Circle;