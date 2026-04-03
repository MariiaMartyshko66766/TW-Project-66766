// Martyshko Mariia 66766

console.log("66766: Skrypt podłączony poprawnie!");

document.addEventListener('DOMContentLoaded', () => {
    
    // --- ZADANIE 7: Przywracanie motywu z localStorage ---
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        console.log("66766: Przywrócono motyw z pamięci: " + savedTheme);
    }

    const themeBtn = document.getElementById('theme-btn');
    const toggleBtn = document.getElementById('toggle-section-btn');
    const projectsSection = document.getElementById('projects-section');

    // --- ZADANIE 4: Motyw i widoczność ---
    if (themeBtn) {
        themeBtn.onclick = () => {
            document.body.classList.toggle('red-theme');
            document.body.classList.toggle('green-theme');
            
            // Zapis do localStorage (Zadanie 7)
            const currentTheme = document.body.className;
            localStorage.setItem('selected-theme', currentTheme);
            console.log("66766: Motyw zapisany");
        };
    }

    if (toggleBtn) {
        toggleBtn.onclick = () => {
            projectsSection.classList.toggle('hidden');
            console.log("66766: Przełączono widoczność sekcji");
        };
    }

    // --- ZADANIE 5 & 8: Formularz, Walidacja i wysyłka POST ---
    const contactForm = document.getElementById('contact-form');
    const errorMsg = document.getElementById('error-msg');

    if (contactForm) {
        contactForm.onsubmit = function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Walidacja (Zadanie 5)
            if (!name || !email || !message) {
                errorMsg.textContent = "Błąd: Wypełnij wszystkie pola! (66766)";
                return;
            }

            if (/\d/.test(name)) {
                errorMsg.textContent = "Błąd: Imię nie może mieć cyfr! (66766)";
                return;
            }

            errorMsg.textContent = "";

            // Wysyłka POST do API (Zadanie 8)
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: name,
                    body: message,
                    userId: 66766,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log("66766: Sukces POST (Zadanie 8):", json);
                alert("Sukces 66766! Forma wysłana na serwer (POST).");
                contactForm.reset();
            })
            .catch(err => console.error("66766 POST Error:", err));
        };
    }

    // --- ZADANIE 6: Pobieranie danych z lokalnego JSON ---
    const skillsList = document.getElementById('skills-list');

    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error("Błąd ładowania pliku JSON");
            return response.json();
        })
        .then(data => {
            console.log("66766: Dane z JSON załadowane:", data);
            skillsList.innerHTML = ""; 

            data.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
        })
        .catch(err => {
            console.error("66766 JSON Error:", err);
            skillsList.innerHTML = "<li>Nie udało się załadować umiejętności.</li>";
        });

    // --- ZADANIE 8: Pobieranie danych z zewnętrznego API (GET) ---
    const apiDataDiv = document.getElementById('api-data');

    fetch('https://jsonplaceholder.typicode.com/todos/1') 
        .then(response => {
            if (!response.ok) throw new Error("Błąd API zewnętrznego");
            return response.json();
        })
        .then(item => {
            console.log("66766: Dane GET otrzymane:", item);
            apiDataDiv.innerHTML = `
                <div style="border: 1px dashed #ccc; padding: 10px; margin-top: 10px;">
                    <p><strong>Zadanie z serwera:</strong> ${item.title}</p>
                    <p><strong>Status:</strong> ${item.completed ? "Zakończone ✅" : "W trakcie ⏳"}</p>
                    <small>Dane pobrane dla indeksu: 66766</small>
                </div>
            `;
        })
        .catch(err => {
            console.error("66766 API GET Error:", err);
            apiDataDiv.innerHTML = "<p>Nie udało się pobrać danych z serwera.</p>";
        });
});
