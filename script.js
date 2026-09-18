/* ==================================================
   NSS BLOOD DONOR NETWORK
   MAIN JAVASCRIPT
================================================== */


/* ================= MOBILE MENU ================= */

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (!menu) return;
    menu.classList.toggle("show");
}

function closeMenu() {
    const menu = document.getElementById("mobileMenu");
    if (!menu) return;
    menu.classList.remove("show");
}


/* ================= CAROUSEL ================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const carousel = document.getElementById("carousel");

let currentSlide = 0;
let autoSlide = null;

function showSlide(index) {
    if (!slides.length) return;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");

    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
    restartCarousel();
}

function restartCarousel() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        nextSlide();
    }, 4000);
}

/* Start carousel */
if (slides.length > 0) {
    showSlide(0);
    restartCarousel();
}


/* ================= TOUCH SWIPE ================= */

let startX = 0;
let endX = 0;

if (carousel) {
    carousel.addEventListener(
        "touchstart",
        function (event) {
            startX = event.changedTouches[0].screenX;
        },
        { passive: true }
    );

    carousel.addEventListener(
        "touchend",
        function (event) {
            endX = event.changedTouches[0].screenX;

            const distance = endX - startX;
            if (Math.abs(distance) < 50) return;

            if (distance < 0) {
                nextSlide();
            } else {
                previousSlide();
            }

            restartCarousel();
        },
        { passive: true }
    );
}


/* ================= PAUSE CAROUSEL ================= */

if (carousel) {
    carousel.addEventListener("mouseenter", function () {
        clearInterval(autoSlide);
    });

    carousel.addEventListener("mouseleave", function () {
        restartCarousel();
    });
}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.12 }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}


/* ================= HOME ================= */

function goHome() {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveNav(0);
}


/* ================= ABOUT ================= */

/* ================= ABOUT ================= */
/* Opens the dedicated About page */

function showAbout() {
    window.location.href = "about.html";
}


/* ================= NAVIGATION ACTIVE ================= */

function setActiveNav(index) {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function (item) {
        item.classList.remove("active");
    });

    if (navItems[index]) {
        navItems[index].classList.add("active");
    }
}


/* ================= FIND DONOR ================= */
/* Workflow: index → login.html → find.html */

function findDonor() {
    window.location.href = "login.html";
}


/* ================= BECOME DONOR ================= */

function becomeDonor() {
    window.location.href = "donor.html";
}


/* ================= REQUEST BLOOD ================= */

function requestBlood() {
    window.location.href = "request.html";
}


/* ================= DOWNLOAD CERTIFICATE ================= */
/* Placeholder — will be implemented later */

function downloadCertificate() {
    window.location.href = "certificate.html";
}


/* ================= ABOUT THIS NETWORK ================= */
/* Placeholder — will be implemented later */

function aboutNetwork() {
    window.location.href = "about.html";
}


/* ================= DONOR GUIDELINES ================= */
/* Placeholder — will be implemented later */

function donorGuidelines() {
    window.location.href = "guidelines.html";
}


/* ================= CLOSE MENU ON OUTSIDE CLICK ================= */

document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobileMenu");
    const menuButton = document.querySelector(".menu-btn");

    if (!menu) return;

    if (
        menu.classList.contains("show") &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        closeMenu();
    }
});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});