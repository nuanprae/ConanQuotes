var quotes = [
        {
            "quoteText": "Is a reason necessary? I don't know why you would kill someone but as for saving someone...a logical mind isn't needed, right?",
            "quoteCharacter": "Kudo Shinichi"
        },
        
        {   "quoteText": "A trick is nothing but a puzzle mankind came up with. If you use your head, you can uncover the logical answer.",
            "quoteCharacter": "Kudo Shinichi"
        },

        {
            "quoteText": "Courage is a word of justice. It means the quality of mind that enables one to face apprehension with confidence and resolution. It is not right to use it as an excuse to kill someone.",
            "quoteCharacter": "Mouri Ran"
        },

        {   
            "quoteText": "I don't mind waiting for people. Because the longer you wait, the happier you feel when you finally meet again.",
            "quoteCharacter": "Mouri Ran"
        },

        {
            "quoteText": "Memories of someone who’s passed away remains beautiful forever and a person’s heart will linger over them, they say.",
            "quoteCharacter": "Haibara Ai"
        },

        {
            "quoteText": "It’s like an automated vending machine for canned juice. You’ll get what you want so long as you have the money, but...you get nothing in return without it. You can’t buy your way into the hearts of others.",
            "quoteCharacter":"Haibara Ai"
        },

        {
            "quoteText": "You must not forget if that's an important memory to you...especially since when a person dies, he can only live in the memories of others...",
            "quoteCharacter": "Takagi Wataru"
        },

        {
            "quoteText": "Fear of death is worse than death itself...",
            "quoteCharacter": "Akai Shuichi"
        },

        {
            "quoteText": "You can't cure your own suffering by making others suffer.",
            "quoteCharacter": "Edogawa Conan"
        }
        
    ]

// store quotes that have already been viewed in an array
var viewedQuotes = [];

function newQuote() {
    // if all quotes have been viewed
    if (quotes.length === 0) {
    // empty the viewedQuotes array
        quotes = viewedQuotes.splice(0, viewedQuotes.length); 
    }
    // random index of array * quotes.length because index between 0 and 8, total 9 elements
    var random = Math.floor(Math.random() * quotes.length);
    // grab a random quote from the array quotes
    var splicedQuote = quotes.splice(random, 1)[0];
    // store the random quote into the viewedQuotes array
    viewedQuotes.push(splicedQuote);
    // output the random quote on html 
    document.getElementById("quoteTextDisplay").innerHTML = '"' + splicedQuote.quoteText + '&#x201d;';
    document.getElementById("quoteCharacterDisplay").innerHTML = splicedQuote.quoteCharacter;
}

// click to tweet 

function tweetQuote() {
    window.open("https://twitter.com/intent/tweet?text=" + document.getElementById("quoteTextDisplay").innerHTML 
    + " - " + document.getElementById("quoteCharacterDisplay").innerHTML);
}



/*
function newQuote() {
   document.getElementById("quoteTextDisplay").innerHTML = quotes[0].quoteText;
   document.getElementById("quoteCharacterDisplay").innerHTML = quotes[0].quoteCharacter;

}



/* only changes quoteText randomly, cannot match random quoteCharacter to the right quoteText
if in same function the random number will be the same?

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteTextDisplay").innerHTML = quotes[randomNumber].quoteText;
}
*/
/*

1. create an array of data
2. when click on the button, an element of the array is displayed
3. make sure the index number is random
4. if there is an element already displayed, then delete it and replace it with a new element of array
5. quoteCharacter needs to be from the same element as quoteText


*/