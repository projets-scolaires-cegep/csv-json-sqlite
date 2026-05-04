const express = require('express');
const getcsv = require('./datamodulecsv');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/notes-csv', async (req, res) => {
  // 1ère partie: faites votre requête SQL pour aller chercher la liste des données
  // La requête suivante est incomplète car elle ne récupère pas toutes les colonnes voulues!

  // 2e partie: construction du cvs
  // Attention! Vous devez adapter le script aux données voulues!
  getcsv().then((valeur) => (valeur)).then((valeur2) => res
    .attachment('resultat.csv') // Que fait cette méthode?? répondez ici!// Reponse: elle spécifie que la réponse doit être envoyée comme un fichier(csv dans ce cas-ci) et non une page web
    .send(valeur2));
});

app.listen(port, () => {
  console.log(`Cette application web peut maintenant recevoir des requêtes: http://localhost:${port}`);
});
