// Funzioni di esempio richiamate dai pulsanti
function scegliLingua() {
  alert("Qui puoi impostare la lingua preferita.");
}

function privacy() {
  alert("Sezione Privacy e Sicurezza.");
}

function abbonamento() {
  alert("Dettagli dell’abbonamento.");
}

function helpCenter() {
  alert("Benvenuto nell’Help Center!");
}

function logout() {
  if (confirm("Sei sicuro di voler effettuare il logout?")) {
      fetch('/logout/', { method: 'POST', credentials: 'include' })
          .then(response => {
              if (response.ok) {
                  window.location.href = "/"; // Reindirizza alla home
              }
          })
          .catch(error => console.error("Errore nel logout:", error));
  }
}

function eliminaAccount() {
  if (confirm("Sei sicuro di voler eliminare il tuo account? Questa azione è irreversibile.")) {
      fetch('/delete-account/', { method: 'POST', credentials: 'include' })
          .then(response => {
              if (response.ok) {
                  alert("Account eliminato con successo.");
                  window.location.href = "/"; // Reindirizza alla home
              }
          })
          .catch(error => console.error("Errore nell'eliminazione:", error));
  }
}


