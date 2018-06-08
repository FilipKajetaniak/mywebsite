import addListeners from '../article';

const createProjects = (element, lang) => {
    const container = document.createElement('div');
    container.classList.add('content');

    element.appendChild(container);

    const section = document.createElement('section');
    section.classList.add('projects');
    container.appendChild(section);

    const dziecimamy = document.createElement('div');
    dziecimamy.classList.add('project');
    dziecimamy.id = 'dziecimamy';
    section.appendChild(dziecimamy);

    const kajetaniak = document.createElement('div');
    kajetaniak.classList.add('project');
    kajetaniak.id = 'kajetaniak';
    section.appendChild(kajetaniak);

    const stock = document.createElement('div');
    stock.classList.add('project');
    stock.id = 'stock';
    section.appendChild(stock);

    const novak = document.createElement('div');
    novak.classList.add('project');
    novak.id = 'novak';
    section.appendChild(novak);

    dziecimamy.innerHTML = lang === 'en' ? `
        <div class="project-text">
        <h1 class="dziecimamy"><i class="fas fa-arrow-right"></i>Dziecimamy</h1>
        <h3>dziecimamy.com</h3>
        <p>
            SEO friendly single page<br>
            application blog written<br>
            with Vue.js.
        </p>
        </div>
        <div class="project-icons">
        <i class="fab fa-vuejs"></i><div class="label">Vue.js</div>
        </div>
        <div class="project-img"></div>` : `
        <div class="project-text">
        <h1 class="dziecimamy"><i class="fas fa-arrow-right"></i>Dziecimamy</h1>
        <h3>dziecimamy.com</h3>
        <p>
            Przyjazny dla SEO single<br>
            page application blog<br>
            napisany w Vue.js.
        </p>
        </div>
        <div class="project-icons">
        <i class="fab fa-vuejs"></i><div class="label">Vue.js</div>
        </div>
        <div class="project-img"></div>`;
    kajetaniak.innerHTML = lang === 'en' ? `
        <div class="project-text">
        <h1 class="kajetaniak"><i class="fas fa-arrow-right"></i>My portfolio</h1>
        <h3>kajetaniak.pl</h3>
        <p>
            My portfolio website<br>
            written with vanilla JS.
        </p>
        </div>
        <div class="project-icons">
        <i class="fab fa-js"></i><div class="label">JavaScript</div>
        </div>
        <div class="project-img"></div>` : `
        <div class="project-text">
        <h1 class="kajetaniak"><i class="fas fa-arrow-right"></i>Moje portfolio</h1>
        <h3>kajetaniak.pl</h3>
        <p>
            Moje portfolio<br>
            napisane w<br>
            czystym JS.
        </p>
        </div>
        <div class="project-icons">
        <i class="fab fa-js"></i><div class="label">JavaScript</div>
        </div>
        <div class="project-img"></div>`;
    stock.innerHTML = lang === 'en' ? `
        <div class="project-text">
        <h1 class="stock"><i class="fas fa-arrow-right"></i>Boards stock</h1>
        <h3>kajetaniak.pl/boardstock</h3>
        <p>
        Simple Vue.js app<br>
        for keeping track of<br>
        stored boards.
        </p>
        </div>
        <div class="project-icons">
        <i class="fab fa-vuejs"></i><div class="label">Vue.js</div>
        </div>
        <div class="project-img"></div>` : `
        <div class="project-text">
        <h1 class="stock"><i class="fas fa-arrow-right"></i>Spis desek</h1>
        <h3>kajetaniak.pl/boardstock</h3>
        <p>
        Prosta aplikacja w Vue<br>
        do spisywania ilości<br>
        desek w magazynie.
        </p>
        </div>
        <div class="project-icons">
        <i class="fab fa-vuejs"></i><div class="label">Vue.js</div>
        </div>
        <div class="project-img"></div>`;
    novak.innerHTML = lang === 'en' ? `
        <div class="project-text">
        <h1 class="novak"><i class="fas fa-arrow-right"></i>Novak contractors</h1>
        <h3>novakcontractors.co.uk</h3>
        <p>
        Wordpress website<br>
        renovation.
        </p>
        </div>
        <div class="project-icons">
        <i class="fab fa-wordpress-simple"></i><div class="label">Wordpress</div>
        </div>
        <div class="project-img"></div>` : `
        <div class="project-text">
        <h1 class="novak"><i class="fas fa-arrow-right"></i>Novak contractors</h1>
        <h3>novakcontractors.co.uk</h3>
        <p>
        Naprawa strony<br>
        postawionej na<br>
        Wordpressie.
        </p>
        </div>
        <div class="project-icons">
        <i class="fab fa-wordpress-simple"></i><div class="label">Wordpress</div>
        </div>
        <div class="project-img"></div>`;
    addListeners();
};
export default createProjects;
