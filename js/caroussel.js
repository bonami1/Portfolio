const slider = document.querySelector('.imageSlider');
const arrLeft = document.querySelector('.arrowLeft');
const arrRight = document.querySelector('.arrowRight');
const heading = document.querySelector('.caption h3');
const description = document.querySelector('.caption p');

const images = [
    "01 Seyssins.png",
    "02 Seyssins adresse IP.png",
    "03 Seyssins monitoring Stadline.png",
    "04 Seyssins en attente utilisateur.png",
    "05 Seyssins fermeture ticket.png"
];

const headings = [
    "Ticket",
    "Adresse IP",
    "Monitoring",
    "Attente reponse utilisateur",
    "Fermeture du ticket"
];

const descriptions = [
    "descr 1",
    "descr 2",
    "descr 3",
    "descr 4",
    "descr 5"
];

let id = 0;
function slide(id) {
    slider.style.backgroundImage = `url(img/${images[id]})`;
    slider.classList.add('imageFade');
    setTimeout(() => {
        slider.classList.remove('imageFade');
    }, 500);
    heading.innerText = headings[id];
    description.innerText = descriptions[id];

    arrLeft.addEventListener('click', () => {
        id--;
        if(id < 0) {
            id = images.length - 1;
        }
        slide(id);
    });

    arrRight.addEventListener('click', () => {
        id++;
        if(id > images.length - 1) {
            id = 0;
        }
        slide(id);
    });
}

slide(id)