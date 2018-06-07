import createProjects from './components/work';
import createAbout from './components/about';
import createContact from './components/contact';
import createHome from './components/home';
import addListeners from './article';
import createDziecimamy from './components/dziecimamy';
import createPortfolio from './components/portfolio';
import createStock from './components/stock';
import createNovak from './components/novak';

const slot = document.getElementById('slot');

const renderArticle = (component) => {
    slot.style.opacity = '0';
    setTimeout(() => {
        if (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        window.scrollTo(0, 0);
        if (component === 'dziecimamy') {
            createDziecimamy(slot);
        } else if (component === 'kajetaniak') {
            createPortfolio(slot);
        } else if (component === 'stock') {
            createStock(slot);
        } else if (component === 'novak') {
            createNovak(slot);
        }
    }, 100);
    setTimeout(() => {
        slot.style.opacity = '1';
        slot.style.transform = 'translateY(0px)';
    }, 200);
};

const render = (component) => {
    if (component === 'dziecimamy' || component === 'novak'
    || component === 'stock' || component === 'kajetaniak') {
        renderArticle(component);
        return;
    }
    slot.style.opacity = '0';
    slot.style.transform = 'translateX(-25px)';
    setTimeout(() => {
        if (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        window.scrollTo(0, 0);
        if (component === 'work') {
            createProjects(slot);
            addListeners();
        } else if (component === 'about') {
            createAbout(slot, 'en');
        } else if (component === 'contact') {
            createContact(slot, 'en');
        } else if (component === '') {
            createHome(slot);
        } else if (component === 'projekty') {
            createProjects(slot, 'pl');
        } else if (component === 'omnie') {
            createAbout(slot, 'pl');
        } else if (component === 'kontakt') {
            createContact(slot, 'pl');
        }
        slot.style.transform = 'translateX(25px)';
    }, 100);
    setTimeout(() => {
        slot.style.opacity = '1';
        slot.style.transform = 'translateX(0)';
    }, 200);
};

export default render;
