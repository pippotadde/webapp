document.addEventListener('DOMContentLoaded', () => {
  // — Popolamento dropdown data di nascita —
  const daySelect   = document.getElementById('birthDay');
  const monthSelect = document.getElementById('birthMonth');
  const yearSelect  = document.getElementById('birthYear');

  // 1) Giorni 1–31
  for (let i = 1; i <= 31; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = String(i).padStart(2, '0');
    daySelect.appendChild(opt);
  }

  // 2) Mesi in italiano
  const monthNames = [
    'Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
    'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'
  ];
  monthNames.forEach((m, idx) => {
    const opt = document.createElement('option');
    opt.value = idx + 1;
    opt.textContent = m;
    monthSelect.appendChild(opt);
  });

  // 3) Anni dal 2025 a 1925
  for (let y = 2025; y >= 2025 - 100; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }

  // Animazione di fade-in per il container del form
  const container = document.querySelector('.register-container');
  if (container) {
    container.style.opacity = 0;
    container.style.transition = 'opacity 1s';
    setTimeout(() => container.style.opacity = 1, 100);
  }

  // – filtro in tempo reale: solo cifre per il telefono –
  const phoneInput = document.getElementById('phoneNumber');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '');
    });
  }

  // – dropdown data: più corte e apertura verso il basso –
  // —————— Apri solo la tendina attiva ——————
  const selects = [daySelect, monthSelect, yearSelect];

  selects.forEach(sel => {
    sel.addEventListener('focus', () => {
      // Chiudi tutte prima
      selects.forEach(s => {
        if (s !== sel) s.size = 1;
      });
      // Apri solo quella attiva
      sel.size = 5;
    });
    sel.addEventListener('blur', () => {
      sel.size = 1;       // chiudi al blur
    });
    sel.addEventListener('change', () => {
      sel.blur();         // chiudi anche al cambio
    });
  });
});


// VALIDAZIONE E ASSEMBLAGGIO DATA AL SUBMIT
const form = document.getElementById('registerForm');
if (form) {
  form.addEventListener('submit', function(event) {
    // – validazione telefono: solo cifre –
    const phone = document.getElementById('phoneNumber').value;
    if (!/^\d+$/.test(phone)) {
      alert('Inserisci un numero di telefono valido (solo cifre).');
      event.preventDefault();
      return;
    }

    const day   = parseInt(document.getElementById('birthDay').value, 10);
    const month = parseInt(document.getElementById('birthMonth').value, 10);
    const year  = parseInt(document.getElementById('birthYear').value, 10);

    // Controllo che tutti e tre i campi siano selezionati
    if (!day || !month || !year) {
      alert('Seleziona giorno, mese e anno della tua data di nascita.');
      event.preventDefault();
      return;
    }
    
    const dateObj = new Date(year, month - 1, day);

    // Verifica che la data sia valida (es. 30 febbraio non esiste) e non futura
    if (
      dateObj.getFullYear() !== year ||
      dateObj.getMonth() + 1   !== month ||
      dateObj.getDate()        !== day ||
      dateObj > new Date()
    ) {
      alert('Data di nascita non valida.');
      event.preventDefault();
      return;
    }

    // Imposta il campo nascosto per l’invio al server (formato gg/mm/aaaa)
    document.getElementById('birthdate').value =
      `${String(day).padStart(2,'0')}/${String(month).padStart(2,'0')}/${year}`;

    // Qui puoi aggiungere eventuali altre validazioni (password, email, consenso...)
    // Se tutto OK, il form verrà inviato normalmente
  });
}
