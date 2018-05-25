'use strict';

require('./sass/main.scss');

const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');
const slot = document.getElementById('slot');

about.addEventListener('click', ()=>{
    slot.innerHTML = `
    <div class="content">
      <section class="about">
          <h1>In a nutshell 🥜</h1>
          <p>
            My name is <b>Filip Kajetaniak</b> and I'm looking for a junior front-end web developer position.
            I'm 22 years old. I'm based in <b>Warsaw</b> (but I'm <b>willing to move</b> if necessary). I design and build
             web apps with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> and <b>Vue.js</b>.
          </p>

        <h1>What inspires me? ❤️</h1>
        <p>
          I live to create cool things.
          Seriously. I don't think there is anything better to do.
          I've been creating stuff my entire life. I used to draw,
          compose music and make killer potato salads untill
          I came across the Web Dev. And oh boy I tell you,
          now I'm madly into it. I love it because it's one of only few
          things in this world that combines aesthetics with logic.
          There is nothing more satisfying than snappy and beautiful UI.
          That's why I love JavaScript, Vue.js and single page apps.  
        </p>
        <h1>Goals 🎯</h1>
        <p>
          By day I work on achieving a black belt in JavaScript. By night
          I dip my toes in some back-end stuff like Express, Node.js and
          MongoDB to make apps much more functional.
        </p>

        <h1>Tools / workflow 🔨</h1>
        <p>
          I use <b>Git</b> and <b>VS Code</b> with <b>ESLint</b> and <b>Emmet</b> on daily basis. I design websites with <b>Photoshop</b> and <b>Illustrator</b> and then turn the designs into code with <b>Sass</b>. 
          I organize and bundle files with <b>Webpack</b>.
          I care for all generations so I make sure my websites are cross-browser compatible with <b>Babel</b> and <b>Autoprefixer</b>.
        
        </p>
      </section>
      <section class="skills">
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
      </section>
    </div>
    `
})
work.addEventListener('click', ()=>{
    slot.innerHTML = `
        <div class="content">
        <section class="projects">
        <div class="project" id="dziecimamy">
            <div class="project-text">
            <h1>Dziecimamy</h1>
            <h3>www.dziecimamy.com</h3>
            <p>
                SEO friendly single page<br>
                application blog written<br>
                with Vue.js.
            </p>
            </div>
            <div class="project-icons">
            <i class="fab fa-vuejs"></i><div class="label">Vue.js</div>
            </div>
            <div class="project-img"></div>
        </div>
        <div class="project" id="kajetaniak">
            <div class="project-text">
            <h1>My portfolio</h1>
            <h3>www.kajetaniak.com</h3>
            <p>
                My portfolio website<br>
                written with vanilla JS.
            </p>
            </div>
            <div class="project-icons">
            <i class="fab fa-js"></i><div class="label">JavaScript</div>
            </div>
            <div class="project-img"></div>
        </div>
        <div class="project" id="stock">
            <div class="project-text">
                <h1>Boards stock</h1>
                <h3>www.kajetaniak.com/boardstock</h3>
                <p>
                Simple Vue.js app<br>
                for keeping track of<br>
                stored boards.
                </p>
            </div>
            <div class="project-icons">
            <i class="fab fa-vuejs"></i><div class="label">Vue.js</div>
            </div>
            <div class="project-img"></div>
        </div>
        <div class="project" id="novak">
            <div class="project-text">
                <h1>Novak contractors</h1>
                <h3>www.novakcontractors.co.uk</h3>
                <p>
                Wordpress website<br>
                renovation.
                </p>
            </div>
            <div class="project-icons">
            <i class="fab fa-wordpress-simple"></i><div class="label">Wordpress</div>
            </div>
            <div class="project-img"></div>
        </div>
        </section>   
        </div>    
    `
})
contact.addEventListener('click', ()=>{
    slot.innerHTML = `
        <div class="content">
            <section class="contact">
            <h1>Feel free to say hello 👋</h1>
            <h2>Many thanks for stopping by! I hope you enjoyed my work. <br>
            Hit me up, I'd be happy to help you out :)
            </h2>
            <a href="mailto:hello@kajetaniak.com">filip@kajetaniak.com</a>
            <h2>Or you can find me here:</h2>
            <div class="social">
            <a href="https://m.me/filip.kajetaniak"><i class="fab fa-facebook-messenger"></i></a>
            <a href="https://github.com/FilipKajetaniak"><i class="fab fa-github"></i></a>
            <a href="https://codepen.io/FilipKajetaniak/"><i class="fab fa-codepen"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </section>
    </div>
    `
})