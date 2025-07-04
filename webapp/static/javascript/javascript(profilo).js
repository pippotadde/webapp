document.getElementById('description').addEventListener('input', (event) => {
    console.log("Descrizione aggiornata:", event.target.value);
});

document.getElementById('liked-posts').addEventListener('click', () => {
    alert("Naviga ai Posti Piaciuti!");
});

document.getElementById('comments').addEventListener('click', () => {
    alert("Naviga ai Commenti!");
});

document.getElementById('settings').addEventListener('click', () => {
    alert("Naviga alle Impostazioni!");
});

document.addEventListener("DOMContentLoaded", () => {
    const editButton = document.getElementById("edit-profile-picture"); // Pulsante "+"
    const modal = document.getElementById("edit-modal"); // Modal nascosto
    const cancelButton = document.getElementById("cancel-edit"); // Pulsante "Annulla"

    // Mostra il modal quando clicchi sul pulsante "+"
    editButton.addEventListener("click", () => {
        console.log("Pulsante + cliccato");
        modal.classList.remove("hidden"); // Rimuove la classe 'hidden' per mostrare il modal
        console.log("Classe 'hidden' rimossa dal modal.");
    });

    // Nascondi il modal quando clicchi su "Annulla"
    cancelButton.addEventListener("click", () => {
        console.log("Annulla cliccato");
        modal.classList.add("hidden"); // Aggiunge la classe 'hidden' per nascondere il modal
    });
});
