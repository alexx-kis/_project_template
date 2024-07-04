// $======================== SLIDE-DROPDOWN ========================$ //
const updateParentHeight = (element) => {
  const parentDropdownBody = element.closest('.slide-dropdown__body');
  if (parentDropdownBody) {
    let totalHeight = 0;
    const openDropdowns = parentDropdownBody.querySelectorAll('.slide-dropdown._active .slide-dropdown__body');

    openDropdowns.forEach(dropdownBody => {
      totalHeight += dropdownBody.scrollHeight;
    });

    parentDropdownBody.style.maxHeight = parentDropdownBody.scrollHeight + totalHeight + 'px';
    const parentDropdown = parentDropdownBody.closest('.slide-dropdown');
    if (parentDropdown) {
      updateParentHeight(parentDropdown);
    }
  }
};

const initSlideDropdown = (selector) => {
  const header = selector.querySelector('.slide-dropdown__header');
  const body = selector.querySelector('.slide-dropdown__body');
  body.style.cssText =
    `max-height: 0;
    overflow: clip;
    transition: all 250ms;`;

  header.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = selector.classList.contains('_active');

    if (isActive) {
      selector.classList.remove('_active');
      body.style.maxHeight = null;
    } else {
      selector.classList.add('_active');
      body.style.maxHeight = body.scrollHeight + 'px';
    }

    updateParentHeight(selector);
  });
};

const dropdowns = document.querySelectorAll('.slide-dropdown');
dropdowns.forEach(dropdown => initSlideDropdown(dropdown));