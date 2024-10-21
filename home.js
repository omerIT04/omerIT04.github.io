// Get the lightbox element and the close button
const lightbox = document.getElementById('lightbox'); // Get the lightbox container by its ID
const lightboxImage = document.getElementById('lightbox-image'); // Get the image element inside the lightbox by its ID
const closeButton = document.querySelector('.close'); // Get the close button element inside the lightbox by its class

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery a'); // Select all anchor tags within the gallery container

// Add event listeners to each gallery image
galleryImages.forEach((gallery) => {
    gallery.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default behavior of the anchor element (prevent link navigation)
        console.log("Image clicked:", gallery.href); // Log the URL of the clicked image to the console
        lightbox.style.display = 'block'; // Display the lightbox
        lightboxImage.src = gallery.href; // Set the source of the lightbox image to the clicked gallery image's href
    });
});

// Close the lightbox when the close button is clicked
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) { // Check if the clicked target is the lightbox itself (and not the image)
        lightbox.style.display = 'none'; // Hide the lightbox
    }
});

function toggleAnswer(element) {
    var answer = element.nextElementSibling; // Get the next sibling element of the clicked element (presumably an answer)
    if (answer.style.display === "none") { // Check if the answer is currently hidden
      answer.style.display = "block"; // Show the answer if it's hidden
    } else {
      answer.style.display = "none"; // Hide the answer if it's visible
    }
}

// Generate 300 star elements and append them to the body
for (let i = 0; i < 300; i++) {
    let star = document.createElement('div'); // Create a new div element
    star.className = 'stars'; // Assign it the class 'stars'
    star.style.top = `${Math.random() * 100}vh`; // Set a random vertical position within the viewport height
    star.style.left = `${Math.random() * 100}vw`; // Set a random horizontal position within the viewport width
    document.body.appendChild(star); // Append the star element to the body of the document
}

let currentImageIndex = 0; // Initialize the current image index to 0
const images = document.querySelectorAll('.gallery img'); // Select all img elements within the gallery

function openLightbox(index) {
    currentImageIndex = index; // Set the current image index to the passed index
    document.querySelector('.lightbox-content').src = images[index].src; // Set the lightbox image source to the selected image's source
    document.querySelector('.lightbox').style.display = 'block'; // Display the lightbox
}

function closeLightbox() {
    document.querySelector('.lightbox').style.display = 'none'; // Hide the lightbox
}

function changeImage(direction) {
    currentImageIndex += direction; // Increment or decrement the current image index based on the direction

    // Loop back to the first image or last image if the end or start is reached
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // If the index exceeds the total number of images, reset to the first image
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // If the index is less than 0, set it to the last image
    }

    document.querySelector('.lightbox-content').src = images[currentImageIndex].src; // Update the lightbox image source to the new image
}

document.querySelectorAll('.navbar a, .contact, .logo, .about, .prices').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById("meowSound").play();
    });
});