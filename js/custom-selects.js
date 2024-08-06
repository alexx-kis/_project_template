// $======================== CUSTOM SELECTS ========================$ //

const initSelect = (selector) => {

  const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
  };

  const selectElement = createElement('div', 'select');
  const selectorClassList = selector.classList;
  selectorClassList.forEach(className => {
    selectElement.classList.add(className);
  });

  const header = createElement('div', 'select__header');
  const headerText = createElement('p', 'select__header-text');
  headerText.textContent = selector.querySelector('option[selected]').textContent;
  header.append(headerText);

  const headerIcon = createElement('div', 'select__header-icon');
  header.append(headerIcon);
  selectElement.append(header);

  const body = createElement('div', 'select__body');
  const list = createElement('ul', 'select__list');
  const options = selector.querySelectorAll('option');
  options.forEach(option => {
    if (!option.selected) {
      const item = createElement('li', 'select__item');
      const label = createElement('label', 'select__label');
      label.textContent += option.textContent;
      const input = createElement('input', 'select__input');
      input.type = 'radio';
      input.name = 'singleSelect';
      label.append(input);
      item.append(label);
      list.append(item);
    }
  });
  body.append(list);
  selectElement.append(body);
  selector.parentElement.append(selectElement);

  const SELECT_CLASS = 'select';
  const SELECT_BODY_CLASS = 'select__body';
  const ACTIVE_CLASS = '_active';
  const SELECT_HEADER_TEXT_CLASS = 'select__header-text';
  const SELECTED_CLASS = '_selected';

  header.addEventListener('click', (e) => {
    e.stopPropagation();
    const activeSelect = document.querySelector(`.${SELECT_CLASS}.${ACTIVE_CLASS}`);

    if (selectElement.classList.contains(ACTIVE_CLASS)) {
      selectElement.classList.remove(ACTIVE_CLASS);
      body.style.maxHeight = null;
    } else {
      selectElement.classList.add(ACTIVE_CLASS);
      body.style.maxHeight = body.scrollHeight + 'px';

      if (activeSelect) {
        activeSelect.classList.remove(ACTIVE_CLASS);
        const activeContent = activeSelect.querySelector(`.${SELECT_BODY_CLASS}`);
        activeContent.style.maxHeight = null;
      }
    }
  });
  document.addEventListener('click', (e) => {
    e.stopPropagation();
    selectElement.classList.remove(ACTIVE_CLASS);
    body.style.maxHeight = null;
  });

  selectElement.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('select__label')) {
      const selectHeaderText = header.querySelector(`.${SELECT_HEADER_TEXT_CLASS}`);
      selectHeaderText.textContent = e.target.textContent;
      selectElement.classList.remove(ACTIVE_CLASS);
      header.classList.add(SELECTED_CLASS);
      body.style.maxHeight = null;
    }
  });
  
  selector.remove();

};

const selects = document.querySelectorAll('select');
selects.forEach(select => {
  initSelect(select);
});