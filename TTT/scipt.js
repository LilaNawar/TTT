// Setting up variables
const ACTION_SCISSORS = 'scissors';
const ACTION_PAPER = 'paper';
const ACTION_ROCK = 'rock';
const TIE = 'tie';
const player1 = 'player1';
const player2 = 'player2';
let timeout;
let turn = 'player1';
let winner = "";
let counter =0;

let boardMatrix = 
  [[null, null, null], 
   [null, null, null], 
   [null, null, null]]

function showMessage( message ){
  document.querySelector('#result').innerHTML = message;
  // clear message after 30s
  clearTimeout( timeout );
  timeout = setTimeout( function(){
    document.querySelector('#result').innerHTML = '';
  }, 15000)
}

function init(){
  // display empty board and welcome message
  showMessage( `Let's play! You against your friend.`)
}

// CONTROLLER 
function determineWinner(){
  if (winner === ""){
      //horizontal
    if ((boardMatrix[0][0]=== boardMatrix[0][1])&&(boardMatrix[0][0]== boardMatrix[0][2])&& boardMatrix[0][0]!= null){
      winner = turn;
      showMessage( `Winner is ${turn}`);
      return winner
    }
    else if((boardMatrix[1][0]=== boardMatrix[1][1])&& (boardMatrix[1][2]== boardMatrix[1][1]) && boardMatrix[1][0] != null){
      winner = turn;
      showMessage( `Winner is ${turn}`);
      return winner
    }
    else if((boardMatrix[2][0]=== boardMatrix[2][1]) && (boardMatrix[2][2] ==boardMatrix[2][0]) && boardMatrix[2][0] != null){
      winner = turn;
      showMessage( `Winner is ${turn}`);
      return winner
    }
    // vertical
    else if((boardMatrix[0][0]=== boardMatrix[1][0])&& (boardMatrix[2][0] == boardMatrix[0][0]) && boardMatrix[0][0] != null){
      winner = turn;
      showMessage(`Winner is ${turn}`);
      return winner
     }
    else if((boardMatrix[0][1]=== boardMatrix[1][1])&& (boardMatrix[2][1] == boardMatrix[0][1]) && boardMatrix[0][1] != null){
      winner = turn;
      showMessage(`Winner is ${turn}`);
      return winner
     }
    else if((boardMatrix[0][2]=== boardMatrix[1][2]) && (boardMatrix[2][2] == boardMatrix[1][2]) && boardMatrix[0][2] != null){
      winner = turn;
      showMessage(`Winner is ${turn}`);
      return winner
    }
    // // diagonal
    else if((boardMatrix[0][0]=== boardMatrix[1][1]) && (boardMatrix[2][2] == boardMatrix[0][0]) && boardMatrix[0][0] != null){
      winner = turn
      showMessage(`Winner is ${turn}`);
      return winner
    }
    else if((boardMatrix[0][2]=== boardMatrix[1][1]) && (boardMatrix[2][0] == boardMatrix[0][2]) && boardMatrix[0][2] != null){
      winner = turn
      showMessage(`Winner is ${turn}`);
      return winner
    }
    else if (counter== 9){
      winner = "tie";
      showMessage(`Cat's scratch. No winner!`); 
      return winner
    }
    else {changePlayer();}
    }
  }
function play( evt, id ){
  // finds the box based on the cell the user clicks, and insert the image in the correct place
    if (winner=== turn){
      showMessage( `Winner is ${turn}`)
      return}
    //-----------------------------------Top Row---------------------------------
    //top left
  else{
    if(evt.target.id=== "cell0.0"){
      //insert image
      insertImage(event.target.id)
      boardMatrix[0][0] = turn;
      counter ++;
      determineWinner();
    }
     //top middle square
    else if(evt.target.id=== "cell1.0"){
      //insert image
      insertImage(event.target.id)
      boardMatrix[0][1] = turn
      counter ++
      determineWinner()
    }
      //top right
    else if(evt.target.id=== "cell2.0"){
      //insert image
      insertImage(event.target.id)
      boardMatrix[0][2] = turn
      counter ++;
      determineWinner()
    }
    //-------------Middle Row------------------
    //middle right
    else if(evt.target.id=== "cell2.1"){
      //insert image
      insertImage(event.target.id);
      boardMatrix[1][2] = turn;
      counter ++;
      determineWinner();
      //changePlayer()
    }
     //very center square
    else if(evt.target.id=== "cell1.1"){
      //insert image
      insertImage(event.target.id)
      boardMatrix[1][1] = turn
      counter++
      determineWinner()
    }
    //middle left square
    else if(evt.target.id=== "cell0.1"){
      //insert image
      insertImage(event.target.id);
      boardMatrix[1][0] = turn;
      counter ++
      determineWinner();
    }
    //--------------------------------Bottom Row-----------------
    //bottom left
    else if(evt.target.id=== "cell0.2"){
      //insert image
      insertImage(event.target.id);
      boardMatrix[2][0] = turn;
      counter ++
      determineWinner();
    }
    //bottom middle
    else if(evt.target.id=== "cell1.2"){
      //insert image
      insertImage(event.target.id);
      boardMatrix[2][1] = turn;
      counter ++
      determineWinner();
    }
    //bottom right
    else if(evt.target.id=== "cell2.2"){
    //insert image
      insertImage(event.target.id);
      boardMatrix[2][2] = turn;
      counter ++
      determineWinner();
    }
  }
};
//inserting the image according to the player
function insertImage(id){
  // cat reaching
  if (turn == "player1"){
    var img = document.createElement('img'); 
    img.src = "https://imgur.com/pTJhqa3.jpg"; 
	document.getElementById(id).appendChild(img);
  }
  // cat laying down
  else{
    var img = document.createElement('img'); 
    img.src = "https://i.imgur.com/ipFVAKk.jpg"; 
	document.getElementById(id).appendChild(img);
  }
}
// function that changes the player once the box is clicked
function changePlayer(){
  if (turn === "player1"){
    turn = "player2"
  }
  else{
    turn = "player1"
  }
}
//clears the board when the button is clicked
function clearBoard(){
  boardMatrix = [[null, null, null], [null, null, null], [null, null, null]];
  turn = "player1";
  winner = "";
  counter = 0;
  showMessage("");
  for (imgElements of document.querySelectorAll("img")){
    var img = imgElements.remove('img');  
  }
}
// setup default player names
init();