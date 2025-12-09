// Q5 - College Timetable Viewer (Fetch + Dynamic Rendering)
// Run JSON Server for this question only:
//   json-server --watch db.json --port 3005

const API_BASE_Q5 = 'http://localhost:3005';

window.addEventListener('DOMContentLoaded', () => {
  const daySelect = document.getElementById('daySelect');
  const classesDiv = document.getElementById('classes');

  function renderClasses(list, day) {
    classesDiv.innerHTML = '';
    if (!list.length) {
      const msg = document.createElement('div');
      msg.className = 'no-classes';
      msg.textContent = 'No classes today.';
      classesDiv.appendChild(msg);
      return;
    }

    list.forEach(item => {
      const div = document.createElement('div');
      div.className = 'class-item';
      div.textContent = `${item.time} - ${item.subject} (Faculty: ${item.faculty})`;
      classesDiv.appendChild(div);
    });
  }

  function loadDay(day) {
    fetch(`${API_BASE_Q5}/timetable?day=${encodeURIComponent(day)}`)
      .then(res => res.json())
      .then(data => {
        renderClasses(data, day);
      });
  }

  daySelect.addEventListener('change', () => {
    loadDay(daySelect.value);
  });

  // initial load
  loadDay(daySelect.value);
});
