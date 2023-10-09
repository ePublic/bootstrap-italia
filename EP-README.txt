Nostre modifiche alla libreria:

<<<<<<< HEAD
- il file roolup.config.js contiene i nomi dei file da creare per le varie combinazioni di colori, in caso sia necessario un nuovo colore va aggiunta una nuova configurazione
=======
- il file rollup.config.js contiene i nomi dei file da creare per le varie combinazioni di colori, in caso sia necessario un nuovo colore va aggiunta una nuova configurazione
>>>>>>> 9f4cc9d007186bd67cbec250bbb9cea8f24dc023

- per ogni nuova combinazione di colori va aggiunto un file nella cartella src\scss con il nome della combinazione (lo stesso che va inserito in roolup.config.js), il file contiene
la definizione del colore e l'import del scss della libreria, esempio:

$primary-h: 240;
$primary-s: 100;
$primary-b: 48;

@import '../../src/scss/bootstrap-italia-comuni.scss';



Come ricompilare la libreria:

1. Effettuare rebase sulla changelist di rilascio
2. Per ricompilare eseguire nella root:

   npm run build

3. Copiare i file della libreria nel progetto ComWeb2022