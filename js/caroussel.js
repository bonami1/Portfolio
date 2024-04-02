const slider = document.querySelector('.imageSlider');
const arrLeft = document.querySelector('.arrowLeft');
const arrRight = document.querySelector('.arrowRight');
const heading = document.querySelector('.caption h3');
const description = document.querySelector('.caption p');

const images = [
    "01_Seyssins.png",
    "02_Seyssins_adresse_IP.png",
    "03_Seyssins_monitoring_Stadline.png",
    "04_Seyssins_en_attente_utilisateur.png",
    "05_Seyssins_fermeture_ticket.png"
];

const headings = [
    "A balling machine problem",
    "Checking if the resabox is on the network",
    "Checking the monitoring on Stadline admin website",
    "Waiting for user's response",
    "Ticket closer"
];

const descriptions = [
    "The balling machine won't hand over balls ans says :check with the desk",
    "Wih the command : Ping 192.168.17.240 => can't find",
    "The resabox is OFFLINE",
    "Asking for the user to follow the instruction on Stadline procedure which is : reboot the resabox et checking if the wiring is done correctly",
    "No response from the user but the router is on the nextwork so we can close the ticket"
];

let id = 0;
function slide(id) {
    slider.style.backgroundImage = `url(http://127.0.0.1:5501/ticket/${images[id]})`;
    slider.classList.add('imageFade');
    setTimeout(() => {
        slider.classList.remove('imageFade');
    }, 500);
    //slider.innerHTML = `<img src="http://127.0.0.1:5501/ticket/02_Seyssins_adresse_IP.png" width="1800px" height="200px">`;
    heading.innerText = headings[id];
    description.innerText = descriptions[id];
}

arrLeft.addEventListener('click', () => {
        id++;
        if(id < 0) {
            id = images.length - 1;
        }
        slide(id);
    });

    arrRight.addEventListener('click', () => {
        id--;
        if(id > images.length - 1) {
            id = 0;
        }
        slide(id);
    });

slide(id)