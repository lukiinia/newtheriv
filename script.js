// JavaScript can be used to make the 'Get Started' button scroll to a specific section
document.querySelector('.hero button').addEventListener('click', function() {
    document.querySelector('.instagram').scrollIntoView({ behavior: 'smooth' });
});

// Additional JS code can be added for interactivity, such as loading more Instagram images or initializing the map
