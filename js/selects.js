// $======================== SELECTS ========================$ //
const SELECT_CLASS = 'select';
const SELECT_HEADER_CLASS = 'select__header';
const SELECT_BODY_CLASS = 'select__body';
const ACTIVE_CLASS = '_active';
const SELECT_HEADER_TEXT_CLASS = 'select__header-text';
const SELECTED_CLASS = '_selected';

const initSelect = (select) => {
  const selectHeader = select.querySelector(`.${SELECT_HEADER_CLASS}`);
  const selectBody = select.querySelector(`.${SELECT_BODY_CLASS}`);

  selectHeader.addEventListener('click', (e) => {
    e.stopPropagation();
    const activeSelect = document.querySelector(`.${SELECT_CLASS}.${ACTIVE_CLASS}`);

    if (select.classList.contains(ACTIVE_CLASS)) {
      select.classList.remove(ACTIVE_CLASS);
      selectBody.style.maxHeight = null;
    } else {
      select.classList.add(ACTIVE_CLASS);
      selectBody.style.maxHeight = selectBody.scrollHeight + 'px';

      if (activeSelect) {
        activeSelect.classList.remove('_active');
        const activeContent = activeSelect.querySelector(`.${SELECT_BODY_CLASS}`);
        activeContent.style.maxHeight = null;
      }
    }
  });

  document.addEventListener('click', (e) => {
    e.stopPropagation();
    select.classList.remove(ACTIVE_CLASS);
    selectBody.style.maxHeight = null;
  });

  select.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('select__label')) {
      const selectHeaderText = selectHeader.querySelector(`.${SELECT_HEADER_TEXT_CLASS}`);
      selectHeaderText.textContent = e.target.textContent;
      select.classList.remove(ACTIVE_CLASS);
      selectHeader.classList.add(SELECTED_CLASS);
      selectBody.style.maxHeight = null;
    }
  });
};

/// initialize all selects on page
const selects = document.querySelectorAll(`.${SELECT_CLASS}`);
if (selects.length > 0) {
  selects.forEach(select => {
    initSelect(select);
  });
}