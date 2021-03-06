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
        headerNav.style.boxShadow = "0px 1px 0px #a4f041";
    } else if(window.scrollY <= 15){
        headerNav.style.height = "70px";
        headerNav.style.boxShadow = "unset";
    }
});

let typed = document.querySelector(".typed")


let imprimirArreglo = function(array, hasta) {
    let palabra = "";
    array.map((e, i) => {
        if(i <= hasta) {
            palabra += e;
        }
    })
    typed.innerHTML = palabra;
}

let writing = (str) => {
    let arrayFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function () {
        typed.innerHTML += arrayFromStr[i];
        i++;
        if(i === arrayFromStr.length) {
            setTimeout(function() {console.log();}, 100)
            let erase = setInterval(function(){
                imprimirArreglo(arrayFromStr, i-1)
                i--;
                if(i === -1) {
                    clearInterval(erase);
                }
            },25)
            clearInterval(printStr);
        }
    },200)
}

let writingInfinite = function() {
    let frases = ["Diseñador Web", "Diseñador Movil"];
    let cont = 0;
    setInterval(function() {
        writing(frases[cont]);
        cont++;
        if(cont === frases.length){
            cont = 0;
        }
    },3600);
}

writingInfinite();
