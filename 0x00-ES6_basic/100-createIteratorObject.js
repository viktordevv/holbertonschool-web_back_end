export default function createIteratorObject(report) {
  const workers = [];
  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employe of employees) {
      workers.push(employe);
    }
  }

  return workers;
}
