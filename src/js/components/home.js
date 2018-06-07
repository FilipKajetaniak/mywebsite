const createHome = (element) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const header = document.createElement('header');
    header.classList.add('heading');
    container.appendChild(header);
    header.innerHTML = `
        <div class="resizable">
        <h1 class="hello">Hello, hello &mdash;</h1>
        <h1 class="name">I'm Filip</h1>
        <p>I'm a 22 years old self taught front-end web dev.
        I design and code friendly user interfaces with
        <b>JavaScript</b> and <b>Vue.js</b>.</p>
        <button id="cta">Get to know me</button>
        </div>`;
    element.appendChild(container);
    const button = document.getElementById('cta');
    if (button) {
        button.addEventListener('click', () => {
            setTimeout(() => { window.location.hash = 'about'; }, 100);
        });
    }
};

export default createHome;
