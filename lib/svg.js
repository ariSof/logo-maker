const { Shape, Square } = require("./shapes");

class SVG {
    setText(text, fill) {
        if(text.length <= 3){
            this.text = text;
            this.fill = fill;
        }
        else {
            throw new Error("Text must not exceed 3 characters.");
        }
        
    }

    getText(){
        if(this.fill && this.text){
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fill}">${this.text}</text>`;
        }
        return ``;
    }

    setShape(shape){
        this.shape = shape;
    }

    getShape() {
        if(this.shape){
            return this.shape.render();
        }
        return ``;
    }

    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.getShape()}${this.getText()}</svg>`;
    }
}

module.exports = SVG