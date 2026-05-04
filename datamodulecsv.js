const db = require('./modules/db');

async function getcsv() {
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

  const dresults = {};
  for (let r = 0; r < results.length; r += 1) {
    dresults[results[r].note] = 100 - results[r].note;
  }

  const cvsHeader = ['nom_etudiant', 'nom_evaluation', 'note'];

  const csvRows = [cvsHeader, ...results.map((row) => {
    const array = [dstudents[row.student_id], devaluations[row.eval_id], row.note];
    return array.join(';');
  })];

  const csvData = csvRows.join('\n');

  return (csvData);
}

getcsv()
  .then((valeur) => console.log(valeur))
  .finally(() => db.destroy());

module.exports = getcsv;
