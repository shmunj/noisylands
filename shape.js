class Shape {
    constructor(yoff, yspeed, maxsize, colStroke, colFill) {
        this.yoff = yoff || 0.0;
        this.yspeed = yspeed || 0.1;
        this.maxsize = maxsize || 1.0;
        this.colStroke = colStroke || color(200);
        this.colFill = colFill || this.colStroke;
    }

    move() {
        var yoffSpeed = map(mouseX, 0, width, -this.yspeed, this.yspeed);
        this.yoff += yoffSpeed * this.yspeed;
    }

    draw(filled) {
        var filled = filled || false;

        var yn = this.yoff;
        
        push();
        stroke(this.colStroke);
        noFill();
        beginShape();
        
        if (filled) {
            fill(this.colFill);
            vertex(-100, height + 100);
        }

        for (var x=0; x < width; x++) {
        var n = noise(yn);
        
        var y = height - (n * height * this.maxsize);
        vertex(x, y);
        yn += inc;
        }

        if (filled) {
            vertex(width + 100, height + 100);
        }

        endShape();
        pop();
    }
}
