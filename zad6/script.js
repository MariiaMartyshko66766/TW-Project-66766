fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('skills-list');
        data.skills.forEach(skill => {
            let li = document.createElement('li');
            li.textContent = skill;
            list.appendChild(li);
        });
        console.log("Dane załadowane dla: " + data.index);
    });
