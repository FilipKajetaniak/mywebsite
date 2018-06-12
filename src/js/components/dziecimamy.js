const createDziecimamy = (element, lang) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const article = document.createElement('article');
    article.classList.add('project-article');
    article.classList.add('dziecimamy-article');
    container.appendChild(article);
    const image = document.createElement('div');
    image.classList.add('article-img');
    const description = document.createElement('div');
    description.classList.add('project-description');
    description.innerHTML = lang === 'en' ? `
        <h1>Dziecimamy &mdash;</h1>
        <p>Single page application blog with custom CMS made from scratch. It loads and renders data on server
          so search engines can analyze the content.
        </p>
        <a href="https://www.dziecimamy.com" target="_blank">www.dziecimamy.com</a>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>` :
        `<h1>Dziecimamy &mdash;</h1>
        <p>Napisany od zera Single Page Application blog z własnym CMSem. Treści są renderowane po 
        stronie serwera dzięki czemu blog jest przyjazny dla SEO.
        </p>
        <a href="https://www.dziecimamy.com" target="_blank">www.dziecimamy.com</a>
        <a href="https://github.com/FilipKajetaniak/dziecimamy" target="_blank">GitHub</a>`;
    const stack = document.createElement('div');
    stack.classList.add('stack');
    stack.innerHTML = `
        <h1>Stack &mdash;</h1>
        <ul>
          <li>Vue.js & Nuxt.js</li>
          <li>GraphQL & Graphcool</li>
          <li>Node.js & Express.js</li>
        </ul>`;
    const table = document.createElement('div');
    table.classList.add('table-of-content');
    table.appendChild(document.createElement('h1'));
    table.appendChild(document.createElement('ol'));
    table.querySelector('h1').innerText = lang === 'en' ? 'Table of content' : 'Spis tresci';
    table.querySelector('ol').innerHTML = lang === 'en' ? `
        <li><span onClick="zenscroll.to(document.getElementById('features'), 300)">App features</span></li>
        <li><span onClick="zenscroll.to(document.getElementById('technologies'), 300)">Used technologies</span></li>
        <li><span onClick="zenscroll.to(document.getElementById('problems'), 300)">Problems I faced</span></li>
        <li><span onClick="zenscroll.to(document.getElementById('mistakes'), 300)">What I did wrong</span></li>
        <li><span onClick="zenscroll.to(document.getElementById('changes'), 300)">Upcoming changes</span></li>` :
        `<li><span onClick="zenscroll.to(document.getElementById('features'), 300)">Funkcje</span></li>
        <li><span onClick="zenscroll.to(document.getElementById('technologies'), 300)">Użyte technologie</span></li>
        <li><span onClick="zenscroll.to(document.getElementById('problems'), 300)">Co sprawialo najwieksze problemy?</span></li>
        <li><span onClick="zenscroll.to(document.getElementById('mistakes'), 300)">Co zrobilem zle?</span></li>
        <li><span onClick="zenscroll.to(document.getElementById('changes'), 300)">Co dalej?</span></li>`;
    const articleText = document.createElement('div');
    articleText.classList.add('article-text');

    const h1 = document.createElement('h1');
    h1.id = 'features';
    h1.innerText = lang === 'en' ? 'Features' : 'Funkcje';
    const p1 = document.createElement('p');
    p1.innerHTML = lang === 'en' ? `
        I believe this app is super cool and let my tell you why.</p>
        <ul>
        <li><b>It's a Single Page App</b> - the UI is snappy and you don't see page reloads.</li>
        <li><b>It's SEO friendly</b> - web crawlers can see pages content thanks to SSR</li>
        <li><b>It has a simple custom CMS</b> - you can write new posts, add new categories and manage content</li>
        <li><b>Admin panel is secured</b> - I implemented Json Web Token authorization</li>
        <li><b>It's responsive and cross browser compatible</b></li>
        <li><b>It has custom illustrations</b></li>
        </ul>
        <p>
        But most importantly, it's a legit app. It's not just a simple training project.
        It's deployed on a Node.js server, it has all the features a proper blog should have like
        SSL certificate, comments section, newsletter form, page sharing e.t.c. ` : `
        Jestem super dumny z tego projektu z kilku powodów.</p>
        <ul>
        <li><b>To jest Single Page App</b> - UI jest super szybkie i nie widać ekranu ładowania podczas poruszania się po stronie.</li>
        <li><b>Jest przyjazne dla SEO</b> - web crawlers widzą treść strony dzięki zastosowaniu SSR</li>
        <li><b>Własny CMS</b> - prosty panel admina umożliwia dodawanie, edytowanie i usuwanie postów, kategorii i treści na stronie.</li>
        <li><b>Bezpieczne logowanie</b> - Dostęp do panelu admina jest zabezpieczony Json Web Tokenem</li>
        <li><b>Strona jest responsywna i działa na wszystkich przeglądarkach</b></li>
        <li><b>Ma własne ilustracje</b></li>
        </ul>
        <p>
        Ale najważniejsze jest to, że jest to pełnoprawna aplikacja a nie tylko zwykły projekt dla treningu. 
        Strona działa na serwerze Node.js i posiada wszystko to co szanujący się blog powinien mieć, sekcję komentarzy,
        formularze newslettera, certyfikat SSL itp. 
        `;

    const h2 = document.createElement('h1');
    h2.id = 'technologies';
    h2.innerText = lang === 'en' ? 'Technologies' : 'Technologie';
    const p2 = document.createElement('p');
    p2.innerHTML = lang === 'en' ? `
        Technologies used for this project are quite unusuall. You don't see blogs with this stack everyday.
        I used Vue.js for snappy and dynamic user interface. I also added Nuxt.js, which is an additional
        library / framework for server side rendering in Vue. Regarding back-end, I used GraphQL for fetching
        data from API and Graphcool as a database. GraphQL is essentially a better alternative to REST. It's
        a super new technology developed by Facebook team for more efficient API queries and mutations. Graphcool
        is a service that lets you set up a GraphQL database in a cloud server. To keep everything together and to be
        to able to render html on server I used Node.js. <br>
        Were these technologies the best choice for this kind of project? Not really. Using a Wordpress or Jekyll
        certainly would be a much easier solution. Despite some painful drawbacks I'm glad I've finished this
        project with this setup. I had to face tons of different problems which made me learn incomparably more
        than if I used a CMS.` : `
        Technologie użyte w tym projekcie są raczej nietypowe. Ciężko znaleźć drugi blog z takim stackiem. Front-end
        aplikacji napisałem w Vue dla dynamicznego i szybkiego interfejsu. Do tego dodałem Nuxt.js - czyli framework / 
        bibliotekę do Vue która umożliwia renderowanie treści po stronie serwera. Jeżeli chodzi o back-end, użyłem
        GraphQL do komunikacji z API oraz Graphcool jako bazy danych. GraphQL to w skrócie lepsza alternatywa dla RESTa.
        To jest super nowa technologia stworzona przez zespół Facebooka dla bardziej wydajnych zapytań API. Graphcool natomiast
        to usługa która udostępnia serwer i bazę danych obsługujące GraphQL w chmurze. To wszystko jest uruchamiane z serwera
        Node.js. <br>
        Czy te technologie były najlepszym wyborem dla takiego projektu? Raczej nie. Użycie Wordpressa albo Jekylla
        byłoby o wiele łatwiejszym rozwiązaniem. Jednak pomimo wielu trudności cieszę się, że skończyłem projekt z tym stackiem.
        Musiałem stawić czoła wielu trudnym problemom dzięki czemu nauczyłem się o wiele więcej niż gdybym użył jakiegoś CMSa.
        `;

    const h3 = document.createElement('h1');
    h3.id = 'problems';
    h3.innerText = lang === 'en' ? 'Problems I had to overcome when developing this app' : 'Przeszkody na jakie natknalem sie piszac ta aplikacje';
    const p3 = document.createElement('p');
    p3.innerHTML = lang === 'en' ? `
        I wasn't very experienced with Vue when I started building this project. At that point I had watched
        only one online course about Vue and finished one simple project (<a href="https://kajetaniak.com/#project#stock">This one</a>).
        I wasn't aware of downsides of single page apps. I didn't know that if your content is being asynchronously
        loaded and then rendered with JavaScript, it's pretty much invisible for Google's web crawlers. So I was 
        pretty depressed when I stumbled upon some JavaScript conference where they mentioned this problem with SPA's.
        After a whole day of crying in a fetal position I started reading about prerendering and SSR. That's how I discovered
        and eventually migrated the code to Nuxt. <br>
        Implementing GraphQL was also a big hassle for me. Mostly because there isn't much info about that on the internet. 
        There are literally 0 articles about implementing GraphQL into Nuxt in Polish. There are just few in English but 
        these articles cover only basics. I was considering switching to Firebase (which I was a bit more experienced with)
        but I decided not to. Firebase doesn't provide the best solutions for advanced queries, authorization and data relationships. I eventually
        had to learn everything on my own by reading their enigmatic docs and other people github repos.` : `
        Kiedy zaczynałem pisać ten projekt nie miałem za dużo doświadczenia z Vue. Skończyłem wtedy tylko jeden kurs online
        o Vue i skończyłem jeden, prosty projekt (<a href="https://kajetaniak.com/#projekt#stock">Ten</a>). Nie wiedziałem wtedy jakie są minusy
        SPA. Nie wiedziałem, że jeżeli treść strony jest asynchronicznie pobierana a potem renderowana po stronie klienta jest praktycznie
        niewidoczna dla Googlowych web crawlerów. Kiedy natknąłem się na pewną konferencję o JavaScripcie gdzie dowiedziałem się o wadach SPA
        prawie dostałem depresji. Nie chciałem, żeby blog był nie do znalezienia w wyszukiwarce. To by było nie wporządku. Dlatego zacząłem czytać
        o prerenderingu i SSR dzięki czemu poznałem Nuxt gdzie w końcu przeniosłem aplikację. <br>
        Zaimplementowanie GraphQL również okazało się trudniejsze niż myślałem. Głównie dlatego, że ciężko znaleźć dobre źródło informacji
        na ten temat w internecie. Nie ma ani jednego wpisu o implementacji GraphQL w Nuxt po polsku. Po angielsku jest tylko kilka, ale i tak
        artykuły pokrywają tylko podstawy. Rozważałem przeniesienie bazy danych do Firebase ale zrezygnowałem z tego pomysłu. Firebase nie oferuje
        najlepszych rozwiązań jeżeli chodzi o relacje czy zaawansowane zapytania. W końcu jednak dowiedziałem się jak posługiwać się tą technologią 
        czytając enigmatyczną dokumentację i repozytoria na GitHubie.`;

    const h4 = document.createElement('h1');
    h4.id = 'mistakes';
    h4.innerText = lang === 'en' ? 'What would I do differently today?' : 'Co dzisiaj zrobilbym inaczej?';
    const p4 = document.createElement('p');
    p4.innerHTML = lang === 'en' ? `
        Allthough everything is working as intended and my code is DRY I would still do some things differently. I was learning JavaScript
        the entire time I was building this project. When I was starting I wasn't aware of linters and naming conventions.
        That's why in some places my code can be slightly different. I also regret adding this project to GitHub so late. When it comes to
        CSS, I would definitely organize the styles better. I thought separating CSS with just Vue components is a good enough
        solution. However there were still some cases where I repeated the same styles in different places. <br>
        I drawn conclusions from these mistakes though. I approached code organization better with my next project.` :
        `O ile aplikacja działa poprawnie i mój kod jest DRY, jest kilka rzeczy które zrobiłbym inaczej. Przez cały czas tworzenia projektu
        uczyłem się JavaScriptu. Kiedy zaczynałem nie wiedziałem nic o Linterach i konwencjach nazewnictwa. Przez co kod w niektórych momentach
        może się trochę rożnić. Żałuję również, że tak późno dodałem repozytorium z kodem do GitHuba. Jeżeli chodzi o CSS, na pewno zorganizowałbym
        style lepiej. Myślałem, że rozdzielenie kodu na komponenty w Vue jest wystarczająco dobrym rozwiązaniem. Jednak kilka razy zdarzyło mi się
        powtórzyć ten sam styl w różnych miejscach. Bez obaw, wyciągnąłem wnioski z tych błędów i podszedłem do organizacji kodu o wiele lepiej w kolejnym projekcie.`;

    const h5 = document.createElement('h1');
    h5.id = 'changes';
    h5.innerText = lang === 'en' ? "What's next?" : 'Co dalej?';
    const p5 = document.createElement('p');
    p5.innerHTML = lang === 'en' ? `
        Even if the app is working perfectly fine as it is right now, I'm still working on implementing new features.
        In my spare time I'm trying to figure out how to migrate the existing back-end to a custom GraphQL server
        on Express with a MongoDB database. It's not required right now, but it would be safer in a long term.` :
        `Pomimo tego, że aplikacja działa w 100% poprawnie, dalej pracuję nad implementacją nowych funkcji. W wolnym czasie próbuję
        przenieść cały back-end na własny serwer GraphQL postawiony na Expressie z bazą danych w MongoDB. Nie jest to konieczne obecnie,
        ale byłoby to korzystne na dłuższą metę.`;

    article.appendChild(image);
    article.appendChild(description);
    article.appendChild(stack);
    article.appendChild(table);
    article.appendChild(articleText);
    articleText.appendChild(h1);
    articleText.appendChild(p1);

    const img1 = document.createElement('div');
    img1.classList.add('example-img');
    img1.innerHTML = '<img src="./img/mockup3.png">';
    articleText.appendChild(img1);

    articleText.appendChild(h2);
    articleText.appendChild(p2);

    const video = document.createElement('div');
    video.classList.add('example-img');
    video.innerHTML = lang === 'en' ? `<video width="100%" height="auto" controls><source src="./img/demo.mp4" type="video/mp4"></video><span>Custom CMS</span>` :
        `<video width="100%" height="auto" controls><source src="./img/demo.mp4" type="video/mp4"></video><span>Wlasny CMS</span>`;
    articleText.appendChild(video);
    articleText.appendChild(h3);
    articleText.appendChild(p3);
    articleText.appendChild(h4);
    articleText.appendChild(p4);
    articleText.appendChild(h5);
    articleText.appendChild(p5);

    const footer = document.createElement('div');
    footer.classList.add('mobile-footer');
    footer.innerHTML = lang === 'en' ? `<a onclick="location.hash='#work'"><i class="fas fa-arrow-left"></i> Work</a>` : `<a onclick="location.hash='#projekty'"><i class="fas fa-arrow-left"></i> Projekty</a>`;
    container.appendChild(footer);
    element.appendChild(container);
};

export default createDziecimamy;
