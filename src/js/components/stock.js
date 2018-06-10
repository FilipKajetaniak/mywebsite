const createStock = (element, lang) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const article = document.createElement('article');
    article.classList.add('project-article');
    article.classList.add('stock-article');
    container.appendChild(article);
    const image = document.createElement('div');
    image.classList.add('article-img');
    const description = document.createElement('div');
    description.classList.add('project-description');
    description.innerHTML = lang === 'en' ? `
        <h1>Boards stock &mdash;</h1>
        <p>Super simple app for keeping track of stored floorboards written with Vue.js.
        </p>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">Live</a>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>` :
        `<h1>Spis desek &mdash;</h1>
        <p>Prosta aplikacja do spisywania ilości desek napisana w Vue.js.
        </p>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">Live</a>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>`;
    const stack = document.createElement('div');
    stack.classList.add('stack');
    stack.innerHTML = `
    <h1>Stack &mdash;</h1>
    <ul>
      <li>Vue.js</li>
      <li>Firebase</li>
    </ul>`;
    const articleText = document.createElement('div');
    articleText.classList.add('article-text');
    const h1 = document.createElement('h1');
    h1.innerText = lang === 'en' ? 'About the project' : 'O projekcie';
    const p1 = document.createElement('p');
    p1.innerText = lang === 'en' ? "App build to keep track of stored boards. It sounds kinda random, I know. I've made this app for a small company I used to work for. We've been selling old, reclaimed floorboards and we kept track of our stock on paper. I thought it would be more convinient if we had a bit more interctive system. I built this simple, TODO-like app with Vue.js and Firebase as a database." :
    'Aplikacja przeznaczona do spisywania ilości desek w magazynie. Wiem, brzmi to dziwnie. Zrobiłem tą aplikację dla małej firmy w której kiedyś pracowałem. Sprzedawaliśmy stare deski a ich ilość spisywaliśmy na papierze. Pomyślałem, że byłoby wygodniej gdybyśmy mieli bardziej interaktywny system. Aplikacja jest napisana w Vue a dane przechowuje w Firebase.';
    article.appendChild(image);
    article.appendChild(description);
    article.appendChild(stack);
    article.appendChild(articleText);
    articleText.appendChild(h1);
    articleText.appendChild(p1);
    element.appendChild(container);
    element.appendChild(container);
};

export default createStock;
