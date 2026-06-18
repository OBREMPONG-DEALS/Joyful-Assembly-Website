console.log("MAIN JS LOADED");

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE MENU
    // =========================
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // =========================
    // HERO BACKGROUND SLIDER
    // =========================
    const hero = document.querySelector(".hero");

    if (hero) {

        const classes = ["bg1", "bg2", "bg3"];
        let currentIndex = 0;

        setInterval(() => {

            hero.classList.remove(...classes);

            currentIndex++;

            if (currentIndex >= classes.length) {
                currentIndex = 0;
            }

            hero.classList.add(classes[currentIndex]);

        }, 5000);
    }

    // =========================
    // SCROLL REVEAL ANIMATION
    // =========================
    const reveals = document.querySelectorAll(".reveal");

    function revealSections() {

        reveals.forEach(section => {

            const windowHeight = window.innerHeight;
            const revealTop = section.getBoundingClientRect().top;
            const revealPoint = 120;

            if (revealTop < windowHeight - revealPoint) {
                section.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // =========================
    // BACK TO TOP BUTTON
    // =========================
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }

        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    }

});
