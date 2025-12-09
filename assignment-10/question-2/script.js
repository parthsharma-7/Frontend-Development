// Q2 - Employee Status Dashboard (XMLHttpRequest + PATCH)
// Run JSON Server for this question only:
//   json-server --watch db.json --port 3002

const API_BASE_Q2 = 'http://localhost:3002';

function loadEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', API_BASE_Q2 + '/employees');
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const employees = JSON.parse(xhr.responseText);
      renderEmployees(employees);
    }
  };
  xhr.send();
}

function renderEmployees(employees) {
  const tbody = document.getElementById('employeeBody');
  tbody.innerHTML = '';
  employees.forEach(emp => {
    const tr = document.createElement('tr');

    const idTd = document.createElement('td');
    idTd.textContent = emp.id;

    const nameTd = document.createElement('td');
    nameTd.textContent = emp.name;

    const statusTd = document.createElement('td');
    statusTd.textContent = emp.status;
    statusTd.className = emp.status === 'active' ? 'status-active' : 'status-inactive';

    const toggleTd = document.createElement('td');
    const btn = document.createElement('button');
    btn.textContent = 'Toggle';
    btn.addEventListener('click', () => toggleStatus(emp, statusTd));
    toggleTd.appendChild(btn);

    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(statusTd);
    tr.appendChild(toggleTd);

    tbody.appendChild(tr);
  });
}

function toggleStatus(emp, statusCell) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = '';

  const previousStatus = emp.status;
  const newStatus = previousStatus === 'active' ? 'inactive' : 'active';

  // Optimistic UI update
  emp.status = newStatus;
  statusCell.textContent = newStatus;
  statusCell.className = newStatus === 'active' ? 'status-active' : 'status-inactive';

  const xhr = new XMLHttpRequest();
  xhr.open('PATCH', `${API_BASE_Q2}/employees/${emp.id}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (!(xhr.status >= 200 && xhr.status < 300)) {
      // Revert UI on failure
      emp.status = previousStatus;
      statusCell.textContent = previousStatus;
      statusCell.className = previousStatus === 'active' ? 'status-active' : 'status-inactive';
      errorDiv.textContent = 'Failed to update status. Please try again.';
    }
  };
  xhr.onerror = function () {
    emp.status = previousStatus;
    statusCell.textContent = previousStatus;
    statusCell.className = previousStatus === 'active' ? 'status-active' : 'status-inactive';
    errorDiv.textContent = 'Network error while updating status.';
  };
  xhr.send(JSON.stringify({ status: newStatus }));
}

window.addEventListener('DOMContentLoaded', loadEmployees);
