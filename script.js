// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'Si') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            JadeNepetaKiss(); // Display the JadeNepetaKiss.gif
        });
    } else if (option === 'No') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('No-button').innerText = 'You sure?'; 
        // Increase font size of "Si" button
        var SiButton = document.getElementById('Si-button');
        var currentFontSize = window.getComputedStyle(SiButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        SiButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Si" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the jadenepetacute.gif initially
function displayJade() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the jade image
    var jadeImage = new Image();
    // Set the source (file path) for the jade image
    jadeImage.src = 'JadeNepetaCute.gif'; // Assuming the jade image is named "jadenepetacute.gif"
    // Set alternative text for the image (for accessibility)
    jadeImage.alt = 'Jade Nepeta Cute';
    // When the jade image is fully loaded, add it to the image container
    jadeImage.onload = function() {
        imageContainer.appendChild(jadeImage);
    };
}

// Function to display the JadeNepetaKiss.gif
function JadeNepetaKiss() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var JadeNepetaKissImage = new Image();
    // Set the source (file path) for the cat-heart image
    JadeNepetaKissImage.src = 'JadeNepetaKiss.gif'; // Assuming the Jade Nepeta Kiss image is named "JadeNepetaKiss.gif"
    // Set alternative text for the image (for accessibility)
    JadeNepetaKissImage.alt = 'Jade Nepeta Kiss';
    // When the Jade Nepeta Kiss image is fully loaded, add it to the image container
    JadeNepetaKissImage.onload = function() {
        imageContainer.appendChild(JadeNepetaKissImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the JadeNepetaCute.gif initially
displayJade();
