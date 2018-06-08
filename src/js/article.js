const cover = document.getElementById('cover-img');

const loadArticle = (project) => {
    window.location.hash = `${project}`;
};

const addListeners = () => {
    const projects = Array.from(document.getElementsByClassName('project'));
    projects.forEach((project) => {
        project.getElementsByTagName('h1')[0].addEventListener('click', (e) => {
            const element = e.target.className;
            const parent = e.target.parentElement.parentElement;
            cover.className = '';
            cover.classList.add(`cover-${element}`);
            zenscroll.to(parent, 400);
            parent.classList.add(`${element}-clicked`);
            parent.querySelector('.project-img').classList.add('clicked');
            setTimeout(() => { cover.style.display = 'block'; }, 400);
            setTimeout(() => { loadArticle(element); }, 600);
            setTimeout(() => { cover.style.display = 'none'; }, 900);
        });
    });
};

export default addListeners;