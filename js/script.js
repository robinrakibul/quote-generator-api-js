const   quoteText = document.getElementById('quote-text'),
        quoteTags = document.getElementById('quote-tags'),
        quoteAuthor = document.getElementById('quote-author'),
        generateQuoteBtn = document.getElementById('generate-quote-btn');

// fetching API function
function randomQuote(){
    fetch('https://api.quotable.io/random')
    .then(res=>res.json())
    .then(data=> {
        quoteText.innerText = data.content;
        quoteTags.innerText = data.tags;
        quoteAuthor.innerText = `- ${data.author}`;
    });
}
randomQuote();
// Gen New Quote Button
generateQuoteBtn.addEventListener('click',function(){
    randomQuote();
})

