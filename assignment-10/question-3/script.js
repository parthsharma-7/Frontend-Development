// Q3 - Task Manager With Filters (jQuery AJAX + Query Params)
// Run JSON Server for this question only:
//   json-server --watch db.json --port 3003

const API_BASE_Q3 = 'http://localhost:3003';

$(function () {
  const $taskList = $('#taskList');
  const $filterSelect = $('#filterSelect');

  function buildQuery() {
    const filter = $filterSelect.val();
    if (filter === 'all') return '';
    if (filter === 'completed') return '?completed=true';
    return `?priority=${encodeURIComponent(filter)}`;
  }

  function loadTasks() {
    const query = buildQuery();
    $.get(`${API_BASE_Q3}/tasks${query}`)
      .done(tasks => {
        renderTasks(tasks);
      });
  }

  function renderTasks(tasks) {
    $taskList.empty();
    tasks.forEach(task => {
      const li = $('<li></li>');
      const left = $('<span></span>');
      left.text(`${task.title} [${task.priority}]`);
      if (task.completed) {
        left.addClass('completed');
      }
      const checkbox = $('<input type="checkbox" />');
      checkbox.prop('checked', task.completed);
      checkbox.on('change', () => toggleCompleted(task, left, checkbox));

      li.append(left);
      li.append(checkbox);
      $taskList.append(li);
    });
  }

  function toggleCompleted(task, labelEl, checkbox) {
    const newCompleted = checkbox.is(':checked');
    $.ajax({
      url: `${API_BASE_Q3}/tasks/${task.id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({ completed: newCompleted }),
    }).done(() => {
      task.completed = newCompleted;
      labelEl.toggleClass('completed', newCompleted);
    }).fail(() => {
      // revert UI on error
      checkbox.prop('checked', task.completed);
    });
  }

  $filterSelect.on('change', loadTasks);

  loadTasks();
});
