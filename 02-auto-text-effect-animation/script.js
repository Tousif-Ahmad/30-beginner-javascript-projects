const roleEl = document.querySelector(".role");
const carriers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];

let carrierIndex = 0;
let characterIndex = 0;

function updateText() {
    const currentWord = carriers[carrierIndex];
    characterIndex++;

    // Update only the text content of the span
    roleEl.textContent = currentWord.slice(0, characterIndex);

    // If word is finished, move to next word
    if (characterIndex === currentWord.length) {
        carrierIndex = (carrierIndex + 1) % carriers.length; // Loop back to 0 automatically
        characterIndex = 0;
        // Pause slightly longer at the end of a word
        setTimeout(updateText, 1000); 
    } else {
        setTimeout(updateText, 600);
    }
}

updateText();