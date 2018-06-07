import render from './render';
import nav from './nav';

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
