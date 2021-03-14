let circular = document.querySelectorAll(".circular__svg");
circular = Array.from(circular);
let sectionSkills = document.querySelector(".skills");

window.addEventListener('scroll', function() {

    circular.forEach((circulo) => {
        let animarCirculo = circulo.getElementsByTagName('circle')[1];
        let posicionObj1 = sectionSkills.getBoundingClientRect().top;
        let tamanoPantalla = window.innerHeight/2;
        
        if(posicionObj1 < tamanoPantalla) {
            animarCirculo.style.strokeDashoffset = 220;
        }
    }) 
});

let links = document.querySelectorAll(".nav__link");
links = Array.from(links);

function linkClick() {
    links.forEach((link) => {
        link.onclick = function() {
            let linkSelected = document.querySelector(".nav__link.selected")
            linkSelected.classList.remove("selected");
            link.classList.add("selected");
        }
    });
}

linkClick();

let sections = document.querySelectorAll("section");
sections = Array.from(sections)

window.addEventListener('scroll', function () {
    let tamanoPantalla = window.innerHeight/3;
    let posicionEstudios = sections[0].getBoundingClientRect().top;

    sections.forEach((section, i) => {
        let posicionSection = section.getBoundingClientRect().top;
        if(posicionEstudios < 1000 && posicionEstudios >= 240 ){
            let linkSelected = document.querySelector(".nav__link.selected")
            linkSelected.classList.remove("selected");
            links[0].classList.add("selected");
        }
        if(posicionSection < tamanoPantalla) {
            let linkSelected = document.querySelector(".nav__link.selected")
            linkSelected.classList.remove("selected");
            links[i+1].classList.add("selected");
        }
    });

})

let button = document.querySelectorAll(".nav__link")[3];

button.onclick = function() {
    window.scrollBy({
        top: 1000,
        behavior: "smooth"
    })
    console.log(position);
    
}

let headerNav = document.querySelector(".header__nav")

window.addEventListener("scroll", function() {
    if(window.scrollY >= 60) {
        console.log(window.scrollY);
        headerNav.style.height = "60px";
        headerNav.style.boxShadow = "0px 1px 0px red";
    } else if(window.scrollY <= 15){
        headerNav.style.height = "70px";
        headerNav.style.boxShadow = "unset";
    }
});

