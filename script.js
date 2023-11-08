const darkswitch = document.getElementById("buttondarkmode");

// Add event listener to the button
darkswitch.addEventListener("click", () => {
    // Toggle the "dark" class on the body element
    document.body.classList.toggle("dark");
});

//hamburger

const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger");

// Add event listener to the hamburger icon
hamburgerIcon.addEventListener("click", () => {
    // Toggle the display of the hamburger menu
    if (hamburgerMenu.style.display === "none" || !hamburgerMenu.style.display) {
        hamburgerMenu.style.display = "flex";
    } else {
        hamburgerMenu.style.display = "none";
    }
});




// Get references to the image and buttons
const image = document.getElementById("gitaar");
const button1 = document.getElementById("blauw");
const button2 = document.getElementById("groen");

// Add event listeners to the buttons
button1.addEventListener("click", () => {
    // Change the image source when button 1 is clicked
    image.src = "images/blauw.png";
    image.alt = "Blauwe fender";
});

button2.addEventListener("click", () => {
    // Change the image source when button 2 is clicked
    image.src = "images/groen.png";
    image.alt = "groene fender";
});