import render from './render';
import nav from './nav';
import createProjects from './components/work';
import createAbout from './components/about';
import createContact from './components/contact';
import createHome from './components/home';
import addListeners from './article';
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
    render(url);
    if (url === 'dziecimamy' || url === 'kajetaniak' || url === 'stock' || url === 'novak') {
        nav.setActive('work');
        nav.updateLine('work');
        return;
    }
    nav.setActive(url);
    nav.updateLine(url);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

export default router;
