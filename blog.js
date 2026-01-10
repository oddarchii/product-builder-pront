document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('blog-posts-container');

    const samplePosts = [
        {
            title: 'The Strangest Lotteries Around the World',
            date: 'October 26, 2024',
            author: 'LottoGen Team',
            excerpt: 'Did you know some lotteries offer prizes other than cash? From a lifetime supply of cheese to a private island, we explore some of the most unusual lottery prizes ever offered.'
        },
        {
            title: 'Can Math Really Help You Win the Lottery?',
            date: 'October 22, 2024',
            author: 'Dr. Statistica',
            excerpt: 'We dive into the probabilities and myths surrounding lottery numbers. Can you really predict the winning numbers? The answer might surprise you (but probably won\'t).'
        },
        {
            title: 'Famous Lottery Winner Stories: Where Are They Now?',
            date: 'October 18, 2024',
            author: 'LottoGen Team',
            excerpt: 'A look back at some of the biggest lottery winners in history and how their lives were changed forever—for better or for worse. A fascinating study of luck and fortune.'
        }
    ];

    if (postsContainer) {
        samplePosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('blog-post');

            postElement.innerHTML = `
                <h2 class="post-title">${post.title}</h2>
                <div class="post-meta">Published on ${post.date} by ${post.author}</div>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more-link">Read More &rarr;</a>
            `;

            postsContainer.appendChild(postElement);
        });
    }
});
