window.addEventListener('scroll', function() {

    let circular = document.querySelectorAll(".circular__svg");
    let sectionSkills = document.querySelector(".skills")
    circular = Array.from(circular);
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

window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll("section");
    sections = Array.from(sections)
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
