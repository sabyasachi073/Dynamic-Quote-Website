AOS.init();

const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQ = document.getElementById('newQ');
const tweetMe = document.getElementById('tweetMe');

let realData = "";
let quotesData = "";

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ~${quotesData.author}`;
    window.open(tweetPost);
}
const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * realData.length); // Math.random() returns a real number in between 0 and 1
    quotesData = realData[rnum];
    quotes.innerHTML = `${quotesData.text}`;

    if (quotesData.author == null) {
        author.innerHTML = "Anonymous";
    }
    else {
        author.innerHTML = `${quotesData.author}`;
    }
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) {
        console.log(error);
    }
};

newQ.addEventListener('click', getNewQuotes);
tweetMe.addEventListener('click', tweetNow);
getQuotes()