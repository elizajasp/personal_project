let canvas;
let drawings = [];
let currentPath = [];
let isDrawing = false;

function setup() {
  canvas = createCanvas(1600, 1000);
  background(255,255,255);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(function() {
    endPath();
  });
}

function startPath() {
  px = mouseX;
  py = mouseY;

  console.log("——");
  console.log("You started a new path!");
  isDrawing = true;
  currentPath = [];
  drawings.push(currentPath);
  console.log("A new array of points is pushed in 'drawing'");
  console.log(currentPath);

}

function endPath() {
  console.log("You released the pen, and ended this path!");
  console.log("There is " + drawings.length + " paths in 'drawing' now.");
  console.log("Let see the content of the drawing array:");
  console.log(drawings);
  isDrawing = false;
  console.log("You're not drawing right now");
}

function draw() {
  if (isDrawing) {
    let point = {
      x1: px,
      y1: py,
      x2: mouseX,
      y2: mouseY
    }
    currentPath.push(point);
    px = mouseX;
    py = mouseY;
  }

  for (let i = 0; i < drawings.length; i++) {
    let path = drawings[i];
    if (drawings[i].length != 0) {

      for (let j = 0; j < path.length; j++) {
        strokeWeight(4);
        stroke(255, 0, 89);
        line(path[j].x1, path[j].y1, path[j].x2, path[j].y2);
      }
    }
  }
}
