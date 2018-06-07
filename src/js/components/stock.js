const createStock = (element) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const article = document.createElement('article');
    article.classList.add('stock-article');
    container.appendChild(article);
    article.innerHTML = `
    <article class="stock-article">
    <div class="article-img"></div>
    <div class="project-description">
      <h1>Boards stock &mdash;</h1>
      <p>Super simple app for keeping track of stored floorboards written with Vue.js.
      </p>
      <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">Live</a>
      <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>
    </div>
    <div class="stack">
      <h1>Stack &mdash;</h1>
      <ul>
        <li>Vue.js</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div class="article-text">
    <h1>About the project</h1>
    <p>App build to keep track of stored boards. It sounds kinda random, I know. I've made this app
    for a small company I used to work for. We've been selling old, reclaimed floorboards and we kept track of
    our stock on paper. I thought it would be more convinient if we had a bit more interctive system. I built
    this simple, TODO-like app with Vue.js and Firebase as a database. </p>
  </div>
  </article>
    `;
    element.appendChild(container);
};

export default createStock;
