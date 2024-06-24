// $======================== DRAG FILE FIELD ========================$ //

const initDragFileField = (field) => {
  const input = field.querySelector('.drag-file-field__input');
  const icon = field.querySelector('.drag-file-field__icon');
  const text = field.querySelector('.drag-file-field__text');
  const thumbnail = field.querySelector('.drag-file-field__thumbnail');

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      thumbnail.src = e.target.result;
      if (icon) {
        icon.style.display = 'none';
      }
      if (text) {
        text.style.display = 'none';
      }
      if (thumbnail) {
        thumbnail.style.display = 'block';
      }
    };
    reader.readAsDataURL(file);
  }

  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  });

  field.addEventListener('dragover', (e) => {
    e.preventDefault();
    field.classList.add('dragover');
  });

  field.addEventListener('dragleave', (e) => {
    e.preventDefault();
    field.classList.remove('dragover');
  });

  field.addEventListener('drop', (e) => {
    e.preventDefault();
    field.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) {
      input.files = e.dataTransfer.files;
      handleFile(file);
    }
  });
}


const dragFilesFields = document.querySelectorAll('.drag-file-field');
dragFilesFields.forEach(dragFilesField => {
  initDragFileField(dragFilesField);
})
