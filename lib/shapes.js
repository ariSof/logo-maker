class Shape {
    setColor(fill) {
        this.fill = fill;
    }
    render() {
      throw new Error('Child class must implement a render() method.');
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`;
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`;
    }
}

class Square extends Shape {
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.fill}" />`;
    }
}

module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
}