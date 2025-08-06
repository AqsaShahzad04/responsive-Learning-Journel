import {blogs} from './data.js';
const mainContainer = document.getElementById('sections-container')
console.log(mainContainer);

const secHtml = blogs.map((blog) => {
    return ` <section class="sec">
                <img src=${blog.image} alt="img of my learning journey ">
                <p class="date">${blog.date}</p>
                <h2>${blog.heading}</h2>
                <p class="section-1-text">
                    ${blog.blogText}
                </p>
            </section>`
}).join('');
mainContainer.innerHTML = secHtml;
console.log(secHtml);