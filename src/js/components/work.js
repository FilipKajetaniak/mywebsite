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

    dziecimamy.innerHTML = `
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
        <div class="project-img"></div>`;
    kajetaniak.innerHTML = `
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
        <div class="project-img"></div>`;
    stock.innerHTML = `
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
        <div class="project-img"></div>
    `;
    novak.innerHTML = `
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
        <div class="project-img"></div>`;
    addListeners();
};
export default createProjects;
