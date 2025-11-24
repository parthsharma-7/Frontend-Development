// Q4: Custom Form Builder

class FormBuilder {
  constructor(fields, containerId) {
    this.fields = fields; // array of { type, label, name? }
    this.container = document.getElementById(containerId);
    this.form = null;
  }

  // Create the form using innerHTML
  renderForm() {
    if (!this.container) return;

    let formHtml = '<form id="dynamicForm">';

    this.fields.forEach((field, index) => {
      const nameAttr = field.name || `field_${index}`;
      formHtml += `
        <div class="form-group">
          <label for="${nameAttr}">${field.label}</label>
          <input type="${field.type}" id="${nameAttr}" name="${nameAttr}" />
        </div>
      `;
    });

    formHtml += '<button type="submit">Submit</button>';
    formHtml += '</form>';

    this.container.innerHTML = formHtml;
    this.form = document.getElementById('dynamicForm');
  }

  // Get all form data as an object
  getFormData() {
    if (!this.form) return {};

    const formDataObj = {};
    this.fields.forEach((field, index) => {
      const nameAttr = field.name || `field_${index}`;
      const inputEl = this.form.querySelector(`#${nameAttr}`);
      formDataObj[nameAttr] = inputEl ? inputEl.value : '';
    });

    return formDataObj;
  }
}

// Example usage
const fields = [
  { type: 'text', label: 'Username', name: 'username' },
  { type: 'email', label: 'Email', name: 'email' },
  { type: 'password', label: 'Password', name: 'password' }
];

const builder = new FormBuilder(fields, 'formContainer');
builder.renderForm();

const output = document.getElementById('output');

// Handle submit and show form data
if (builder.form) {
  builder.form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = builder.getFormData();
    output.textContent = JSON.stringify(data, null, 2);
  });
}
