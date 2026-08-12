window.onload = () => {

    const button = document.getElementById("openBtn");
    const letter = document.getElementById("letter");
    const typingText = document.getElementById("typingText");
    const audio = document.getElementById("nasheed");

    const message = `Qu'Allah accepte ton Omra et qu'Il fasse de ce voyage un moment rempli de paix, de miséricorde et de bénédictions.

Que chacun de tes pas vers la Kaaba soit récompensé.

Je prie pour que ton cœur revienne encore plus proche d'Allah, rempli de lumière et de sérénité.

N'oublie pas de faire des douas pour ta famille, pour ceux que tu aimes… et pense aussi à moi dans tes invocations.

Qu'Allah te protège pendant tout ton voyage et te ramène saine et sauve.

Omra Moubaraka 🤍🌙`;

    button.addEventListener("click", () => {

        letter.classList.remove("hidden");

        letter.scrollIntoView({
            behavior: "smooth"
        });

        if (audio) {
            audio.play().catch(() => {});
        }

        button.innerHTML = "🤍 Qu'Allah accepte ta Omra 🤲";
        button.disabled = true;

        typingText.innerHTML = "";

        let i = 0;

        function typeWriter() {
            if (i < message.length) {
                typingText.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        }

        typeWriter();

    });

};
