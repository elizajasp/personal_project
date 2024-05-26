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

  //Shows the current drawing if there any data in drawing array
  for (let i = 0; i < drawings.length; i++) {
    let path = drawings[i];
    if (drawings[i].length != 0) {
      // beginShape();
      for (let j = 0; j < path.length; j++) {
        strokeWeight(4);
        stroke(255, 0, 89);
        line(path[j].x1, path[j].y1, path[j].x2, path[j].y2);
        // vertex(path[j].x2, path[j].y2);
      }
      // endShape();
    }
  }
}

// let currentColor = 'black'

//   function setup() {
//     createCanvas(windowWidth, windowHeight);
//     strokeWeight(3)
//   }

//   function draw() {

//     //print('x:' + mouseX + 'y:' + mouseY);
//     //the button
//     fill(255, 0, 0);
//     rect(100, 100, 50, 50)
//     fill(0, 255, 0);
//     rect(300, 100, 50, 50)
//     fill(0, 0, 255);
//     rect(900, 500, 50, 50)
//     fill(255)
//     rect(30, 30, 50, 20)

//     //make the button can switch the color
//     if (mouseIsPressed == true) {
//       stroke(currentColor);
//       line(mouseX, mouseY, pmouseX, pmouseY);
//     }

//     if (mouseIsPressed) {
//       if (mouseX > 100 && mouseX < 150 && mouseY > 100 && mouseY < 150) {
//         print('switching to color red');
//         currentColor = 'red';
//       } else if (mouseX > 300 && mouseX < 350 && mouseY > 100 && mouseY < 150) {
//         print('switching to color green');
//         currentColor = 'green';
//       } else if (mouseX > 900 && mouseX < 950 && mouseY > 500 && mouseY < 550) {
//         print('switching to blue');
//         currentColor = 'blue';
//       } else if (mouseX > 32 && mouseX < 80 && mouseY > 33 && mouseY < 50) {
//         print('clearing the bg');
//         background(255);
//         currentColor = 'black';

//       }
//     }

//     //name the button
//     textSize(20);
//     text('Red', 108, 132);
//     textSize(15);
//     text('Green', 302, 132);
//     textSize(20);
//     text('blue', 908, 532);


//   }

//   function keyPressed() {
//     if (key == 's') {
//       saveCanvas('myart.png');
//     }
//   }