const slot = document.getElementById('slot');

const renderArticle = (renderComponent) => {
    slot.style.opacity = '0';
    setTimeout(() => {
        if (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        window.scrollTo(0, 0);
        renderComponent(slot);
    }, 100);
    setTimeout(() => {
        slot.style.opacity = '1';
        slot.style.transform = 'translateY(0px)';
    }, 200);
};

const render = (renderComponent, lang, type) => {
    if (type === 'article') {
        renderArticle(renderComponent);
        return;
    }
    slot.style.opacity = '0';
    slot.style.transform = 'translateX(-25px)';
    setTimeout(() => {
        if (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
        window.scrollTo(0, 0);
        renderComponent(slot, lang);
        slot.style.transform = 'translateX(25px)';
    }, 100);
    setTimeout(() => {
        slot.style.opacity = '1';
        slot.style.transform = 'translateX(0)';
    }, 200);
};

export default render;
