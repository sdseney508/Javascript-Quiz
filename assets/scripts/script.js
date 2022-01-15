//initializing my counter.
var counter = 0;
var correctans = false;
var timeremain = 60;
var timeleft = 60;
var initials = "";
var questionnumbers = [];
//will be an array of objects in the following format:
//[{initials: , n_corr: , time: },{initials: , n_corr: , time: }]
var highscores = [];
var n_corr = 0;
var timer = document.getElementById("timercountdown");
var questions = document.getElementById("question");
var choices = document.getElementById("options");
var highscoretable = document.getElementById("score-rows");
var timerInterval;

getHighscores();

//using a qlist array where each element in the array will be an object to store all of the questions and answer pairs.
//they can be referenced by the function in the following:
    //  qlist[0].Question; where inside the qlist[] is where is the array you are and the
    // .Question gives you which key-value pair in the object you are looking for.

var qlist = [
    {Question:'Why do JavaScript and Java have similar name?',
    Answers: {A: 'JavaScript is a stripped-down version of Java',
    B: 'JavaScript syntax is loosely based on Java',
    C: 'They both originated on the island of Java',
    D: 'None of the above' },
    Ans: 'B' },

    {Question:'When a user views a page containing a JavaScript program, which machine actually executes the script?',
    Answers: {A: 'The Users machine running a Web browser',
    B: 'The Web server',
    C: 'A central machine deep within Netscapes corporate offices',
    D: 'None of the above' },
    Ans: 'A' },

    {Question:'______ JavaScript is also called client-side JavaScript',
    Answers: {A: 'Microsoft',
    B: 'Navigator',
    C: 'LiveWire',
    D: 'Native' },
    Ans: 'B' },

    {Question:'__________ JavaScript is also called server-side JavaScript',
    Answers: {A: 'Microsoft',
    B: 'Navigator',
    C: 'LiveWire',
    D: 'Native' },
    Ans: 'C' },

    {Question:'What are variables used for in JavaScript Programs?',
    Answers: {A: 'Storing numbers, dates, or other values',
    B: 'Varying randomly',
    C: 'Causing high-school algebra flashbacks',
    D: 'None of the above' },
    Ans: 'A' },

    {Question:'_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation',
    Answers: {A: 'Client-side',
    B: 'Server-side',
    C: 'Local',
    D: 'Native' },
    Ans: 'A' },

    {Question:'What should appear at the very end of your JavaScript? The \<script LANGUAGE="JavaScript">tag',
    Answers: {A: 'The \</script>',
    B: 'The \<script>',
    C: 'The END statement',
    D: 'None of the above' },
    Ans: 'A' },

    {Question:'Which of the following cannot be done with client-side JavaScript?',
    Answers: {A: 'Validating a form',
    B: "Sending a form's contents by email",
    C: "Storing the form's contents to a database file on the server",
    D: 'None of the above' },
    Ans: 'C' },

    {Question:'Which of the following are capabilities of functions in JavaScript?',
    Answers: {A: 'Return a value',
    B: 'Accept parameters and Return a value',
    C: 'Accept parameters',
    D: 'None of the above' },
    Ans: 'C' },

    {Question:'Which of the following is not a valid JavaScript variable name?',
    Answers: {A: '2names',
    B: '_first_and_last_names',
    C: 'FirstAndLast',
    D: 'None of the above' },
    Ans: 'A' },

    {Question:'______ tag is an extension to HTML that can enclose any number of JavaScript statements',
    Answers: {A: '\<SCRIPT>',
    B: '\<BODY>',
    C: '\<HEAD>',
    D: '\<TITLE>' },
    Ans: 'A' },

    {Question:'How does JavaScript store dates in a date object?',
    Answers: {A: 'The number of milliseconds since January 1st, 1970',
    B: 'The number of days since January 1st, 1900',
    C: 'The number of seconds since Netscapes public stock offering',
    D: 'None of the above' },
    Ans: 'A' },

    {Question:'Which of the following attribute can hold the JavaScript version?',
    Answers: {A: 'LANGUAGE',
    B: 'SCRIPT',
    C: 'VERSION',
    D: 'None of the above' },
    Ans: 'A' },

    {Question:'What is the correct JavaScript syntax to write "Hello World"?',
    Answers: {A: 'System',
    B: 'println ("Hello World")',
    C: 'document',
    D: 'response' },
    Ans: 'C' },

    {Question:'Which of the following way can be used to indicate the LANGUAGE attribute?',
    Answers: {A: "\<LANGUAGE='JavaScriptVersion'>",
    B: "\<SCRIPT LANGUAGE='JavaScriptVersion'>",
    C: "\<SCRIPT LANGUAGE='JavaScriptVersion'> JavaScript statements…\</SCRIPT>",
    D: "\<SCRIPT LANGUAGE='JavaScriptVersion'!> JavaScript statements…\</SCRIPT>" },
    Ans: 'C' },

    {Question:'Inside which HTML element do we put the JavaScript?',
    Answers: {A: '\<js>',
    B: '\<scripting>',
    C: '\<script>',
    D: '\<javascript>' },
    Ans: 'C' },

    {Question:'What is the correct syntax for referring to an external script called " abc',
    Answers: {A: '\<script href=" abc"',
    B: '\<script name=" abc"',
    C: '\<script src=" abc"',
    D: 'None of the above' },
    Ans: 'C' },

    {Question:'Which types of image maps can be used with JavaScript?',
    Answers: {A: 'Server-side image maps',
    B: 'Client-side image maps',
    C: 'Server-side image maps and Client-side image maps',
    D: 'None of the above' },
    Ans: 'B' },

    {Question:'Which is the correct way to write a JavaScript array?',
    Answers: {A: 'var txt = new Array(1:"tim",2:"kim",3:"jim")',
    B: 'var txt = new Array:1=("tim")2=("kim")3=("jim")',
    C: 'var txt = new Array("tim","kim","jim")',
    D: 'var txt = new Array="tim","kim","jim"' },
    Ans: 'C' },

    {Question:'What does the <noscript> tag do?',
    Answers: {A: 'Enclose text to be displayed by non-JavaScript browsers',
    B: 'Prevents scripts on the page from executing',
    C: 'Describes certain low-budget movies',
    D: 'None of the above' },
    Ans: 'A' },

    {Question:'JavaScript entities start with _______ and end with _________',
    Answers: {A: 'Semicolon, colon',
    B: 'Semicolon, Ampersand',
    C: 'Ampersand, colon',
    D: 'Ampersand, semicolon' },
    Ans: 'D' },

    {Question:'Which of the following best describes JavaScript?',
    Answers: {A: 'a low-level programming language',
    B: 'a scripting language precompiled in the browser',
    C: 'a compiled scripting language',
    D: 'an object-oriented scripting language' },
    Ans: 'D' },

    {Question:'Choose the server-side JavaScript object?',
    Answers: {A: 'FileUpLoad',
    B: 'Function',
    C: 'File',
    D: 'Date' },
    Ans: 'C' },

    {Question:'Choose the client-side JavaScript object?',
    Answers: {A: 'Database',
    B: 'Cursor',
    C: 'Client',
    D: 'FileUpLoad' },
    Ans: 'D' },

    {Question:'Which of the following is not considered a JavaScript operator?',
    Answers: {A: 'new',
    B: 'this',
    C: 'delete',
    D: 'typeof' },
    Ans: 'B' },

    {Question:'______method evaluates a string of JavaScript code in the context of the specified object',
    Answers: {A: 'Eval',
    B: 'ParseInt',
    C: 'ParseFloat',
    D: 'Efloat' },
    Ans: 'A' },

    {Question:'Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?',
    Answers: {A: 'onfocus',
    B: 'onblur',
    C: 'onclick',
    D: 'ondblclick' },
    Ans: 'B' },

    {Question:'JavaScript is interpreted by _________',
    Answers: {A: 'Client',
    B: 'Server',
    C: 'Object',
    D: 'None of the above' },
    Ans: 'A' },

    {Question:'Using _______ statement is how you test for a specific condition',
    Answers: {A: 'Select',
    B: 'If',
    C: 'Switch',
    D: 'For' },
    Ans: 'B' },

    {Question:'Which of the following is the structure of an if statement?',
    Answers: {A: 'if (conditional expression is true) thenexecute this codeend if',
    B: 'if (conditional expression is true)execute this codeend if',
    C: 'if (conditional expression is true) {then execute this code>->}',
    D: 'if (conditional expression is true) then {execute this code}' },
    Ans: 'C' },

    {Question:'How to create a Date object in JavaScript?',
    Answers: {A: 'dateObjectName = new Date([parameters])',
    B: 'dateObjectName',
    C: 'dateObjectName := new Date([parameters])',
    D: 'dateObjectName Date([parameters])' },
    Ans: 'A' },

    {Question:'The _______ method of an Array object adds and/or removes elements from an array',
    Answers: {A: 'Reverse',
    B: 'Shift',
    C: 'Slice',
    D: 'Splice' },
    Ans: 'D' },

    {Question:'Which tag(s) can handle mouse events in Netscape?',
    Answers: {A: '\<IMG>',
    B: '\<A>',
    C: '\<BR>',
    D: 'None of the above' },
    Ans: 'B' },

    {Question:'____________ is the tainted property of a window object',
    Answers: {A: 'Pathname',
    B: 'Protocol',
    C: 'Defaultstatus',
    D: 'Host' },
    Ans: 'C' },

    {Question:'To enable data tainting, the end user sets the _________ environment variable',
    Answers: {A: 'ENABLE_TAINT',
    B: 'MS_ENABLE_TAINT',
    C: 'NS_ENABLE_TAINT',
    D: 'ENABLE_TAINT_NS' },
    Ans: 'C' },

    {Question:'In JavaScript, _________ is an object of the target language data type that encloses an object of the source language',
    Answers: {A: 'a wrapper',
    B: 'a link',
    C: 'a cursor',
    D: 'a form' },
    Ans: 'A' },

    {Question:'When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________',
    Answers: {A: 'ScriptObject',
    B: 'JSObject',
    C: 'JavaObject',
    D: 'Jobject' },
    Ans: 'B' },

    {Question:'_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties',
    Answers: {A: 'ScriptObject',
    B: 'JSObject',
    C: 'JavaObject',
    D: 'Jobject' },
    Ans: 'B' },

    {Question:'_________ is a wrapped Java array, accessed from within JavaScript code',
    Answers: {A: 'JavaArray',
    B: 'JavaClass',
    C: 'JavaObject',
    D: 'JavaPackage' },
    Ans: 'A' },

    {Question:' A ________ object is a reference to one of the classes in a Java package, such as netscape',
    Answers: {A: 'JavaArray',
    B: 'JavaClass',
    C: 'JavaObject',
    D: 'JavaPackage' },
    Ans: 'B' },

    {Question:'The syntax of a blur method in a button object is ______________',
    Answers: {A: 'Blur()',
    B: 'Blur(contrast)',
    C: 'Blur(value)',
    D: 'Blur(depth)' },
    Ans: 'A' },

    {Question:'The syntax of capture events method for document object is ______________',
    Answers: {A: 'captureEvents()',
    B: 'captureEvents(args eventType)',
    C: 'captureEvents(eventType)',
    D: 'captureEvents(eventVal)' },
    Ans: 'C' },

    {Question:'The syntax of close method for document object is ______________',
    Answers: {A: 'Close(doC',
    B: 'Close(object)',
    C: 'Close(val)',
    D: 'Close()' },
    Ans: 'D' },

    {Question:' Is it possible to nest functions in JavaScript?',
    Answers: {A: 'True',
    B: 'False'},
    Ans: 'A' },

    {Question:' Scripting language are',
    Answers: {A: ' High Level Programming language',
    B: ' Assembly Level programming language',
    C: ' Machine level programming language'},
    Ans: 'A',
    },

    {Question:' Which best explains getSelection()?',
    Answers: {A: ' Returns the VALUE of a selected OPTION',
    B: ' Returns document',
    C: ' Returns the value of cursor-selected text',
    D: ' Returns the VALUE of a checked radio input' },
    Ans: 'C' },

    {Question:' Choose the client-side JavaScript object:',
    Answers: {A: ' Database',
    B: ' Cursor',
    C: ' Client',
    D: ' FileUpLoad' },
    Ans: 'D' },

    {Question:' What is mean by "this" keyword in javascript?',
    Answers: {A: ' It refers current object',
    B: ' It referes previous object',
    C: ' It is variable which contains value',
    D: ' None of the above' },
    Ans: 'A' },

];

//keeping it simple:
//  Page loads -> load high scores from local storage
//  Click on Start Button:
//      ->  Sets the timer to 60 seconds.
//      ->  Selects a random set of 25 questions from the qlist array
//      ->  Displays the first question
//      ->  User selects an answer as timer runs in parallel.  Answer goes over to checkAnswers
//      ->  if the guess is correct, adds 5 seconds to the timer, if the guess is incorrect, subtracts 5 seconds.
//      ->  if the guess is correct, increments the correctguess counter
//      ->  adds one to the counter then reruns playGame
//  Game is over when either the timer hits zero or the user has answered all 25 questions.
//  On gameover, updates the high score list.
//  The high score list is prioritized first on number of questions correct, then on time remaining on the clock with 
//  the desire to be to have 25 correct with as high a timer as possible.

function getHighscores(){
    highscoretable.innerHTML = "";
    //Rebuild the local high scores
    //initializing the  local high score array as an empty array causes errors with .length.
    //the array will contain objects with the keys of {initials: SDS, numbcorrect: x, timeremain: y}.
    let h_initial = [{Initials: '--', Score: 0, Time: 0},{Initials: '--', Score: 0, Time: 0}];
    //pull from local storage.
    highscores = JSON.parse(localStorage.getItem("highscores"));
    //check to see if there is a high score returned, if not, set the array to blank.
    if (highscores !== null && highscores !==undefined){
        makeHighScoreTable(highscores);
    }
    else {
        highscores=h_initial;
        makeHighScoreTable(highscores);
    }
}

function buildQuestionDeck(){
    //create a 25 element array of random numbers so we can mix up the questions asked.
    for (i=0; i<25; i++){
        let randomnumb = Math.floor(Math.random()*qlist.length);

        if (questionnumbers.includes(randomnumb)){
            //makes sure i have 25 unique questions by decrementing the counter if there is
            //a duplicate created.
            i--;
        }
        else {
            questionnumbers.push(randomnumb);
        }
    }
    return questionnumbers;
}

function playGame(qnumbs){
    //get the next question after incremented by checkAnswers
    questions.innerHTML = qlist[questionnumbers[counter]].Question;
    //clear prior options
    document.getElementById('options').innerHTML = "";
    for (letter in qlist[questionnumbers[counter]].Answers){
        var radiobtn = document.createElement('input');
        radiobtn.type = 'radio';
        radiobtn.value = letter;
        radiobtn.name = 'ans_choices';
        radiobtn.id = letter;
        radiobtn.onclick = checkAnswer;

        var btnlabel = document.createElement('label');
        btnlabel.htmlFor = letter;

        var btndescription = document.createTextNode(qlist[questionnumbers[counter]].Answers[letter]);
        btnlabel.appendChild(btndescription);

        var newline = document.createElement('br');

        choices.appendChild(radiobtn);
        choices.appendChild(btnlabel);
        choices.appendChild(newline);
    };
}

function makeHighScoreTable(hscores){
    //clear the old table before appending
    highscoretable.innerHTML = "";
    for (i=0; i< hscores.length; i++){

        //for each element in the high scores array, create a new div element
        //to be appended to the high scores section.  the variableds are redeclared
        //for every element in the array, then appended. 
        let mydiv = document.createElement("div");     
        let name = document.createElement("div");
        let numbcorr = document.createElement("div");
        let timeremain = document.createElement("div"); 
        let mydivid = "row" + i;
        //assign the classes so they behave as desired.
        mydiv.className = "table-rows";
        mydiv.id= mydivid;
        name.className = "score";
        numbcorr.className = "score";
        timeremain.className = "score";
        
        name.innerHTML = hscores[i].Initials;
        numbcorr.innerHTML = hscores[i].Score;
        timeremain.innerHTML = hscores[i].Time;
        
        document.getElementById("score-rows").appendChild(mydiv);
        document.getElementById(mydivid).appendChild(name);
        document.getElementById(mydivid).appendChild(numbcorr);
        document.getElementById(mydivid).appendChild(timeremain);
    };
}

function checkAnswer(){
    var radio_selected = document.getElementsByName('ans_choices');
    var correctanswer = qlist[questionnumbers[counter]].Ans;
    
    //increment question counter
    counter++;
    //check which button was clicked
    for (i = 0; i< radio_selected.length; i++){
        if(radio_selected[i].checked)
        var selectedanswer = radio_selected[i].value
    }
    //check to see if they got the correct answer
    if (selectedanswer != correctanswer){
        timeremain = timeremain - 5;
    }
    else {
        timeremain = timeremain + 5;
        n_corr++;
    }

    //check for end of question file
    if (counter === 5){
    }
    else {
        playGame(questionnumbers);
    }
}

function setScore(intl,n_corr,timeleft){
    console.log("im in setScore, the last score is: ");
    latestscore = {Initials: intl, Score: n_corr, Time: timeleft};
    debugger;
    //sort the local high scores by n_corr then by timeleft to see if this needs to be inserted or not
    //check to see if there are already 10 high scores.  if there are, check to see if any are placeholders, then 
    //insert a new one via splice.
    if (highscores.length === 10){
        for (i=0; i < highscores.length; i++) {
            //is your number correct higher than or equal to
            if (highscores[i].Score < latestscore.Score){
                highscores.splice(i, 0, latestscore);
                //popping the last element to keep highscores at 10 items
                highscores.pop(1);
                //stop the loop
                i = highscores.length;
            } 
            else if (highscores[i].Score == latestscore.Score && highscores[i].Time < latestscore.Time){
                highscores.splice(i, 0, latestscore);
                //popping the last element to keep highscores at 10 items
                highscores.pop(1);
                //stop the loop
                i = highscores.length;
            }    
        };
        
    }
    else {
        for (i=0; i < highscores.length; i++) {
            //is your number correct higher than or equal to
            if (highscores[i].Score < latestscore.Score){
                highscores.splice(i, 0, latestscore);
                //stop the loop
                i = highscores.length;
            } 
            else if (highscores[i].Score == latestscore.Score && highscores[i].Time < latestscore.Time){
                highscores.splice(i, 0, latestscore);
                //stop the loop
                i = highscores.length;
            } 
        };
    }     
    
    //set local storage with the new high score array.
    localStorage.setItem("highscores", JSON.stringify(highscores));
    //remake the highscores table
    makeHighScoreTable(highscores);
    endGame();
}

function startTimer() {timerInterval = setInterval(function(){    
    timeremain--;
    timer.innerHTML = timeremain;
    if (counter == 5){
        clearInterval(timerInterval);
        setScore(initials, n_corr, timeremain);
        choices.innerHTML = "";
        questions.innerHTML = "";
        timer.innerHTML = "";
        return;
    }
    else if (timeremain <= 0) {
        // if they ran out of time, kill the timer and go to the setscore function.
        clearInterval(timerInterval);
        setScore(initials, n_corr, 0 );
        choices.innerHTML = "";
        questions.innerHTML = "";
        timer.innerHTML = "";
        return;
    }
}, 1000);
}

function endGame() {
    //resets the global variables
    choices.innerHTML = "";
    questions.innerHTML = "";
    timer.innerHTML = "";
    n_corr = 0;
    timeremain = 0;
    questionnumbers = [];
    initials='';
}

document.getElementById('resetbtn').addEventListener('click', function(event){
    event.preventDefault;
    localStorage.removeItem("highscores");
    highscoretable.innerHTML = "";
    getHighscores();
});

document.getElementById('start').addEventListener("click",function(event){
    event.preventDefault;
    timeremain = 60;
    counter = 0;
    timer.innerHTML = timeremain;
    initials = window.prompt("Please enter your initials");
    console.log("first log of the game:");
    console.log(highscores);
    buildQuestionDeck();
    var timerInterval = setInterval(function(){    
        timeremain--;
        timer.innerHTML = timeremain;
        if (counter === 25){
            clearInterval(timerInterval);
            setScore(initials, n_corr, timeremain);
        }
        else if (timeremain <= 0) {
            // if they ran out of time, kill the timer and go to the setscore function.
            clearInterval(timerInterval);
            setScore(initials, n_corr, 0 );
        }
    }, 1000);
    playGame(questionnumbers);
    
});

