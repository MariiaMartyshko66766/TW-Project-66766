document.addEventListener('DOMContentLoaded', () => {
    
    const themeBtn = document.getElementById('theme-btn');
    const toggleBtn = document.getElementById('toggle-section-btn');
    const projectsSection = document.getElementById('projects-section');

    themeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('green-theme')) {
            document.body.classList.replace('green-theme', 'red-theme');
        } else {
            document.body.classList.replace('red-theme', 'green-theme');
        }
        console.log("66766: Zmieniono motyw");
    });

    toggleBtn.addEventListener('click', () => {
        projectsSection.classList.toggle('hidden');
        console.log("66766: Przełączono widoczność sekcji");
    });

});
