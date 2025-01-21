// Initialize Typed.js for the dynamic text
const typed = new Typed('.text', {
    strings: ["Web Developer", "Database Administrator", "Software Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
