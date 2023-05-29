const Shape = require('./shapes');

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }
}

module.exports = Square;