document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.sifa-nav-list');
    
    hamburger.addEventListener('click', function() {
        // Toggle hamburger animation
        hamburger.classList.toggle('active');
        
        // Toggle navigation menu
        navList.classList.toggle('show');
    });
    
    // Close menu when clicking on a nav link (for mobile)
    const navLinks = document.querySelectorAll('.sifa-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('show');
        });
    });
    
    // Close menu when clicking outside (optional)
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navList.contains(event.target)) {
            hamburger.classList.remove('active');
            navList.classList.remove('show');
        }
    });
});