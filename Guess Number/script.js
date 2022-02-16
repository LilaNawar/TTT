//Lab Completed and BONUS completed

const game = {
    title: 'Guess the Number!',
    secretNum: null,
    biggestNum: 0,
    smallestNum: 0,
    play: function() {
      biggestNum=  prompt('please enter maximum number'),
      smallestNum=  prompt('please enter minumum number'),
      secretNum = Math.floor(Math.random() * 
        (biggestNum - smallestNum + 1) + smallestNum);
      render(secretNum)
    }  
  };
  
  let keepGuessing = true;
  let previousGuesses = [];
  
  function render(secNumber){
    let getGuess = prompt("what number are you guessing",  `secret number is ${secNumber}`);
    //if (typeof Number(secNumber)=== 'number'){
      while (keepGuessing || getGuess != "quit"){
        if (getGuess === "quit"){
          keepGuessing = false;
          return
        }if (secNumber === Number(getGuess)){
          //console.log(keepGuessing);
          alert(`Congrats! You guessed the number in ${previousGuesses.length} guesses!`);  
          keepGuessing = false;
          return
        }else if (typeof Number(getGuess)=== 'number'){
          if(getGuess > secNumber){
            alert(`Your guess of ${getGuess} is too high. Previous guesses: ${previousGuesses}`)
            previousGuesses.push(getGuess)
            getGuess = prompt("what number are you guessing");
          }else if(getGuess< secNumber){
            alert(`Your guess of ${getGuess} is too low. Previous guesses: ${previousGuesses}`)
            previousGuesses.push(getGuess)
            getGuess = prompt("what number are you guessing"); 
          }
        }else{
          getGuess = prompt('You did not enter a valid number. Please enter a valid number')
           getGuess = prompt("what number are you guessing")
        }
      }
    }
 
  game.play()      