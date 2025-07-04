const codeInputs = document.querySelectorAll('.code-input');

// Aggiungi eventi a ogni input
codeInputs.forEach((input, index) => {
    // Evento per spostarsi automaticamente al prossimo input
    input.addEventListener('input', () => {
        const value = input.value.replace(/[^0-9]/g, ''); // Permetti solo numeri
        input.value = value.slice(0, 1); // Consenti solo un carattere per input

        if (value && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus(); // Spostati al prossimo input
        }
    });

    // Evento per tornare indietro con il tasto Backspace
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && input.value === '') {
            codeInputs[index - 1].focus(); // Torna all'input precedente
        }
    });

    // Seleziona automaticamente il contenuto quando l'input viene focalizzato
    input.addEventListener('focus', () => {
        input.select();
    });
});
