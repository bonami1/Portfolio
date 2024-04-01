const slider = document.querySelector('.imageSlider');
const arrLeft = document.querySelector('.arrowLeft');
const arrRight = document.querySelector('.arrowRight');
const heading = document.querySelector('.caption h3');
const description = document.querySelector('.caption p');

const images = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
    "09.png",
    "10.png"
];

const headings = [
    "A balling machine problem",
    "Checking if the resabox is on the network",
    "Checking the monitoring on Stadline admin website",
    "Waiting for user's response",
    "Ticket closer",
    "title 6",
    "title 7",
    "title 8",
    "title 9",
    "title 10"
];

const descriptions = [
    "The balling machine won't hand over balls ans says :check with the desk",
    "Wih the command : Ping 192.168.17.240 => can't find",
    "The resabox is OFFLINE",
    "Asking for the user to follow the instruction on Stadline procedure which is : reboot the resabox et checking if the wiring is done correctly",
    "No response from the user but the router is on the nextwork so we can close the ticket",
    "descr 6",
    "descr 7",
    "descr 8",
    "descr 9",
    "descr 10",
];

let id = 0;
function slide(id) {
    slider.style.backgroundImage = `url(http://127.0.0.1:5501/img/ticketHub/${images[id]})`;
    slider.classList.add('imageFade');
    setTimeout(() => {
        slider.classList.remove('imageFade');
    }, 500);
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