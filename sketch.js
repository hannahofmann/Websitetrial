let p = 50;
let k = 100;
let font;
let foreground;
let g;
let n;

function setup() {
  createCanvas(1080, 1080);
  pixelDensity(1);
  smooth();
  font = createFont("Roboto-Bold", 114);
  foreground = createGraphics(width, height);
}

function keyPressed() {
  foreground.beginDraw();
  foreground.textSize(144);
  foreground.textFont(font);

  let textWidth = foreground.textWidth(key);
  if (p + textWidth > width) {
    p = 50;
    k += 100;
  }
  foreground.text(key, p, k);
  p += textWidth;
  foreground.endDraw();
}

function draw() {
  image(foreground, 0, 0);
  let z = color(0, 126, 255, 0);
  let c = color(random(0, 255), random(0, 255), random(0, 255));

  if (keyIsPressed) {
    // A random squares
    if (key == "a" || key == "A") {
      strokeWeight(0);
      fill(c);
      rect(random(0, 1920), random(0, 1080), 50, 50);
    }

    // B Bezier
    if (key == "b" || key == "B") {
      fill(z);
      strokeWeight(1);
      stroke(random(0, 155));
      for (let n = 0; n < 1; n++) {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = random(width);
        let y2 = random(height);
        let cx1 = random(width);
        let cy1 = random(height);
        let cx2 = random(width);
        let cy2 = random(height);
        bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
      }
    }

    // C random colour
    if (key == "c" || key == "C") {
      fill(c);
    }

    // D Delta Triangle
    if (key == "d" || key == "D") {
      strokeWeight(3);
      fill(z);
      triangle(
        random(0, 1920),
        random(0, 1080),
        random(0, 1920),
        random(0, 1080),
        random(0, 1920),
        random(0, 1080)
      );
    }

    // E Ellipse
    if (key == "e" || key == "E") {
      fill(c);
      // Problem C is always random and not a normal colour at all???
      strokeWeight(0);
      ellipse(
        random(0, 1920),
        random(0, 1080),
        random(10, 100),
        random(50, 100)
      );
    }

    // F Ellipse
    if (key == "f" || key == "F") {
      fill(c);
      // Problem C is always random and not a normal colour at all???
      ellipse(
        random(0, 1920),
        random(0, 1080),
        random(10, 100),
        random(50, 100)
      );
    }

  // G Gradient
  if (key == 'g' || key == 'G') {
    let c1 = color(random(255), random(255), random(255));
    let c2 = color(random(255), random(255), random(255));

    for (let g = 0; g < height; g++) {
      let pct = map(g, 0, height, 0, 1);
      let c3 = lerpColor(c1, c2, pct);
      stroke(c3);
      line(1, g, width, g);
    } 
  }

  // H   nochmal mehr am grid arbeiten
  if (key == 'h' || key == 'H') {
    stroke(c);
    let gridSize = 10;
    let spacing = width/gridSize;

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        if (random(20) < 1) {
          line(x, y, x + spacing, y + spacing);
        } else {
          line(x + spacing, y, x, y + spacing);
        }
      }
    }
  }

  // I Invert 
  if (key == 'i' || key == 'I') {
    let img = get();
    for (let i = 0; i < img.pixels.length; i++) {
      img.pixels[i] = color(255 - red(img.pixels[i]), 255 - green(img.pixels[i]), 255 - blue(img.pixels[i]));
    }
    img.updatePixels();
    image(img, 0, 0);
  }

  // J

  // N Newtriangle
  if (key == 'N' || key == 'N') {
    
  }

  // S Sine 
  if (key == 's' || key == 'S') {
    stroke(0);
    strokeWeight(2);
    noFill();

    // Generate random values for the sine wave
    let amplitude = random(10, 800);
    let frequency = random(0.02, 0.05);
    let phase = random(TWO_PI);

    // Draw the sine wave
    beginShape();
    for (let x = 0; x < width; x += 10) {
      let y = height / 2 + amplitude * sin(frequency * x + phase);
      vertex(x, y);
    }
    endShape();
  }
}}
