const roles = ["Python Developer", "Web Developer", "Flask Learner"];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    let element = document.getElementById("typing");
    if (!element) return;

    current = roles[i];

    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    element.innerHTML = current.substring(0, j);

    // Typing speed
    let speed = isDeleting ? 50 : 100;

    // When word is fully typed
    if (!isDeleting && j === current.length) {
        speed = 1200; // pause before deleting
        isDeleting = true;
    }
    // When fully deleted
    else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
        speed = 300; // pause before next word
    }

    setTimeout(type, speed);
}

window.onload = type;

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}