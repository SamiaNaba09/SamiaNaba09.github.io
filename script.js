/* =========================
   SELECT ELEMENTS
========================= */

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section[id]");

const topBtn =
    document.getElementById("topBtn");

const contactForm =
    document.getElementById("contactForm");

const toast =
    document.getElementById("toast");


/* =========================
   MOBILE MENU
========================= */

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("open");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

function setActiveLink() {

    let current = "home";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;


        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });


    navLinks.forEach(function (link) {

        const linkSection =
            link.getAttribute("href");


        if (linkSection === "#" + current) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}


/* =========================
   SCROLL EVENT
========================= */

window.addEventListener("scroll", function () {

    setActiveLink();


    /* Back To Top */

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


/* =========================
   BACK TO TOP
========================= */

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


const revealElements =
    document.querySelectorAll(".reveal");


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================
   CONTACT FORM
========================= */

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Show success message */

        toast.classList.add("show");


        /* Clear form */

        contactForm.reset();


        /* Hide message */

        setTimeout(function () {

            toast.classList.remove("show");

        }, 2500);

    }
);


const typingText =
    document.getElementById("typing-text");





const roles = [

    "CSE Student",
    "Aspiring Developer"

];



let roleIndex = 0;

let characterIndex = 0;

let deleting = false;




const typingSpeed = 100;




const deletingSpeed = 60;




const pauseTime = 1500;


function typeWriter() {

    const currentRole =
        roles[roleIndex];


    

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        

        if (
            characterIndex ===
            currentRole.length
        ) {

            setTimeout(function () {

                deleting = true;

                typeWriter();

            }, pauseTime);

            return;
        }


        setTimeout(
            typeWriter,
            typingSpeed
        );

    }


    
    else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        

        if (characterIndex === 0) {

            deleting = false;


            

            roleIndex++;


            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;

            }


            setTimeout(
                typeWriter,
                400
            );

            return;
        }


        setTimeout(
            typeWriter,
            deletingSpeed
        );

    }

}

typeWriter();
window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});
