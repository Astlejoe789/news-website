const apiKey = "YOUR_NEWS_API_KEY"; // Get an API key from https://newsapi.org/
const newsContainer = document.getElementById("news-container");

async function fetchNews() {
    try {
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        let data = await response.json();

        newsContainer.innerHTML = ""; // Clear loading text

        data.articles.forEach(article => {
            let newsItem = document.createElement("div");
            newsItem.classList.add("news-item");

            newsItem.innerHTML = `
                <h2 class="news-title">${article.title}</h2>
                <p class="news-description">${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;

            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        newsContainer.innerHTML = "<p>Failed to load news.</p>";
    }
}

fetchNews();
