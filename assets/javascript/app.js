// Global Variables---------------
var correctA = 0
var incorrectA = 0
var unansweredA = 0
var x = 0
var sec = 30
var time;
var questions = [
    "Which Spongebob character lives in a pineapple?",
    "What was Chowder's pet's name?",
    'What number comes after "Ben"?',
    "In the show Flapjack, what body part was the captain named after?",
    "What were Timmy's odd parents?",
    "In Ed Edd and Eddy, what was Ed's sister's name?",
    "What accent does Grim have in The Grim Adventures of Billy and Mandy?",
    "What is Numbuh 1's real first name in Codename: Kids Next Door?",
    "Phineas and Ferb have what animal as a pet?",
    "What kind of Bean do they stack in Camp Lazlo?",
    "What action hero is Sheen from Jimmy Neutron obsessed with?"
]
var answers = []
var tOut;
var trans;

$('#startbtn').click(function () {
    trivia();
});

// Main questions and answer loading function, this is the what creates the main content---------------------
function trivia() {
    clearInterval(tOut);
    clearInterval(trans);
    if (x < 11) {
        sec = 30
        if (x === 0) {
            answers = ['Spongebob', 'Patrick', 'Squidward', 'Sandy']
        }
        if (x === 1) {
            answers = ['Pickle', 'Sparky', 'Kimchi', 'Scooby']
        }
        if (x === 2) {
            answers = ['6', '5', '12', '10']
        }
        if (x === 3) {
            answers = ['Fist', 'Hip', 'Foot', 'Knuckle']
        }
        if (x === 4) {
            answers = ['Monkies', 'Genies', 'Fairies', 'Scientists']
        }
        if (x === 5) {
            answers = ['Emily', 'Sarah', 'Nazz', 'Kacey']
        }
        if (x === 6) {
            answers = ['Jamaican', 'British', 'Russian', 'Finnish']
        }
        if (x === 7) {
            answers = ['Uno', 'Stevie', 'Charlie', 'Nigel']
        }
        if (x === 8) {
            answers = ['Beaver', 'Dog', 'Platypus', 'Otter']
        }
        if (x === 9) {
            answers = ['Kidney', 'Lentils', 'Black', 'Pinto']
        }
        if (x === 10) {
            answers = ['DarkLord', 'MegaLord', 'UltraLord', 'SuperLord']
        }
        $('#triv-container').html('<h1 id="question">' + questions[x] + '</h1><br><a onclick = "a1()"><ul class="one ques" >' + answers[0] + '</ul></a> <a onclick = "a2()"><ul class="two  ques">' + answers[1] + '</ul></a> <a onclick = "a3()"><ul class="three  ques">' + answers[2] + '</ul></a> <a onclick = "a4()"><ul class="four  ques">' + answers[3] + '</ul></a>');
        countDown()
    }
    else {

        gameEnd();
    }
}

function countDown() {
 $('#timer').html(sec)
    time = setInterval(function () {
        if (sec < 1) {
            clearInterval(time);
            sec++;
            timeUp()
        }

        sec--;
        $('#timer').html(sec);
    }, 1000);
}

// When the clock is out of time -----------------------------------
function timeUp() {
    clearInterval(tOut);
    clearInterval(trans);
    if (x === 0 || x === 6 || x === 9) {
        $('#triv-container').html('<h1 id="notimeorwrong">Times Up!</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[0] + '</p><img src="assets/images/' + x + '.gif">')
    }
    if (x === 5) {
        $('#triv-container').html('<h1 id="notimeorwrong">Times Up!</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[1] + '</p><img src="assets/images/' + x + '.gif">')
    }
    if (x === 1 || x === 4 || x === 8 || x === 10) {
        $('#triv-container').html('<h1 id="notimeorwrong">Times Up!</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[2] + '</p><img src="assets/images/' + x + '.gif">')
    }
    if (x === 2 || x === 3 || x === 7) {
        $('#triv-container').html('<h1 id="notimeorwrong">Times Up!</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[3] + '</p><img src="assets/images/' + x + '.gif">')
    } 
    x++;
    unansweredA++;
    setTimeout(trivia, 4000)
}

// When you get an answer correct-----------------------------------------
function right() {
    clearInterval(time);
    sec = 30
    x++;
    correctA++;
    $('#triv-container').html('<h1 id="notimeorwrong">CORRECT!</h1><img src="assets/images/win.gif">')
    trans = setTimeout(trivia, 4000);

}

// When you get an answer wrong-------------------------------------
function wrong() {
    clearInterval(time);
    sec = 30
    if (x === 0 || x === 6 || x === 9) {
        $('#triv-container').html('<h1 id="notimeorwrong">INCORRECT</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[0] + '</p><img src="assets/images/' + x + '.gif">')
    }
    if (x === 5) {
        $('#triv-container').html('<h1 id="notimeorwrong">INCORRECT</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[1] + '</p><img src="assets/images/' + x + '.gif">')
    }
    if (x === 1 || x === 4 || x === 8 || x === 10) {
        $('#triv-container').html('<h1 id="notimeorwrong">INCORRECT</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[2] + '</p><img src="assets/images/' + x + '.gif">')
    }
    if (x === 2 || x === 3 || x === 7) {
        $('#triv-container').html('<h1 id="notimeorwrong">INCORRECT</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[3] + '</p><img src="assets/images/' + x + '.gif">')
    }

    x++;
    incorrectA++;
    trans = setTimeout(trivia, 4000);
}

// When the game ends -----------------------------------
function gameEnd() {
    $('#triv-container').html('<ul class= "scores">Correct Answers: ' + correctA + '</ul><ul class= "scores">Incorrect Answers: ' + incorrectA + '</ul><ul class= "scores">Unanswered: ' + unansweredA + '</ul><a onclick = "reset()"><h1 id="end-button">Click Here to play again!</h1></a>')
    $('#timer').html('')
}

// Reset function--------------------------------
function reset() {
    clearInterval(time)
    x = 0;
    correctA = 0;
    incorrectA = 0;
    unansweredA = 0;
    trivia();
}

// Answer 1 function ------------------------
function a1() {
    clearTimeout(tOut);
    if (x === 0 || x === 6 || x === 9) {
        right()
    }
    else {
        wrong()
    }
}

// Answer 2 function-----------------------------
function a2() {
    clearTimeout(tOut);
    if (x === 5) {
        right()
    }
    else {
        wrong()
    }
}

// Answer 3 function-----------------------------
function a3() {
    clearTimeout(tOut);
    if (x === 1 || x === 4 || x === 8 || x === 10) {
        right()
    }
    else {
        wrong()
    }
}

// Answer 4 function-----------------------------
function a4() {
    clearTimeout(tOut);
    if (x === 2 || x === 3 || x === 7) {
        right()
    }
    else {
        wrong()
    }
}
