const themeBtn = document.getElementById('theme-btn');
const toggleBtn = document.getElementById('toggle-section-btn');
const projectsSection = document.getElementById('projects-section');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('red-theme');
    document.body.classList.toggle('green-theme');
    console.log("66766: Zmieniono motyw");
});

toggleBtn.addEventListener('click', () => {
    if (projectsSection.style.display === "none") {
        projectsSection.style.display = "block";
    } else {
        projectsSection.style.display = "none";
    }
});
