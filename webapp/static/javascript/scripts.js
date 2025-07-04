document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        console.log('Email:', email);
        console.log('Password:', password);
        // Qui potresti aggiungere una chiamata a un server per verificare le credenziali
        alert('Login effettuato con successo!');
    } else {
        alert('Per favore, inserisci entrambi, email e password.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Le password non corrispondono!');
        return;
    }
    // Se tutto è corretto, procedi con l'invio del form o altro
    alert('Registrazione completata con successo!');
});


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.9028, lng: 12.4964}, // Coordinata di Roma
        zoom: 8
    });
}

document.getElementById('search-btn').addEventListener('click', function() {
    alert('Funzione di ricerca non ancora implementata.');
});

document.getElementById('filter-btn').addEventListener('click', function() {
    alert('Funzione di filtro non ancora implementata.');
});
                                                                                        