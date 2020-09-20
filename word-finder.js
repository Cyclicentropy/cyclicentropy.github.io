// Dictionary word matching 
// a.k.a 'Yo dawg, I heard you like words. So I got you some other words that have your word in it so you can word while you word!'

// Fetch the text file containing dictionary terms
/* let dictionaryData;
fetch('engmix.txt')
    .then(response => response.text())
    .then(data => {
        // Let's take the user's input and find a match.
        dictionaryData = response;
    }); */

/* let dictionaryData;
fetch('engmix.txt')
.then(response => response.text())
.then(data => console.log(data));
 */

const matches = document.getElementById('matches')

function output() {
    console.log("The form was submitted");
    // Get the word from user input
    const word = document.getElementById('word').value
        // Find full user input wod only
    var fullWord = document.getElementById('full-word').checked
        // Find all words containing user input
    var allWord = document.getElementById('all-word').checked

    console.log(word);
    console.log(fullWord);
    console.log(allWord);

    /* async function getDataset() {
      let response = await fetch('engmix.txt');
      let theData = await response.text(response);
      return console.log(theData); 
    }
    getDataset(); */

    function fetchData() {
      return fetch('engmix.txt')
              .then(response =>
                  response.text().then(text => text.split(/\r|\n/)));
  }
  
  fetchData().then(arr => {
    if(arr.includes(word)){
      console.log("Found a match");
      const matches = arr.filter(s => s.includes(word));
      console.log(matches);
      let listView = matches.join('<li>' + '</li>');
      console.log(listView);   
      if(fullWord == true){
        console.log(fullWord);
        document.getElementById("matches").innerHTML = word;
      } else if(allWord == true){
        console.log(allWord);
        document.getElementById("matches").innerHTML = listView;
      }
      
    }
  }
    

    
    );
    
}

