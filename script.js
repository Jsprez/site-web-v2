// Stocker les tentatives de connexion
let loginAttempts = [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Stocker l'email et le mot de passe dans le tableau loginAttempts
    loginAttempts.push({ email: email, password: password });

    // Vérification des identifiants
    if (email === 'martinbuchardpeenaert@gmail.com' && password === '1234') {
        localStorage.setItem('loginAttempts', JSON.stringify(loginAttempts));
        window.location.href = 'liste.html'; // Redirige vers la page "liste"
    } else {
        window.location.href = 'salut.html'; // Redirige vers la page "salut"
    }
});
