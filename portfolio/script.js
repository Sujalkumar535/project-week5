// Welcome Message
window.onload = function () {
    alert("Welcome to My Portfolio Website");
};

// Change Heading Color on Click
const heading = document.querySelector("h1");

heading.addEventListener("click", function () {
    heading.style.color = "yellow";
});

// Dark Mode Toggle
const darkButton = document.querySelector("#darkModeBtn");

darkButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    // Save Theme Preference
    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");
    }
});

// Load Saved Theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");
}

// Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("input[type='text']").value.trim();

    const email = document.querySelector("input[type='email']").value.trim();

    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields");

    } else {

        alert("Form submitted successfully!");

        form.reset();
    }
});

//