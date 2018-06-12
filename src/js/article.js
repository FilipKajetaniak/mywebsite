const cover = document.getElementById('cover-img');
const slot = document.getElementById('slot');

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
            cover.classList.add(`cover-${element.slice(8)}`);
            slot.style.marginBottom = '1000px';
            zenscroll.to(parent, 300);
            parent.classList.add(`${element.slice(8)}-clicked`);
            parent.querySelector('.project-img').classList.add('clicked');
            setTimeout(() => { cover.style.display = 'block'; }, 300);
            setTimeout(() => { loadArticle(element); }, 500);
            setTimeout(() => {
                cover.style.display = 'none';
                slot.style.marginBottom = '0px';
            }, 800);
        });
    });
};

export default addListeners;
