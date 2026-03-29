const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMsg = document.getElementById('error-msg');

    if (/\d/.test(name)) {
        errorMsg.textContent = "Imię i nazwisko nie mogą zawierać cyfr! (Indeks: 66766)";
        return;
    }
    
    alert("Formularz wysłany poprawnie przez 66766!");
});
