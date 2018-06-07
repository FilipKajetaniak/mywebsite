const createPortfolio = (element) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const article = document.createElement('article');
    article.classList.add('portfolio-article');
    container.appendChild(article);
    article.innerHTML = `
    <article class="portfolio-article">
    <div class="article-img"></div>
    <div class="project-description">
      <h1>Portfolio &mdash;</h1>
      <p>Super simple SPA website with hash based router written  with vanilla JS.
      </p>
      <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>
    </div>
    <div class="stack">
      <h1>Stack &mdash;</h1>
      <ul>
        <li>Sass</li>
        <li>JavaScript</li>
      </ul>
    </div>
    <div class="article-text">
    <h1>About the project</h1>
    <p>This is my most recent project so far. I built this website to show off my work and tell
    something about myself. I decided to go with super simple and modest design. The UI is simple,
    fast, and lightweight. I used pure JS and wrote everything (except a scrolling function) from scratch.</p>
  </div>
  </article>
    `;
    element.appendChild(container);
};

export default createPortfolio;
