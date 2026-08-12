const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const kaabaSection = document.getElementById("kaabaSection");
const typingText = document.getElementById("typingText");
const nasheed = document.getElementById("nasheed");

const message = `À l'heure où tu t'apprêtes à accomplir l'un des plus beaux voyages de ta vie, je voulais t'offrir ces quelques mots avec toute ma sincérité.

Qu'Allah accepte ton Omra, facilite chacun de tes pas, protège ton voyage et remplisse ton cœur de paix et de lumière.

Que chaque prière devant la Kaaba soit une source de sérénité, de pardon et de bénédictions, et que chacune de tes invocations soit accueillie avec miséricorde.

Profite pleinement de chaque instant de ce voyage exceptionnel. Que cette Omra renforce ta foi, apaise ton cœur et t'apporte une immense proximité avec Allah.

Omra Moubaraka, Fatimata Tata Diallo. 🤍🕋

Qu'Allah te protège, te guide et te ramène auprès des tiens en toute sécurité. Âmîn.

— De la part de quelqu'un qui te souhaite le meilleur. 🤍`;

let index = 0;function typeWriter() {

    if (index < message.length) {

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 35);

    } else {

        setTimeout(() => {

            letter.classList.add("hidden");

            kaabaSection.classList.remove("hidden");

        }, 4000);

    }

}

openBtn.addEventListener("click", () => {

    welcome.classList.add("hidden");

    letter.classList.remove("hidden");

    nasheed.play().catch(() => {});

    typeWriter();

});function createLantern() {

    const lantern = document.createElement("div");

    lantern.className = "lantern";

    lantern.innerHTML = "🏮";

    lantern.style.left = Math.random() * 100 + "vw";

    lantern.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.getElementById("lanternContainer").appendChild(lantern);

    setTimeout(() => {
        lantern.remove();
    }, 11000);

}

setInterval(createLantern, 1200);// Relance l'effet si la page est rechargée
window.addEventListener("load", () => {

    typingText.innerHTML = "";
    index = 0;

});

// Gestion des erreurs audio
nasheed.addEventListener("error", () => {

    console.log("Le fichier nasheed.mp3 est introuvable.");

});
