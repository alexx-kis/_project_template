// $======================== select ========================$ //

const selects = document.querySelectorAll('.select');

selects.forEach(select => {
  const selectPane = select.querySelector('.select__pane');
  const selectLabels = select.querySelectorAll('.select__label');
  const selectContent = select.querySelector('.select__content');

  selectPane.addEventListener('click', (e) => {
    e.stopPropagation();
    const activeSelect = document.querySelector('.select._active');

    if (select.classList.contains('_active')) {
      select.classList.remove('_active');
      selectContent.style.maxHeight = null;
    } else {
      select.classList.add('_active');
      selectContent.style.maxHeight = selectContent.scrollHeight + 'px';

      if (activeSelect) {
        activeSelect.classList.remove('_active');
        const activeContent = activeSelect.querySelector('.select__content');
        activeContent.style.maxHeight = null;
      }
    }
  });

  document.addEventListener('click', () => {
    select.classList.remove('_active');
    selectContent.style.maxHeight = null;
  });

  selectLabels.forEach(selectLabel => {
    selectLabel.addEventListener('click', () => {
      const selectPaneText = selectPane.querySelector('.select__pane-text');
      selectPaneText.textContent = selectLabel.textContent;
      select.classList.remove('_active');
      selectPane.classList.add('_selected');
      selectContent.style.maxHeight = null;
    });
  });
});