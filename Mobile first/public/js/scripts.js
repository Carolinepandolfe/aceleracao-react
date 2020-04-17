let toogle = document.querySelector('#btn-toggle');
let topbar = document.querySelector("#topbar-dark");
let logo = document.querySelector("#logo");
let body = document.querySelector("body");
let stories = document.querySelector("#stories");
let story = document.querySelector(".story");
let fontBold = document.querySelectorAll(".font-bold");
let icon = document.querySelector("#icon-dark");
let input = document.querySelector(".search-dark");
let userName = document.querySelectorAll(".font");
let storie = document.querySelectorAll(".stories__user")
let search = document.querySelector(".search-dark");
let post = document.querySelectorAll(".post");

toogle.onclick = () => {
    topbar.classList.toggle('dark');
    logo.classList.toggle('logo-light');
    body.classList.toggle('body-dark');
    stories.classList.toggle('stories-dark');
    story.classList.toggle('story-dark');
    icon.classList.toggle('icon-light');
    input.classList.toggle('font-light');
    search.classList.toggle("search-light");

    for (let i = 0; i < userName.length; ++i) {
        userName[i].classList.toggle('font-light')
    }

    for (let i = 0; i < storie.length; ++i) {
        storie[i].classList.toggle('teste')
    }

    for (let i = 0; i < post.length; ++i) {
        post[i].classList.toggle('post-light')
    }
}

