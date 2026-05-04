const express = require('express');
const getjson = require('./datamodulejson');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/notes-json', async (req, res) => {
  getjson().then((valeur) => valeur).then((valeur2) => res.send(valeur2));
});

app.listen(port, () => {
  console.log(`Cette application web peut maintenant recevoir des requêtes: http://localhost:${port}`);
});
