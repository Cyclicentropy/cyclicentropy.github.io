// Dictionary word matching 
// a.k.a 'Yo dawg, I heard you like words. So I got you some other words that have your word in it so you can word while you word!'

// Fetch the text file containing dictionary terms
fetch('engmix.txt')
    .then(response => response.text())
    .then(data => {
        // Let's take the user's input and find a match.
        //console.log(data);
    });

function output() {
    console.log("The form was submitted");
    // Get the word from user input
    const word = document.getElementById('word').value
        // Find full user input wod only
    var fullWord = document.getElementById('full-word').checked
        // Find all words containing user input
    var allWord = document.getElementById('all-word').checked

    /* console.log(word);
    console.log(fullWord);
    console.log(allWord);
    */



}