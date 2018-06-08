const createAbout = (element, lang) => {
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    h1.innerText = lang === 'en' ? 'In a nutshell 🥜' : 'W skrócie o mnie 👦🏻';
    p1.innerText = lang === 'en' ? "My name is Filip Kajetaniak and I'm looking for a junior front-end web developer position. I'm 22 years old. I'm based in Warsaw (but I'm willing to move if necessary). I design and build web apps with HTML, CSS, JavaScript and Vue.js." :
        'Nazywam się Filip Kajetaniak i szukam pracy jako junior front-end developer. Mam 22 lata i mieszkam w Warszawie (choć zawsze mogę się wyprowadzić jeśli to konieczne). Projektuje i tworze strony i aplikacje internetowe w JavaScripcie i Vue.';
    const h2 = document.createElement('h1');
    const p2 = document.createElement('p');
    h2.innerText = lang === 'en' ? 'Things I love ❤️' : 'Rzeczy które kocham ❤️';
    p2.innerText = lang === 'en' ? "I live to create cool things. Seriously. I don't think there is anything better to do. I've been creating stuff my entire life. I used to draw, compose music and make killer potato salads untill I came across the Web Dev. And oh boy I tell you, now I'm madly into it. I love it because it's one of only few things in this world that combines aesthetics with logic." :
        'Żyję żeby tworzyć fajne rzeczy. Serio. Nie ma na świecie nic lepszego do robienia. Odkąd pamiętam całe życie coś tworzyłem. Rysowałem, komponowałem muzykę i robiłem epickie sałatki warzywne aż w końcu natknąłem się na Web Dev. I o rany, powiem Ci tak, zakochałem się w tym. Kocham Web Dev ponieważ jest jedną z niewielu rzeczy na świecie która łączy estetykę z logiką.';
    const h3 = document.createElement('h1');
    const p3 = document.createElement('p');
    h3.innerText = lang === 'en' ? 'Goals 🎯' : 'Moje cele 🎯';
    p3.innerText = lang === 'en' ? 'By day I work on achieving a black belt in JavaScript. By night I dip my toes in some back-end stuff like Express, Node.js and MongoDB to make apps much more functional.' :
        'Codziennie pracuję nad zdobyciem czarnego pasa w JavaScripcie. Po godzinach wkręcam się w back-endowe technologie takie jak Express, Node.js i MongoDB żeby moje aplikacje były jeszcze bardziej funkcjonalne.';
    const h4 = document.createElement('h1');
    const p4 = document.createElement('p');
    h4.innerText = lang === 'en' ? 'Tools / workflow 🔨' : 'Narzedzia / Workflow 🔨';
    p4.innerText = lang === 'en' ? 'I use Git and VS Code with ESLint and Emmet on daily basis. I design websites with Photoshop and Illustrator and then turn the designs into code with Sass. I organize and bundle files with Webpack. I care for all generations so I make sure my websites are cross-browser compatible with Babel and Autoprefixer.' :
        'Kod piszę w VS Code z pomocą ESLinta i Emmeta commitując wszystko na GitHubie. Projekty tworzę w Photoshopie i Illustratorze a potem wszystko zmieniam na kod Sassem. Pliki organizuje i pakuje do kupy Webpackiem. Dbam również o wszystkie pokolenia, więc upewniam się, że mój kod działa na wszystkich przeglądarkach pomagając sobie Babelem i Autoprefixerem.';

    const container = document.createElement('div');
    container.classList.add('content');
    element.appendChild(container);
    const section = document.createElement('section');
    section.classList.add('about');
    container.appendChild(section);
    section.appendChild(h1);
    section.appendChild(p1);
    section.appendChild(h2);
    section.appendChild(p2);
    section.appendChild(h3);
    section.appendChild(p3);
    section.appendChild(h4);
    section.appendChild(p4);

    const skills = document.createElement('section');
    skills.classList.add('skills');
    container.appendChild(skills);
    skills.innerHTML = lang === 'en' ? `
      <h2>Skills 🤹</h2>
      <div><span class="technology" style="opacity: 1">English</span><div><span>Fluent</span></div></div>
      <div><span class="technology" style="opacity: 1">Html 5</span><div><span>Confident</span></div></div>
      <div><span class="technology" style="opacity: 1">Css 3</span><div><span>Confident</span></div></div>
      <div><span class="technology" style="opacity: 0.8">Vue.js & Nuxt.js</span><div><span>Pretty confident</span></div></div>
      <div><span class="technology" style="opacity: 0.6">JavaScript ES6</span><div><span>I know basics, now I'm diving into advanced concepts</span></div></div>
      <div><span class="technology" style="opacity: 0.6">GraphQL</span><div><span>I know some advanced queries and mutations</span></div></div>
      <div><span class="technology" style="opacity: 0.5">Wordpress</span><div><span>I can use the CMS and modify files, don't know PHP though</span></div></div>
      <div><span class="technology" style="opacity: 0.4">Bootstrap</span><div><span>I used it only few times but I know how it works</span></div></div>
      <div><span class="technology" style="opacity: 0.4">jQuery</span><div><span>Haven't used it in a while, I'd need to revise the syntax</span></div></div>
      <div><span class="technology" style="opacity: 0.3">Express</span><div><span>I know how to write super basic apps</span></div></div>
      <div><span class="technology" style="opacity: 0.2">Node.js</span><div><span>I'd need documentation to write anything</span></div></div>
      <h4>( Hover over for more details )</h4>
    ` : `
    <h2>Umiejetnosci 🤹</h2>
    <div><span class="technology" style="opacity: 1">Angielski</span><div><span>Plynny</span></div></div>
    <div><span class="technology" style="opacity: 1">Html 5</span><div><span>Pewny siebie</span></div></div>
    <div><span class="technology" style="opacity: 1">Css 3</span><div><span>Pewny siebie</span></div></div>
    <div><span class="technology" style="opacity: 0.8">Vue.js & Nuxt.js</span><div><span>Calkiem pewny siebie</span></div></div>
    <div><span class="technology" style="opacity: 0.6">JavaScript ES6</span><div><span>Znam podstawy i ucze sie zaawansowanych konceptów</span></div></div>
    <div><span class="technology" style="opacity: 0.6">GraphQL</span><div><span>Znam zaawansowane zapytania i mutacje</span></div></div>
    <div><span class="technology" style="opacity: 0.5">Wordpress</span><div><span>Nie znam PHP ale potrafie modyfikowac pliki</span></div></div>
    <div><span class="technology" style="opacity: 0.4">Bootstrap</span><div><span>Uzylem tylko kilka razy ale wiem jak dziala</span></div></div>
    <div><span class="technology" style="opacity: 0.4">jQuery</span><div><span>Unikam w ramach nauki ale poradzilbym sobie</span></div></div>
    <div><span class="technology" style="opacity: 0.3">Express</span><div><span>Potrafie napisac tylko super proste apki</span></div></div>
    <div><span class="technology" style="opacity: 0.2">Node.js</span><div><span>Bez dokumentacji bym sie strasznie meczyl</span></div></div>
    <h4>( Najedz myszka po wiecej szczegolow )</h4>
  `;
};

export default createAbout;
