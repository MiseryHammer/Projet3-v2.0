//////////////////////////////////////////////////////////////////////////////
 /////////////////////JavaScript realise par Florent Camus //////////////////
 ////////////////////pour la creation de site Sophie Bluel//////////////////
 //////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////
/// Partrie 1 : chargement de la gallerie photo///
/////////////////////////////////////////////////


// Fonction pour charger les données depuis l'API
function loadGallery() {
    fetch('http://localhost:5678/api/works')
        .then(response => response.json())
        .then(data => {
            displayPhotos(data);
        })
        .catch(error => console.error('Erreur lors du chargement des photos:', error));
}

// Fonction pour afficher les photos
function displayPhotos(data) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Efface la galerie actuelle

    data.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.imageUrl;
        img.alt = photo.title;
        img.classList.add('photo', photo.category.name.replace(/\s+/g, '')); // Remplace les espaces pour la classe

        gallery.appendChild(img);
    });
}

// Fonction de filtrage de la galerie
function filterGallery(category) {
    const formattedCategory = category.replace(/\s+/g, '');
    const photos = document.querySelectorAll('.gallery .photo');
    photos.forEach(photo => {
        if (category === 'Tous' || photo.classList.contains(formattedCategory)) {
            photo.style.display = '';
        } else {
            photo.style.display = 'none';
        }
    });
}

// Charge initialement la galerie
loadGallery();



