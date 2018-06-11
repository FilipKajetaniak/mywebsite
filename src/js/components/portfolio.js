const createPortfolio = (element, lang) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const article = document.createElement('article');
    article.classList.add('project-article');
    article.classList.add('portfolio-article');
    container.appendChild(article);
    const image = document.createElement('div');
    image.classList.add('article-img');
    const description = document.createElement('div');
    description.classList.add('project-description');
    description.innerHTML = lang === 'en' ? `
        <h1>Portfolio &mdash;</h1>
        <p>Super simple SPA website with hash based router written  with vanilla JS.
        </p>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>` :
        `<h1>Portfolio &mdash;</h1>
        <p>Prosta strona SPA z routerem opartym o # napisana w czystym JS.
        </p>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>`;
    const stack = document.createElement('div');
    stack.classList.add('stack');
    stack.innerHTML = `
      <h1>Stack &mdash;</h1>
      <ul>
        <li>Sass</li>
        <li>JavaScript</li>
      </ul>`;
    const articleText = document.createElement('div');
    articleText.classList.add('article-text');
    const h1 = document.createElement('h1');
    h1.innerText = lang === 'en' ? 'About the project' : 'O projekcie';
    const p1 = document.createElement('p');
    p1.innerText = lang === 'en' ? 'This is my most recent project so far. I built this website to show off my work and tell something about myself. I decided to go with super simple and modest design. The UI is simple, fast, and lightweight. I used pure JS and wrote everything (except the scrolling function) from scratch.' :
        'To jest mój najnowszy projekt. Napisałem tą stronę żeby pokazać swoje prace i powiedzieć coś o sobie. Zdecydowałem się na bardzo prosty i skromny design z lekkim i szybkim UI. Wszystko (oprócz funkcji do scrollowania) napisałem od zera w czystym JS.';
    article.appendChild(image);
    article.appendChild(description);
    article.appendChild(stack);
    article.appendChild(articleText);
    articleText.appendChild(h1);
    articleText.appendChild(p1);
    const footer = document.createElement('div');
    footer.classList.add('mobile-footer');
    footer.innerHTML = lang === 'en' ? `<a onclick="location.hash='#work'"><i class="fas fa-arrow-left"></i> Work</a>` : `<a onclick="location.hash='#projekty'"><i class="fas fa-arrow-left"></i> Projekty</a>`;
    container.appendChild(footer);
    element.appendChild(container);
};

export default createPortfolio;
