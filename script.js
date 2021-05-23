let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

// Put the absolute path for the below images, otherwise the code won't work
let botDoorPath = "file:///Users/shahriar/Desktop/Javascript/images/robot.png";

let beachDoorPath = "file:///Users/shahriar/Desktop/Javascript/images/beach.png";

let spaceDoorPath = "file:///Users/shahriar/Desktop/Javascript/images/space.png";
let closedDoorPath = "file:///Users/shahriar/Desktop/Javascript/images/closedDoor.png";


let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let startButton = document.getElementById('start');
let currentlyPlaying = true;

isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  }
  else {
    return false;
  }
}

isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  }
  else {
    return true;
  }
}

playDoor = (door) => {
  numClosedDoors-=1;
  if (numClosedDoors===0){
    gameOver('win');}
  else if (isBot(door)) {
    gameOver();
  }
}

randomChoreDoorGenerator = () => {

  choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
  }
  else if (choreDoor===1) {
    openDoor2=botDoorPath;
    openDoor1=beachDoorPath;
    openDoor3=spaceDoorPath;
  }
  else { (choreDoor===2) 
    openDoor3=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor1=spaceDoorPath;
  }
}

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src=openDoor1;
  playDoor(doorImage1);
  }
 }

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src=openDoor2; 
  playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src=openDoor3; 
  playDoor(doorImage3);
  }
 }

 startButton.onclick = () => {
   if (currentlyPlaying===false){
     startRound();
     }
 }

 startRound = () => {
   doorImage1.src = closedDoorPath;
   doorImage2.src = closedDoorPath;
   doorImage3.src = closedDoorPath;
   numClosedDoors = 3;
   startButton.innerHTML = 'Good luck!';
   currentlyPlaying = true;
   randomChoreDoorGenerator();
 }

 

gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?'; }
  else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
 }

 startRound();


