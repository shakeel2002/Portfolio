var typed = new Typed('.text', {
    strings: ["Frontend Developer", "Designer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Validate form fields
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name || !email || !subject || !message) {
            responseMessage.textContent = 'Please fill in all fields.';
            return;
        }

        // Submit form (you can replace this with your actual submission logic)
        // For demonstration purposes, we're just logging the form data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Display confirmation message
        responseMessage.textContent = 'Your message has been sent!';
        contactForm.reset();
    });
});
