const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const kaabaSection = document.getElementById("kaabaSection");
const typingText = document.getElementById("typingText");

const message = `À l'heure où tu t'apprêtes à accomplir l'un des plus beaux voyages de ta vie,

Qu'Allah accepte ton Omra, facilite chacun de tes pas,

Que chaque prière devant la Kaaba soit une source de sérénité.

Profite pleinement de chaque instant de ce voyage exceptionnel.

Omra Moubaraka, Fatimata Tata Diallo. 🤍🕋

Qu'Allah te protège, te guide et te ramène auprès des tiens.

— De la part de quelqu'un qui te souhaite le meilleur.`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typingText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 35);
    }
}

openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    welcome.classList.add("hidden");
    letter.classList.remove("hidden");
    typeWriter();
});

function createLantern() {
    const lantern = document.createElement("div");
    lantern.className = "lantern";
    lantern.innerHTML = "🏮";
    lantern.style.left = Math.random() * 100 + "vw";
    lantern.style.animationDuration = (6 + Math.random() * 4) + "s";
    
    const container = document.getElementById("lanternContainer");
    if (container) {
        container.appendChild(lantern);
    }

    setTimeout(() => {
        lantern.remove();
    }, 11000);
}

setInterval(createLantern, 1200);

window.addEventListener("load", () => {
    typingText.innerHTML = "";
    index = 0;
});

