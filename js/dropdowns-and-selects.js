// $======================== DROPDOWNS & SELECTS ========================$ //

const initDropdown = (element) => {
  const SELECT_CLASS = 'select';
  const DROPDOWN_CLASS = 'dropdown';
  const ACTIVE_CLASS = '_active';
  const SELECTED_CLASS = '_selected';

  const getElementClass = (baseClass) => {
    return element.classList.contains(SELECT_CLASS) ? `${SELECT_CLASS}__${baseClass}`
      : element.classList.contains(DROPDOWN_CLASS) ? `${DROPDOWN_CLASS}__${baseClass}`
        : null;
  };

  const header = element.querySelector(`.${getElementClass('header')}`);
  const body = element.querySelector(`.${getElementClass('body')}`);

  const toggleActive = () => {
    const active = document.querySelector(`.${SELECT_CLASS}.${ACTIVE_CLASS}`) ||
      document.querySelector(`.${DROPDOWN_CLASS}.${ACTIVE_CLASS}`);

    if (element.classList.contains(ACTIVE_CLASS)) {
      element.classList.remove(ACTIVE_CLASS);
      body.style.maxHeight = null;
    } else {
      element.classList.add(ACTIVE_CLASS);
      body.style.maxHeight = body.scrollHeight + 'px';

      if (active && active !== element) {
        active.classList.remove(ACTIVE_CLASS);
        const activeBody = active.querySelector(`.${getElementClass('body')}`);
        activeBody.style.maxHeight = null;
      }
    }
  };

  header.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleActive();
  });

  document.addEventListener('click', () => {
    element.classList.remove(ACTIVE_CLASS);
    body.style.maxHeight = null;
  });

  element.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains(getElementClass('label'))) {
      const headerText = header.querySelector(`.${getElementClass('header-text')}`);
      headerText.textContent = e.target.textContent;
      element.classList.remove(ACTIVE_CLASS);
      header.classList.add(SELECTED_CLASS);
      body.style.maxHeight = null;
    } else if (e.target.classList.contains(getElementClass('button'))) {
      element.classList.remove(ACTIVE_CLASS);
      body.style.maxHeight = null;
    }
  });
};


/// initialize all selects on page
const selects = document.querySelectorAll(`.select`);
if (selects.length > 0) {
  selects.forEach(select => {
    initDropdown(select);
  });
}