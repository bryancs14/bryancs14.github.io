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
})

let links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
    link.onclick = function() {
        links.forEach((link) => {
            link.classList.remove("selected");
        })
        link.classList.add("selected");
    }
    
})
