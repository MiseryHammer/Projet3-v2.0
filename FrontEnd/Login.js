
////////////////////////
/// Partie 2 : Login///
//////////////////////

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Échec de la connexion');
        }
        return response.json();
    })
    .then(data => {
        // Ici, vous pouvez stocker le userId et le token comme vous le souhaitez, par exemple dans sessionStorage
        sessionStorage.setItem('userId', data.userId);
        sessionStorage.setItem('token', data.token);

        window.location.href = 'index.html'; // Redirection en cas de succès
    })
    .catch(error => {
        document.getElementById('loginError').textContent = 'Erreur de connexion. Veuillez réessayer.';
        console.error('Erreur lors de la connexion:', error);
    });
});
