
function setQuote() {
    const quoteElement = document.getElementById('quote');
    randomint = Math.floor(Math.random() * 100) + 1;
    console.log(randomint)

    fetch(`https://dummyjson.com/quotes/${randomint}`)
        .then(response => response.json())
        .then(data => {
            quoteElement.innerHTML = ''; // Clear previous quote
            console.log('Quote data:', data);
            quoteElement.innerHTML += `
            <div>
                <q>${data.quote}</q>
                <p class="author">- ${data.author}</p>
            </div>`
        })

}

window.onload = function() {
    setQuote(); // Set initial quote
}

setInterval(setQuote, 10000);