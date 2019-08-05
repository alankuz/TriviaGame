# TriviaGame

This project is a trivia game that asks you trivia questions about popular kids cartoons from the 2000's. You need to answer as many questions correct as possible and receive the highest correct answer score you can! Watch out, as you only have 30 seconds each questions. No using outside sources, only your own knowledge. 

## Getting Started

Playing is simple. Answer as many of the 2000's cartoon trivia questions correctly as you can. Once you finish answering questions you will be provided with a score and may play again. To select an answer simply click the answer you believe is correct. 

### Prerequisites

-Fingers
-Functional mouse/trackpad
-Newest browser update recommended**

### Installing

To install, and modify this program, you may press the fork button and then fork it to your computer through either gitbash, or terminal. To play to game you may press the following link:
[Trivia Game](https://alankuz.github.io/TriviaGame/)

## Deployment

You may fork the files, or use the link to add this to your own pages.

## Built With

* [Jquery](https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js) - Script framework

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Author

* **Alan Kuzmanovic** - *Initial work* - [alankuz](https://github.com/alankuz)

## License

No license agreements, do as you will with the program. 

##Psuedocode:

Press start to start the game.

Question is shown, which includes a timer for 30 seconds, and displays a question as well as 4 answers.
When you click an answer. it will tell you if correct or incorrect

If timer runs out: shows you are out of time. Shows the correct answer, and then comes up with a new question. 

If correct: Will display that you got it correct. Will then congratulate you. Then a delay for around 4 seconds. Then will record that you got it correct. and will display a new questions w/answer with a restarting timer. 

If incorrect: will change text to display incorrect. Will then show the correct answer. For about 4 seconds. Will then add incorrect answer to an array to remember if you are incorrect. and will display a new questions w/ answers with a resarting timer counting down from 30. NO KEYPRESS TO START NEXT QUESTION

Once you answer last questions it will display:

Correct answrs:
incorrect answers:
Unanswered:
Timer is no longer ticking down and is removed.
Start over button appears. Resets the game. //Same questions

