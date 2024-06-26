
let x = 150
let y = 30
let startScreen = true 
let score = 0 
let velocity = 2
let ScreenStart = 0 
let backDrop = 0 
let speed = 1
let isgameOver = false 
let isgameWon = false 

function setup(){
  createCanvas (700,500)
}

function draw (){
 if (isgameOver){
    gameOver()
   return 
  }
  
  background ('skyblue')
  if (startScreen) {
    Screen()
    return
  } 
  
  startGame()  
}

function Screen() {
     if (mouseIsPressed === true) {
    startScreen = false;
  }

  if (startScreen === true) {
    fill("rgb(5,0,0)");
    textAlign(CENTER)
    textSize(30)
    text("Click to Start Collecting Leaves!", width / 2, height / 2);
    
  }
   
}

function startGame (){
  drawLeaf(x,y,30)
  drawBasket(mouseX,height - 30,68,50)
  y+=velocity;
 if (y>500&&(x>=mouseX&&x<=mouseX+68)){
    x= random(0,700)
    y=0
    score += 1   
      if (score === 7) {
      background ("skyblue")
       isgameOver= true 
        isgameWon = true
    }
 } else if(y>500){
    x= random(0,700)
   y=0
   isgameOver = true

 } 
  if (score >= 2 ){
      velocity = 3;
    }
  
}
   
   function drawLeaf(x, y) {
  push();
  translate(x, y);
  fill('green');
  stroke('rgb(2,37,2)');
  strokeWeight(2);

  beginShape();
  vertex(0, 0);
  bezierVertex(-20, -10, -20, -30, 0, -40);
  bezierVertex(20, -30, 20, -10, 0, 0);
  endShape(CLOSE);

  strokeWeight(1);
  line(0, 0, 0, -40);

  pop();
}
   
   function drawBasket(x, y) {
  push();
  translate(x, y);
  fill('#D89651');
  stroke('rgb(139,79,17)');
  strokeWeight(2);

  beginShape();
  vertex(0, 0);
  vertex(68, 0);
  vertex(68, 20);
  vertex(58, 30);
  vertex(10, 30);
  vertex(0, 20);
  endShape(CLOSE);

  fill('saddlebrown');
  rect(10, 30, 48, 10);

  pop();
}
  
   
  function gameOver (){
  if (isgameWon){
    gameWin()
  }
    else {
      text("Oh no! You dropped one.", width / 2, height / 2)
    }
      
    
  }
  
  function gameWin(){
    text ("Yay!", width / 2, height / 2)
  }
