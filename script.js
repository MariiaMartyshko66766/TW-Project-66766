document.addEventListener('DOMContentLoaded', () => {
    console.log("Skrypt załadowany dla indeksu: 66766");

    const themeBtn = document.getElementById('theme-btn');
    const toggleBtn = document.getElementById('toggle-section-btn');
    const projectsSection = document.getElementById('projects-section');

    themeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('green-theme')) {
            document.body.classList.replace('green-theme', 'red-theme');
            console.log("66766: Zmieniono motyw na czerwony");
        } else {
            document.body.classList.replace('red-theme', 'green-theme');
            console.log("66766: Zmieniono motyw na zielony");
        }
    });

    toggleBtn.addEventListener('click', () => {
        projectsSection.classList.toggle('hidden');
        
        if (projectsSection.classList.contains('hidden')) {
            console.log("66766: Sekcja Projekty została ukryta");
        } else {
            console.log("66766: Sekcja Projekty jest widoczna");
        }
    });
});
