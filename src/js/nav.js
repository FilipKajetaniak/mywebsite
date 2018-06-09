import updateHash from './router';

const about = {
    element: document.getElementById('about'),
    left: '0px',
    width: '54px',
    hash: 'about',
};
const work = {
    element: document.getElementById('work'),
    left: '84px',
    width: '47px',
    hash: 'work',
};
const contact = {
    element: document.getElementById('contact'),
    left: '161px',
    width: '72px',
    hash: 'contact',
};

const line = document.getElementById('underline');
const lang = document.getElementById('lang');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItems = Array.from(document.getElementsByClassName('menu-item'));
const navBar = document.querySelector('.navbar');

let active = location.hash.slice(1);
let language = 'en';

const hideNav = () => {
    navBar.style.transform = 'translateX(25px)';
    navBar.style.opacity = '0';
    navBar.style.visibility = 'hidden';
};
const showNav = () => {
    navBar.style.visibility = 'visible';
    navBar.style.opacity = '1';
    navBar.style.transform = 'translateX(0px)';
};

const menuFadeOut = () => {
    menuItems.forEach((item) => {
        item.style.opacity = '0';
    });
};

const menuFadeIn = () => {
    menuItems.forEach((item) => {
        item.style.opacity = '1';
    });
};

const hideMobileMenu = () => {
    hamburger.classList.remove('open-menu');
    setTimeout(() => {
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
        mobileMenu.classList.remove('menu-open');
    }, 150);
};

const openMobileMenu = () => {
    if (hamburger.classList.contains('open-menu')) {
        hideMobileMenu();
    } else {
        hamburger.classList.add('open-menu');
        setTimeout(() => {
            hamburger.classList.remove('fa-bars');
            hamburger.classList.add('fa-times');
            mobileMenu.classList.add('menu-open');
        }, 150);
    }
};

const changeStyles = (element) => {
    if (element === 'about') {
        line.style.left = about.left;
        line.style.width = about.width;
    } else if (element === 'work') {
        line.style.left = work.left;
        line.style.width = work.width;
    } else if (element === 'contact') {
        line.style.left = contact.left;
        line.style.width = contact.width;
    }
};

const resetLine = () => {
    if (!active) {
        line.style.left = '0px';
        line.style.width = '0px';
    } else if (active === 'about' || active === 'omnie') {
        line.style.left = about.left;
        line.style.width = about.width;
    } else if (active === 'work' || active === 'projekty') {
        line.style.left = work.left;
        line.style.width = work.width;
    } else if (active === 'contact' || active === 'kontakt') {
        line.style.left = contact.left;
        line.style.width = contact.width;
    }
};

const switchLanguage = () => {
    if (lang.className === 'en-active') {
        language = 'pl';
        lang.classList.remove('en-active');
        lang.classList.add('pl-active');
        menuFadeOut();
        setTimeout(() => {
            about.element.innerText = 'O mnie';
            work.element.innerText = 'Projekty';
            contact.element.innerText = 'Kontakt';
            menuFadeIn();
        }, 200);
        about.left = '0px';
        about.width = '64px';
        about.hash = 'omnie';
        work.left = '94px';
        work.width = '74px';
        work.hash = 'projekty';
        contact.left = '199px';
        contact.width = '74px';
        contact.hash = 'kontakt';
        resetLine();
    } else {
        lang.classList.remove('pl-active');
        lang.classList.add('en-active');
        language = 'en';
        menuFadeOut();
        setTimeout(() => {
            about.element.innerText = 'About';
            work.element.innerText = 'Work';
            contact.element.innerText = 'Contact';
            menuFadeIn();
        }, 200);
        about.left = '0px';
        about.width = '54px';
        about.hash = 'about';
        work.left = '84px';
        work.width = '47px';
        work.hash = 'work';
        contact.left = '161px';
        contact.width = '72px';
        contact.hash = 'contact';
        resetLine();
    }
    updateHash(language);
};
const moveLine = (e) => {
    changeStyles(e.target.id);
};

const updateLine = (item) => {
    changeStyles(item);
};

resetLine();
about.element.addEventListener('mouseover', (e) => { moveLine(e); });
about.element.addEventListener('mouseleave', resetLine);
work.element.addEventListener('mouseover', (e) => { moveLine(e); });
work.element.addEventListener('mouseleave', resetLine);
contact.element.addEventListener('mouseover', (e) => { moveLine(e); });
contact.element.addEventListener('mouseleave', resetLine);

lang.addEventListener('click', switchLanguage);

about.element.addEventListener('click', () => {
    active = 'about';
    window.location.hash = about.hash;
});
work.element.addEventListener('click', () => {
    active = 'work';
    window.location.hash = work.hash;
});

contact.element.addEventListener('click', () => {
    active = 'contact';
    window.location.hash = contact.hash;
});

hamburger.addEventListener('click', openMobileMenu);

mobileMenu.getElementsByTagName('a')[0].addEventListener('click', () => {
    hideMobileMenu();
    window.location.hash = about.hash;
});
mobileMenu.getElementsByTagName('a')[1].addEventListener('click', () => {
    hideMobileMenu();
    window.location.hash = work.hash;
});
mobileMenu.getElementsByTagName('a')[2].addEventListener('click', () => {
    hideMobileMenu();
    window.location.hash = contact.hash;
});

const setActive = (item) => {
    active = item;
};

const getLang = () => language;

const nav = {
    setActive,
    updateLine,
    getLang,
    hideNav,
    showNav,
};

export default nav;
