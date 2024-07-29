export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  // use iterator from reportWithIterator to traverse through
  // all employees
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }
  // collect all employees into a string seperated by |
  return employees.join(' | ');
}
