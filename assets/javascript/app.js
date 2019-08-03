var correctA = 0
var incorrectA = 0
var unansweredA = 0
var x = 0
var y = 0
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
// function onload() {
// $('#triv-container').html('<button id="startbtn">Start</button>');
// }
$('#startbtn').click(function () {

    // answers = ['Spongebob', 'Patrick', 'Squidward', 'Sandy']
    trivia();
});

function trivia() {
    console.log(x)
    clearInterval(tOut);
    clearInterval(trans);
    if (x < 11) {
        console.log('pressed')
        if (x === 0) {
            answers = ['Spongebob', 'Patrick', 'Squidward', 'Sandy']
            y = 0
        }
        if (x === 1) {
            answers = ['Pickle', 'Sparky', 'Kimchi', 'Scooby']
            y = 2
        }
        if (x === 2) {
            answers = ['6', '5', '12', '10']
            y = 3
        }
        if (x === 3) {
            answers = ['Fist', 'Hip', 'Foot', 'Knuckle']
            y = 3
        }
        if (x === 4) {
            answers = ['Monkies', 'Genies', 'Fairies', 'Scientists']
            y = 2
        }
        if (x === 5) {
            answers = ['Emily', 'Sarah', 'Nazz', 'Kacey']
            y = 1
        }
        if (x === 6) {
            answers = ['Jamaican', 'British', 'Russian', 'Finnish']
            y = 0
        }
        if (x === 7) {
            answers = ['Uno', 'Stevie', 'Charlie', 'Nigel']
            y = 3
        }
        if (x === 8) {
            answers = ['Beaver', 'Dog', 'Platypus', 'Otter']
            y = 2
        }
        if (x === 9) {
            answers = ['Kidney', 'Lentils', 'Black', 'Pinto']
            y = 0
        }
        if (x === 10) {
            answers = ['DarkLord', 'MegaLord', 'UltraLord', 'SuperLord']
            y = 2
        }
        $('#triv-container').html('<h1 id="question">' + questions[x] + '</h1><br><a onclick = "a1()"><ul class="one" >' + answers[0] + '</ul></a> <a onclick = "a2()"><ul class="two">' + answers[1] + '</ul></a> <a onclick = "a3()"><ul class="three">' + answers[2] + '</ul></a> <a onclick = "a4()"><ul class="four">' + answers[3] + '</ul></a>');
        tOut = setTimeout(timeUp, 3000);
    }
    else {

        gameEnd();
    }
}
function timeUp() {
    console.log('timeout')
    clearInterval(tOut);
    clearInterval(trans);
    if (x === 0 || x === 6 || x === 9) {
        $('#triv-container').html('<h1 id=notimeorwrong>Times Up!</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer2 incorrectanswer">' + answers[0] + '</p>')
    }
    if (x === 5) {
        $('#triv-container').html('<h1 id=notimeorwrong>Times Up!</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer2 incorrectanswer">' + answers[1] + '</p>')
    }
    if (x === 1 || x === 4 || x === 8 || x === 10) {
        $('#triv-container').html('<h1 id=notimeorwrong>Times Up!</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer2 incorrectanswer">' + answers[2] + '</p>')
    }
    if (x === 2 || x === 3 || x === 7) {
        $('#triv-container').html('<h1 id=notimeorwrong>Times Up!</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer2 incorrectanswer">' + answers[3] + '</p>')
    }    x++;
    unansweredA++;
    setTimeout(trivia, 4000)
}
function right() {
    x++;
    correctA++;
    $('#triv-container').html('<h1>CORRECT!</h1>')
    trans = setTimeout(trivia, 4000);

}
function wrong() {
    if (x === 0 || x === 6 || x === 9) {
        $('#triv-container').html('<h1 id=notimeorwrong>INCORRECT</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[0] + '</p>')
    }
    if (x === 5) {
        $('#triv-container').html('<h1 id=notimeorwrong>INCORRECT</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[1] + '</p>')
    }
    if (x === 1 || x === 4 || x === 8 || x === 10) {
        $('#triv-container').html('<h1 id=notimeorwrong>INCORRECT</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[2] + '</p>')
    }
    if (x === 2 || x === 3 || x === 7) {
        $('#triv-container').html('<h1 id=notimeorwrong>INCORRECT</h1><p class = "incorrectanswer">Correct Answer Is:</p>' + '<p class = "incorrectanswer">' + answers[3] + '</p>')
    }

    x++;
    incorrectA++;
    trans = setTimeout(trivia, 4000);
}
function gameEnd() {
    $('#triv-container').html('<ul>Correct Answers: ' + correctA + '</ul><ul>Incorrect Answers: ' + incorrectA + '</ul><ul>Unanswered: ' + unansweredA + '</ul>')
}
function a1() {
    console.log('clicked');
    clearTimeout(tOut);
    if (x === 0 || x === 6 || x === 9) {
        right()
    }
    else {
        wrong()
    }
}
function a2() {
    clearTimeout(tOut);
    if (x === 5) {
        right()
    }
    else {
        wrong()
    }
}
function a3() {
    clearTimeout(tOut);
    if (x === 1 || x === 4 || x === 8 || x === 10) {
        right()
    }
    else {
        wrong()
    }
}
function a4() {
    clearTimeout(tOut);
    if (x === 2 || x === 3 || x === 7) {
        right()
    }
    else {
        wrong()
    }
}
// onload()