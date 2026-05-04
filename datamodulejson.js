const db = require('./modules/db');

async function getjson() {
  const students = await db('students');
  const evaluations = await db('evaluations');
  const results = await db('results');

  const dstudents = {};
  for (let s = 0; s < students.length; s += 1) {
    dstudents[students[s].id] = `${students[s].first_name} ${students[s].last_name}`;
  }

  const devaluations = {};
  for (let e = 0; e < evaluations.length; e += 1) {
    devaluations[evaluations[e].id] = `${evaluations[e].name}`;
  }

  const contenu = [];
  for (let c = 0; c < results.length; c += 1) {
    if (results[c + 1] === undefined) {
      contenu.push(
        `{"nom_etudiant":"${dstudents[results[c].student_id]}","nom_evaluation":"${devaluations[results[c].eval_id]}","note":"${results[c].note}"}`,
      );
    } else {
      contenu.push(
        `{"nom_etudiant":"${dstudents[results[c].student_id]}","nom_evaluation":"${devaluations[results[c].eval_id]}","note":"${results[c].note}"}`,
      );
    }
  }
  const lignes = `{"donnees":[${contenu.map((l) => l)}]}`;

  const test = JSON.parse(lignes);

  const resultat = JSON.stringify(test);

  return (resultat);
}

getjson()
  .then((valeur) => console.log(valeur))
  .finally(() => db.destroy());

module.exports = getjson;
