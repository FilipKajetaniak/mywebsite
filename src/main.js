import './js/nav';
import './js/router';
import './js/article';

require('./sass/main.scss');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByTagName('footer')[0].classList.remove('fade');
    setTimeout(() => { document.body.style.opacity = '1'; }, 450);
});
