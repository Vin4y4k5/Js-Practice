
// Chatgpt

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    if (searchTerm.length > 0) {
        // Simulating asynchronous search (replace with actual search logic)
        setTimeout(() => {
            const results = simulateSearch(searchTerm);
            displayResults(results);
        }, 300); // Adjust delay as needed
    } else {
        searchResults.innerHTML = ''; // Clear results if search term is empty
    }
});

function simulateSearch(searchTerm) {
    // Simulated search function (replace with actual search logic)
    const mockData = [
        "Apple",
        "Banana",
        "Orange",
        "Pineapple",
        "Grapes",
        "Watermelon",
        "Mango",
        "Peach",
        "Cherry",
        "Kiwi"
    ];
    return mockData.filter(item => item.toLowerCase().includes(searchTerm));
}

function displayResults(results) {
    if (results.length > 0) {
        const html = results.map(result => `<div class="result">${result}</div>`).join('');
        searchResults.innerHTML = html;
    } else {
        searchResults.innerHTML = '<div>No results found</div>';
    }
}

