// Initialize Typed.js for the dynamic text effect
const typed = new Typed('.text', {
    strings: ["Web Developer", "Database Administrator", "Software Enthusiast"], // Dynamic text strings
    typeSpeed: 100, // Speed of typing
    backSpeed: 60, // Speed of backspacing
    loop: true, // Loop the animation infinitely
});

// Add smooth scrolling behavior for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = event.target.getAttribute('href').slice(1); // Get the target element's ID
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target
    });
});

// Function to handle form submission
function sendMessage() {
    // Get values from form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form fields
    if (!name || !email || !subject || !message) {
        // Show error message if any field is empty
        document.getElementById('response').innerText = "All fields are required.";
        document.getElementById('response').style.color = "red";
        return;
    }

    // Send form data to the server using Fetch API
    fetch('saveMessage.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}` // Encode the data
    })
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            if (data.status === "success") {
                // Show success message
                document.getElementById('response').innerText = "Message sent successfully!";
                document.getElementById('response').style.color = "green";

                // Clear form fields
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('subject').value = "";
                document.getElementById('message').value = "";
            } else {
                // Show error message from the server
                document.getElementById('response').innerText = data.message;
                document.getElementById('response').style.color = "red";
            }
        })
        .catch(error => {
            // Show general error message for unexpected issues
            document.getElementById('response').innerText = "An error occurred. Please try again.";
            document.getElementById('response').style.color = "red";
            console.error("Error:", error); // Log error to the console for debugging
        });
}
