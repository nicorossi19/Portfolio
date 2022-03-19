// AOS Init
AOS.init();


// Arrays
const technologies = [
    {
        id: 1,
        name: 'HTML5',
        src: "./img/html5.png"
    },
    {
        id: 2,
        name: 'CSS3',
        src: "./img/css3.png"
    },
    {
        id: 3,
        name: 'JavaScript',
        src: "./img/js.png"
    },
    {
        id: 4,
        name: 'BootStrap',
        src: "./img/bs.png"
    },
    {
        id: 5,
        name: 'Sass',
        src: "./img/sass.png"
    },
    {
        id: 6,
        name: 'Git',
        src: "./img/git.png"
    },
    {
        id: 7,
        name: 'Github',
        src: "./img/github.png"
    }
];


// Variables
let navbar = document.querySelector(".navbar");
let icons = document.querySelectorAll(".containerIcon");
let divTech = document.querySelector('#technologies');
const $div1 = document.createElement('div');
$div1.classList.add('imgs');


//Eventos
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});


// Recorrido del array 'technologies'
technologies.forEach(el => {
    const $div2 = document.createElement('div');
    $div2.classList.add('containerIcon');
    const $img = document.createElement('img');
    $img.classList.add('tech');
    $img.setAttribute('src', el.src);
    const $h3 = document.createElement('h3');
    $h3.classList.add('subtitle');
    $h3.textContent = `${el.name}`;
    $div1.appendChild($div2);
    $div2.appendChild($img);
    $div2.appendChild($h3);
    divTech.appendChild($div1);
});

console.log($div1);