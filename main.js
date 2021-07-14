// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Get the computer ball element
const computerBall = document.querySelector(".ball");

//Get the player paddle element
const playerPaddle = document.querySelector(".player-paddle");




// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;
let computerPaddleDirection = true;

// The y-velocoty of the player paddle
let playerPaddleYPosition = 0;
let playerPaddleYVelocity = 1;
let playerPaddleDirection = true;


//The y-velocity of the computer ball

let computerBallYPosition = 0;
let computerBallYVelocity = 1;
let computerBallYDirection = true;

// The -y-velocity of the computer ball

//let computerBallminusYPosition = 0;
//let computerBallminusYVelocity = 1;

//The x-velocity of the computer ball
let computerBallXPosition = 0;
let computerBallXVelocity = 1;
let computerBallXDirection = true;

//The -x-velocity of the computer ball

//let computerBallminusXPosition


computerBall.style.top = "250px";
computerBall.style.left = "350px";




// Update the pong world
function update() {

    // Update the computer paddle's position

    if (computerPaddleYPosition > 400) {
        computerPaddleDirection = false;
    } else if (computerPaddleYPosition < 0) {
        computerPaddleDirection = true;
    }

    if (computerPaddleDirection === true) {
        computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;
        console.log(computerPaddleYPosition, "paddle")
    } else if (computerPaddleDirection == false) {
        computerPaddleYPosition = computerPaddleYPosition - computerPaddleYVelocity;
    }

    computerPaddle.style.top = `${computerPaddleYPosition}px`;
//=================================================================================

if (playerPaddleYPosition > 400) {
    playerPaddleDirection = false;
} else if (playerPaddleYPosition < 0) {
    playerPaddleDirection = true;
}

if (playerPaddleDirection === true) {
    playerPaddleYPosition = playerPaddleYPosition + playerPaddleYVelocity * 2;
    console.log(playerPaddleYPosition, "paddle")
} else if (playerPaddleDirection == false) {
    playerPaddleYPosition = playerPaddleYPosition - playerPaddleYVelocity * 2;
}

playerPaddle.style.top = `${playerPaddleYPosition}px`;










    //if(computerPaddleYPosition  == 400){




    //else if (computerPaddleYPosition < 0) {
    //computerPaddleYPosition = computerPaddleYPosition - computerPaddleYVelocity;
    //}
    //function x() {
    // let computerPaddleYPosition = 0;
    //let computerPaddleYVelocity = 1;
    //computerPaddle.style.top = `${computerPaddleYPosition}px`;
    console.log(computerPaddleYVelocity)

   

    //console.log(computerPaddleYVelocity, "yvelocity")

    // setInterval(x, 35)

    //}
    //setInterval(upPaddle, 35);

    //console.log(computerPaddleYPosition, "paddle")

    // Apply the y-position Paddle

    //===================================================================
    // Update the computer ball's -Y position

    if(computerBallXPosition > 660){
        computerBallXDirection = false;
    }else if(computerBallXPosition < 0){
        computerBallXDirection = true;
    }
    
    if (computerBallXDirection === true) {
        computerBallXPosition = computerBallXPosition + 1;
    } else {
        computerBallXPosition = computerBallXPosition - 1;
    }
//=========If Ball position contacts computer or player paddle
    //if(computerBallXPosition == computerPaddleYPosition){
       // computerBallXDiretion = false;
   // }else if(computerBallXPosition == playerPaddleYPosition){
   //     computerBallXDirection = true;
   // }

    computerBall.style.left = `${computerBallXPosition}px`;
//==================================================================
//=============XBall Position

    if(computerBallYPosition > 475){
        computerBallYDirection = false;
    }else if(computerBallYPosition < 0){
        computerBallYDirection = true;
    }
    
    if (computerBallYDirection === true) {
        computerBallYPosition = computerBallYPosition + 1;
    } else {
        computerBallYPosition = computerBallYPosition - 1;
    }

// Apply the y-position Ball
computerBall.style.top = `${computerBallYPosition}px`;


    //if (computerBallXPosition == computerPaddleYPosition) {
       // computerBallYDirection = false;
    //}



    //if (computerBallXPosition == 50) {

    //computerBallYPosition = computerBallYPosition + computerBallYVelocity;
    //console.log(computerBallminusYPosition, "ball")
    // }
    // if (computerBallYPosition === 475) {
    //     computerBallYPosition = computerBallYPosition - computerBallYVelocity;
    // }
    // if (computerBallXPosition === 660) {
    //let computerBallXPosition = 660;

    //    computerBallXPosition = computerBallXPosition + computerBallXVelocity;
} console.log(computerBallYPosition)




//===================================================================


// Update the computer ball's X position
//computerBallXPosition = computerBallXPosition + computerBallXVelocity;

//Apply the x-position








// Call the update() function every 35ms
setInterval(update, 35);






