export default function createReportObject(employeesList) {
  const reports = {}; // Holds the report data

  reports.allEmployees = employeesList; // set the allEmployees property
  reports.getNumberOfDepartments = (employeesList) => {
    // Declare a variable to hold the names of departments
    const departmentNames = Object.keys(employeesList);
    // Declare a variable to hold the numbers of departments
    const departmentNumber = departmentNames.length;

    return departmentNumber;
  };
  return reports;
}
