// Dictionary word matching 
// a.k.a 'Yo dawg, I heard you like words. So I got you some other words that have your word in it so you can word while you word!'




function output() {
    const word = document.getElementById('word').value
    const fullWord = document.getElementById('full-word').value
    const allWord = document.getElementById('all-word').value
    console.log("The form was submitted");
    console.log(word);
    console.log(fullWord);
    console.log(allWord);
  }


// Fetch the text file containing dictionary terms
fetch('engmix.txt')
  .then(response => response.text())
  .then(data => {
  	// Let's take the user's input and find a match.
  	//console.log(data);
  });