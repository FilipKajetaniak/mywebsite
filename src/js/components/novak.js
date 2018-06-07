const createNovak = (element) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const article = document.createElement('article');
    article.classList.add('novak-article');
    container.appendChild(article);
    article.innerHTML = `
    <article class="novak-article">
    <div class="article-img"></div>
    <div class="project-description">
      <h1>Novak contractors &mdash;</h1>
      <p>Renovation and slight redesign of Wordpress website.
      </p>
      <a href="http://www.novakcontractors.co.uk" target="_blank">www.novakcontractors.co.uk</a>
      <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>
    </div>
    <div class="stack">
      <h1>Stack &mdash;</h1>
      <ul>
        <li>Wordpress</li>
      </ul>
    </div>
    <div class="article-text">
    <h1>About the project</h1>
    <p>This was my first commercial project as a freelancer. I had to fix a bunch of bugs
    left by previous developer. I also added some new features and slightly changed up the design.
    The site is built on Wordpress which let me learn how Wordpress websites work. I also learned
    the file structure and how to make changes not only with CMS by also by directly modifying files. </p>
  </div>
  </article>
    `;
    element.appendChild(container);
};

export default createNovak;
