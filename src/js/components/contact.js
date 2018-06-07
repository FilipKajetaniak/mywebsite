const createContact = (element, lang) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const section = document.createElement('section');
    section.classList.add('contact');
    container.appendChild(section);
    section.innerHTML = lang === 'en' ? `
        <h1>Feel free to say hello 👋</h1>
        <h2>Many thanks for stopping by! I hope you enjoyed my work. <br>
        Hit me up, I'd be happy to help you out!
        </h2>
        <a href="mailto:hello@kajetaniak.com">filip@kajetaniak.com</a>
        <h2>Or you can find me here:</h2>
        <div class="social">
        <a href="https://m.me/filip.kajetaniak"><i class="fab fa-facebook-messenger"></i></a>
        <a href="https://github.com/FilipKajetaniak"><i class="fab fa-github"></i></a>
        <a href="https://codepen.io/FilipKajetaniak/"><i class="fab fa-codepen"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>` : `
        <h1>Przywitaj się 👋</h1>
        <h2>Dzięki, że zajrzałeś! Mam nadzieję, że spodobały Ci się moje prace. <br>
        Pisz śmiało, bardzo chętnie Ci pomogę!
        </h2>
        <a href="mailto:hello@kajetaniak.com">filip@kajetaniak.com</a>
        <h2>Albo możesz mnie znaleźć tutaj:</h2>
        <div class="social">
        <a href="https://m.me/filip.kajetaniak"><i class="fab fa-facebook-messenger"></i></a>
        <a href="https://github.com/FilipKajetaniak"><i class="fab fa-github"></i></a>
        <a href="https://codepen.io/FilipKajetaniak/"><i class="fab fa-codepen"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>`;

    element.appendChild(container);
};

export default createContact;
