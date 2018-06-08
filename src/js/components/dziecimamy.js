const createDziecimamy = (element) => {
    const container = document.createElement('div');
    container.classList.add('content');
    const article = document.createElement('article');
    article.classList.add('dziecimamy-article');
    container.appendChild(article);
    const image = document.createElement('div');
    image.classList.add('article-img');
    const description = document.createElement('div');
    description.classList.add('project-description');
    description.innerHTML = `
      <h1>Dziecimamy &mdash;</h1>
      <p>Single page application blog with custom CMS made from scratch. It loads and renders data on server
        so search engines can analyze the content.
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
    table.querySelector('h1').innerText = 'Table of content';
    table.querySelector('ol').innerHTML = `
      <li><span onClick="zenscroll.to(document.getElementById('features'), 300)">App features</span></li>
      <li><span onClick="zenscroll.to(document.getElementById('technologies'), 300)">Used technologies</span></li>
      <li><span onClick="zenscroll.to(document.getElementById('problems'), 300)">Problems I faced</span></li>
      <li><span onClick="zenscroll.to(document.getElementById('mistakes'), 300)">What I did wrong</span></li>
      <li><span onClick="zenscroll.to(document.getElementById('changes'), 300)">Upcoming changes</span></li>
    `;
    const articleText = document.createElement('div');
    articleText.classList.add('article-text');

    const h1 = document.createElement('h1');
    h1.id = 'features';
    h1.innerText = 'Features';
    const p1 = document.createElement('p');
    p1.innerHTML = `
    I believe this app is super cool and let my tell you why.</p>
      <ul>
        <li><b>It's a Single Page App</b> - the UI is snappy and you don't see page reloads.</li>
        <li><b>It's SEO friendly</b> - web crawlers can see pages content thanks to SSR</li>
        <li><b>It has a simple custom CMS</b> - you can write new posts, add new categories and manage content</li>
        <li><b>Admin panel is secured</b> - I implemented JSON Web Token authorization</li>
        <li><b>It's responsive and cross browser compatible</b></li>
        <li><b>It has custom illustrations</b></li>
      </ul>
      <p>
        But most importantly, it's a legit app. It's not just a simple training project.
        It's deployed on a Node.js server, it has all the features a proper blog should have like
        SSL certificate, comments section, newsletter form, page sharing e.t.c. `;

    const h2 = document.createElement('h1');
    h2.id = 'technologies';
    h2.innerText = 'Technologies';
    const p2 = document.createElement('p');
    p2.innerHTML = `
    Technologies used for this project are quite unusuall. You don't see blogs with this stack everyday.
    I used Vue.js for snappy and dynamic user interface. I also added Nuxt.js, which is an additional
    library / framework for server side rendering in Vue. Regarding back-end, I used GraphQL for fetching
    data from API and Graphcool as a database. GraphQL is essentially a better alternative to REST. It's
    a super new technology developed by Facebook team for more efficient API queries and mutations. Graphcool
    is a service that lets you set up a GraphQL database in a cloud server. To keep everything together and be
    to able to render html on server I used Node.js. <br>
    Were these technologies the best choice for this kind of project? Not really. Using a Wordpress or Jekyll
    certainly would be a much easier solution. Despite some painful drawbacks I'm glad I've finished this
    project with this setup. I had to face tons of different problems which made me learn incomparably more
    than if I used a CMS.`;

    const h3 = document.createElement('h1');
    h3.id = 'problems';
    h3.innerText = 'Problems I had to overcome when developing this app';
    const p3 = document.createElement('p');
    p3.innerHTML = `
    I wasn't very experienced with Vue when I started building this project. At that point I had watched
      only one online course about Vue and finished one simple project (<a href="https://kajetaniak.com/#stock">This one</a>).
      I wasn't aware of downsides of single page apps. I didn't know that if your content is being asynchronously
      loaded and then rendered with JavaScript, it's pretty much invisible for Google's web crawlers. So I was 
      pretty depressed when I stumbled upon some JavaScript conference where they mentioned this problem with SPA's.
      After a whole day of crying in a fetal position I started reading about prerendering and SSR. That's how I discovered
      and eventually migrated the code to Nuxt. <br>
      Implementing GraphQL was also a big hassle for me. Mostly because there isn't much info about that on the internet. 
      There are literally 0 articles about implementing GraphQL into Nuxt in Polish. There are just few in English but 
      these articles cover only basics. I was considering switching to Firebase (which I was a bit more experienced with)
      but I decided not to. Firebase doesn't provide the best solutions for advanced queries, authorization and data relationships. I eventually
      had to learn everything on my own by reading their enigmatic docs and other people github repos.`;

    const h4 = document.createElement('h1');
    h4.id = 'mistakes';
    h4.innerText = 'What would I do differently today?';
    const p4 = document.createElement('p');
    p4.innerHTML = `
      Allthough everything is working as intended and my code is DRY I would still do some things differently. I was learning JavaScript
      the entire time I was building this project. When I was starting I wasn't aware of linters and naming conventions.
      That's why in some places my code can be slightly different. I also regret adding this project to GitHub so late. When it comes to
      CSS, I would definitely organize the styles better. I thought separating CSS with just Vue components is a good enough
      solution. However there were still some cases where I repeated the same styles in different places. <br>
      I drawn conclusions from these mistakes though. I approached code organization better with my next project.`;

    const h5 = document.createElement('h1');
    h5.id = 'changes';
    h5.innerText = "What's next?";
    const p5 = document.createElement('p');
    p5.innerHTML = `
    Even if the app is working perfectly fine as it is right now, I'm still working on implementing new features.
    In my spare time I'm trying to figure out how to migrate the existing back-end to a custom GraphQL server
    on Express with a MongoDB database. It's not required right now, but it would be safer in a long term.`;

    article.appendChild(image);
    article.appendChild(description);
    article.appendChild(stack);
    article.appendChild(table);
    article.appendChild(articleText);
    articleText.appendChild(h1);
    articleText.appendChild(p1);
    // miejsce na obrazek 1
    articleText.appendChild(h2);
    articleText.appendChild(p2);
    // miejsce na obrazek 2
    articleText.appendChild(h3);
    articleText.appendChild(p3);
    // miejsce na obrazek 3
    articleText.appendChild(h4);
    articleText.appendChild(p4);
    // może i czwóreczkę się wrzuci
    articleText.appendChild(h5);
    articleText.appendChild(p5);
    element.appendChild(container);
};

export default createDziecimamy;
