Nostre modifiche alla libreria:

- file personalizzato ep-bootstrap-italia.scss che importa _variables-ep.scss
- file personalizzato _variables-ep.scss che contiene i nostri colori

NOTA: in caso di aggiornamento verificare le modifiche fatte nei file originali bootstrap-italia.scss e _variables.scss ed inserirle in quelli personalizzati ep.

- il file rollup.config.mjs contiene i nomi dei file da creare per le varie combinazioni di colori, in caso sia necessario un nuovo colore va aggiunta una nuova configurazione

- per ogni nuova combinazione di colori va aggiunto un file nella cartella src\scss con il nome della combinazione (lo stesso che va inserito in rollup.config.mjs), il file contiene
la definizione del colore e l'import del scss della libreria, esempio:

$primary-h: 240;
$primary-s: 100;
$primary-b: 48;

@import '../../src/scss/ep-bootstrap-italia.scss';



Come ricompilare la libreria:

1. Effettuare merge into current branch sulla changelist di rilascio
2. Per ricompilare eseguire nella root:

   npm run build

3. Copiare i file della libreria nel progetto ComWeb2022