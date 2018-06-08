import render from './render';
import nav from './nav';
import createProjects from './components/work';
import createAbout from './components/about';
import createContact from './components/contact';
import createHome from './components/home';
import createDziecimamy from './components/dziecimamy';
import createPortfolio from './components/portfolio';
import createStock from './components/stock';
import createNovak from './components/novak';

const routes = [
    {
        hash: '',
        hashPl: '',
        component: createHome,
        type: 'nav',
    },
    {
        hash: 'about',
        hashPl: 'omnie',
        component: createAbout,
        type: 'nav',
    },
    {
        hash: 'work',
        hashPl: 'projekty',
        component: createProjects,
        type: 'nav',
    },
    {
        hash: 'contact',
        hashPl: 'kontakt',
        component: createContact,
        type: 'nav',
    },
    {
        hash: 'dziecimamy',
        component: createDziecimamy,
        type: 'article',
    },
    {
        hash: 'kajetaniak',
        component: createPortfolio,
        type: 'article',
    },
    {
        hash: 'stock',
        component: createStock,
        type: 'article',
    },
    {
        hash: 'novak',
        component: createNovak,
        type: 'article',
    },
];

const router = () => {
    const url = location.hash.slice(1);
    const selectedRoute = routes.find(route => route.hash === url || route.hashPl === url);
    const lang = routes.find(route => route.hash === url) ? 'en' : 'pl';
    render(selectedRoute.component, lang, selectedRoute.type);
    if (selectedRoute.type === 'article') {
        nav.setActive('work');
        nav.updateLine('work');
        return;
    }
    if (url === '') {
        nav.hideNav();
    } else {
        nav.showNav();
    }
    nav.setActive(url);
    nav.updateLine(url);
};

const updateHash = (active) => {
    const currentRoute = routes.find(route => route.hash === location.hash.slice(1)
    || route.hashPl === location.hash.slice(1));
    if (active === 'en') {
        window.location.hash = currentRoute.hash;
        return;
    }
    window.location.hash = currentRoute.hashPl;
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

export default updateHash;
