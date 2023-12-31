document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:5678/api/works'; // Remplacez par l'URL réelle de votre API

    function fetchProjects() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(projects => {
                const gallery = document.querySelector('.gallery');
                gallery.innerHTML = ''; // Nettoie les contenus statiques s'il y en a

                projects.forEach(project => {
                    const projectElement = document.createElement('figure');
                    projectElement.innerHTML = `
                        <img src="${project.image}" alt="${project.title}">
                        <figcaption>${project.title}</figcaption>
                    `;
                    gallery.appendChild(projectElement);
                });
            })
            .catch(error => console.error('Erreur lors de la récupération des projets:', error));
    }

    fetchProjects();
});



document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:5678/api/works';

    function fetchProjects() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(projects => {
                updateGallery(projects);
            })
            .catch(error => console.error('Erreur lors de la récupération des projets:', error));
    }

    function updateGallery(projects) {
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = ''; // Nettoyer la galerie

        projects.forEach(project => {
            const projectElement = document.createElement('figure');
            projectElement.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}">
                <figcaption>${project.title}</figcaption>
            `;
            gallery.appendChild(projectElement);
        });
    }

    fetchProjects();


   

});


let allProjects = [];

function fetchProjects() {
    fetch('http://localhost:5678/api/works')
        .then(response => response.json())
        .then(projects => {
            allProjects = projects;
            filterGallery('Tous'); // Affiche tous les projets par défaut
        })
        .catch(error => console.error('Erreur lors de la récupération des projets:', error));
}

function updateGallery(projects) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Nettoyer la galerie

    projects.forEach(project => {
        const projectElement = document.createElement('figure');
        projectElement.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <figcaption>${project.title}</figcaption>
        `;
        gallery.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchProjects);

function filterGallery(categoryName) {
    let filteredProjects;

    if (categoryName === 'Tous') {
        filteredProjects = allProjects;
    } else {
        filteredProjects = allProjects.filter(project => project.category.name === categoryName);
    }

    updateGallery(filteredProjects);
}
