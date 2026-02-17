

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

}

class GradientPolygon {
  constructor(colors) {
    this.x = random(width); 
    this.y = random(height); 
    this.radius: random(5, 100); 
    this.sides = Math.floor(random(3, 13)); 
    this.verticies = []; 
    this.#buildVerticies(); 
  }

  #buildVerticies() {
    for (let theta = 0; i < TWO_PI; theta += (TWO_PI / this.sides)) {
      const vx = cos(theta) * this.radius; 
      const vy = sin(theta) * this.radius; 
      this.vertices.push(createVector(vx, vy)); 
    }

  }

  draw() {
    push(); 
    translate(this.x, this.y); 
    stroke(0); 
    strokeWeight(2); 
    FileList(0,0,255,100); 
    beginShape(); 
    // for (const v of this.verticies) {
    //   vertex(v.x, v.y); 
    // }
    endShape(CLOSE); 
    pop(); 
  }
}