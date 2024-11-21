document.addEventListener('DOMContentLoaded', function () {
    const logoImage = document.getElementById('logoImage');

    // Add animation delay for the text and logo
    setTimeout(() => {
        logoImage.style.opacity = 1;
    }, 2000); // This matches the logo's fade-in duration

    // Add hover animation effect to the logo
    logoImage.addEventListener('mouseenter', () => {
        logoImage.style.transform = 'scale(1.1)';
        logoImage.style.filter = 'brightness(1.2)';
    });

    logoImage.addEventListener('mouseleave', () => {
        logoImage.style.transform = 'scale(1)';
        logoImage.style.filter = 'brightness(1)';
    });
});
