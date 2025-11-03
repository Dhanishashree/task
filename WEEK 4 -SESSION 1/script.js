let employees = [
  { id: 1, name: "Kavi", position: "Developer", salary: 50000, department: "IT", available: true },
  { id: 2, name: "Ravi", position: "Designer", salary: 45000, department: "Design", available: true },
  { id: 3, name: "Priya", position: "HR", salary: 40000, department: "HR", available: false }
];

let empIdCounter = employees.length + 1;

// Display all employees initially
window.onload = () => showAllEmployees();

// Add new employee
document.getElementById("employeeForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("empName").value;
  const position = document.getElementById("empPosition").value;
  const salary = parseFloat(document.getElementById("empSalary").value);
  const department = document.getElementById("empDepartment").value;
  const available = document.getElementById("empAvailable").value === "true";

  employees.push({ id: empIdCounter++, name, position, salary, department, available });

  e.target.reset();
  showAllEmployees();
});

// Show all employees
function showAllEmployees() {
  const list = document.getElementById("employeeList");
  list.innerHTML = "";

  employees.forEach(emp => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.position}</td>
      <td>${emp.salary}</td>
      <td>${emp.department}</td>
      <td>${emp.available ? "✅" : "❌"}</td>
      <td>
        <button onclick="removeEmployee(${emp.id})">🗑 Remove</button>
        <button onclick="toggleAvailability(${emp.id})">🔄 Availability</button>
      </td>
    `;
    list.appendChild(row);
  });
}

// Remove employee by ID
function removeEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  showAllEmployees();
}

// Toggle availability
function toggleAvailability(id) {
  const emp = employees.find(e => e.id === id);
  if (emp) emp.available = !emp.available;
  showAllEmployees();
}

// Search employee
function searchEmployee() {
  const term = document.getElementById("searchBox").value.toLowerCase();
  const filtered = employees.filter(e => e.name.toLowerCase().includes(term));

  const list = document.getElementById("employeeList");
  list.innerHTML = "";

  filtered.forEach(emp => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.position}</td>
      <td>${emp.salary}</td>
      <td>${emp.department}</td>
      <td>${emp.available ? "✅" : "❌"}</td>
      <td>
        <button onclick="removeEmployee(${emp.id})">🗑 Remove</button>
        <button onclick="toggleAvailability(${emp.id})">🔄 Availability</button>
      </td>
    `;
    list.appendChild(row);
  });
}

// Calculate total salary of available employees
function calculateTotalSalary() {
  const total = employees
    .filter(e => e.available)
    .reduce((sum, e) => sum + e.salary, 0);

  alert(`Total Salary of Available Employees: ₹${total}`);
}

// Department-wise report
function generateDepartmentReport() {
  const report = {};

  employees.forEach(e => {
    if (!report[e.department]) report[e.department] = 0;
    report[e.department] += e.salary;
  });

  let output = "Department-wise Salary Report:\n";
  for (let dept in report) {
    output += `${dept}: ₹${report[dept]}\n`;
  }

  alert(output);
}

// Sort employees by salary
function sortEmployeesBySalary(order) {
  employees.sort((a, b) => order === "asc" ? a.salary - b.salary : b.salary - a.salary);
  showAllEmployees();
}