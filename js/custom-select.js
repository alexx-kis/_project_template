// $======================== select ========================$ //

const selects = document.querySelectorAll('.select');

selects.forEach(select => {
  const selectPane = select.querySelector('.select__pane');
  const selectLabels = select.querySelectorAll('.select__label');
  const selectContent = select.querySelector('.select__content');

  selectPane.addEventListener('click', () => {
    if (select.classList.contains('_active')) {
      select.classList.remove('_active');
      selectContent.style.maxHeight = null;
    } else {
      select.classList.add('_active');
      selectContent.style.maxHeight = selectContent.scrollHeight + 'px';
    }
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