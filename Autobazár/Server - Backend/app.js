const express = require('express');
const app = express();
const PORT = 8000;

// Middleware pro zpracování JSON těla requestů (volitelné, ale užitečné)
app.use(express.json());

// Základní routa
app.get('/', (req, res) => {
    res.send('Vítej na mém Express serveru!');
});

// Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server běží na portu ${PORT}`);
});