const createNovak = (element, lang) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const article = document.createElement('article');
    article.classList.add('project-article');
    article.classList.add('novak-article');
    container.appendChild(article);
    const image = document.createElement('div');
    image.classList.add('article-img');
    const description = document.createElement('div');
    description.classList.add('project-description');
    description.innerHTML = lang === 'en' ? `
        <h1>Novak contractors &mdash;</h1>
        <p>Renovation and slight redesign of Wordpress website.
        </p>
        <a href="http://www.novakcontractors.co.uk" target="_blank">novakcontractors.co.uk</a>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>` :
        `<h1>Novak contractors &mdash;</h1>
        <p>Naprawa i redesign strony zbudowanej na Wordpressie.
        </p>
        <a href="http://www.novakcontractors.co.uk" target="_blank">novakcontractors.co.uk</a>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>`;
    const stack = document.createElement('div');
    stack.classList.add('stack');
    stack.innerHTML = `
    <h1>Stack &mdash;</h1>
      <ul>
        <li>Wordpress</li>
      </ul>`;
    const articleText = document.createElement('div');
    articleText.classList.add('article-text');
    const h1 = document.createElement('h1');
    h1.innerText = lang === 'en' ? 'About the project' : 'O projekcie';
    const p1 = document.createElement('p');
    p1.innerText = lang === 'en' ? 'This was my first commercial project as a freelancer. I had to fix a bunch of bugs left by previous developer. I also added some new features and slightly changed up the design. The site is built on Wordpress which let me learn how Wordpress websites work. I also learned the file structure and how to make changes not only with CMS by also by directly modifying files.' :
        'Mój pierwszy komercyjny projekt w ramach freelancingu. Moim zadaniem była naprawa wielu błędów zostawionych przez poprzedniego developera. Oprócz tego dodałem kilka nowych funkcji i poprawiłem design. Strona jest oparta na Wordpressie. Nie miałem żadnego doświadczenia z tym CMSem dzięki czemu nauczyłem się jak działają strony oparte na WP, jak wygląda struktura ich plików i jak modyfikować kod.';
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

export default createNovak;
