const createAbout = (element, lang) => {
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    h1.innerText = lang === 'en' ? 'In a nutshell 🥜' : 'W skrócie ⏱️';
    p1.innerText = lang === 'en' ? `My name is Filip Kajetaniak and I'm looking for a junior front-end web developer position. I'm 22 years old. I'm based in Warsaw (but I'm willing to move if necessary). I design and build web apps with HTML, CSS, JavaScript and Vue.js.` :
      `Nazywam się Filip Kajetaniak i szukam pracy jako junior front-end developer. Mam 22 lata i mieszkam w Warszawie (choć zawsze mogę się wyprowadzić jeśli to konieczne). Projektuje i tworze strony i aplikacje internetowe w JavaScripcie i Vue.js.`;
    const h2 = document.createElement('h1');
    const p2 = document.createElement('p');
    h2.innerText = 'What inspires me? ❤️';
    p2.innerText = `I live to create cool things. Seriously. I don't think there is anything better to do. I've been creating stuff my entire life. I used to draw, compose music and make killer potato salads untill I came across the Web Dev. And oh boy I tell you, now I'm madly into it. I love it because it's one of only few things in this world that combines aesthetics with logic.`;
    const h3 = document.createElement('h1');
    const p3 = document.createElement('p');
    h3.innerText = 'Goals 🎯';
    p3.innerText = `By day I work on achieving a black belt in JavaScript. By night I dip my toes in some back-end stuff like Express, Node.js and MongoDB to make apps much more functional.`;
    const h4 = document.createElement('h1');
    const p4 = document.createElement('p');
    h4.innerText = 'Tools / workflow 🔨';
    p4.innerText = `I use Git and VS Code with ESLint and Emmet on daily basis. I design websites with Photoshop and Illustrator and then turn the designs into code with Sass. I organize and bundle files with Webpack. I care for all generations so I make sure my websites are cross-browser compatible with Babel and Autoprefixer.`;

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
    skills.innerHTML = `
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
    `;
};

export default createAbout;
