var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];  
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
alert("Try your luck, select any letter of the alphabet and see if you can beat the Cyber-Psychic!")

       
        // if (keyCode >= 65 && keyCode <= 90) {
        //     } else {
        //         alert("Please select alaphabet letters only!");
        //     }
        // }   

        // if (userGuess != computerGuess) {
        // } else {
        //     alert("Please select alaphabet letters only!");
        // }

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();  
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
        guessesSoFar.push(userGuess);  
                           
            if (userGuess == computerGuess) {
                wins++;
                alert("As Charlie Sheen used to say WINNING!!!");
                guessesLeft = 9;  
                guessesSoFar.length = 0; 
            }
            else if (guessesLeft == 0){
                losses++;
                alert("Lose her her her, her her her, LOSER!!!");
                guessesLeft = 9;
                guessesSoFar.length = 0;
            }
            else if (userGuess !== computerGuess){
                guessesLeft--;  
            }  
    
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I am thinking of... ?</p>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>"
        ;

        document.querySelector("#game").innerHTML = html;
    }
    