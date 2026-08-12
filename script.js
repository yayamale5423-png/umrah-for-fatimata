window.onload = () => {

const button = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const audio = document.getElementById("nasheed");

button.addEventListener("click", () => {

letter.classList.remove("hidden");

letter.scrollIntoView({
behavior:"smooth"
});

if(audio){
audio.play().catch(()=>{});
}

button.innerHTML="🤍 Qu'Allah accepte ta Omra 🤲";

button.disabled=true;

});

}
