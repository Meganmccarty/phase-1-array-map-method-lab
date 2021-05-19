const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// used freeCodeCamp as a reference:
// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/

/*const titleCased = (tutorials) = tutorials.map((title) => {

    // split each word in a title into a separate array
    const splitTitle = title.split(" ");

    // create a new array with the split words
    const wordsInTitle = splitTitle.map((word) => {
        
        // make the first letter of each word capital
        const firstLetterCapital = word[0].toUpperCase() + word.substr(1);
        return firstLetterCapital;
    });

    const newTitle = wordsInTitle.join(" ");
    return newTitle;
});

console.log("New titles:", titleCased);
console.log("Original array:", tutorials);*/

function titleCased() {
    const finalTitles = tutorials.map((title) => {

        // split each word in a title into a separate array
        const splitTitle = title.split(" ");
    
        // create a new array with the split words
        const wordsInTitle = splitTitle.map((word) => {
            
            // make the first letter of each word capital
            const firstLetterCapital = word[0].toUpperCase() + word.substr(1);
            return firstLetterCapital;
        });
    
        const newTitle = wordsInTitle.join(" ");
        return newTitle;
    });

    return finalTitles;
}

console.log(titleCased());
console.log(tutorials);
