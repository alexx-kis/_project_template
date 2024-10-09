// $======================== ACCORDION ========================$ //
const ACCORDION_CLASS = 'accordion';
const ACCORDION_TAB_CLASS = 'accordion__tab';
const ACCORDION_BODY_CLASS = 'accordion__body';
const ACTIVE_CLASS = '_active';

const initAccordion = (accordion) => {
  /// functions to open and close tabs
  const openTab = (tab) => {
    const body = tab.querySelector(`.${ACCORDION_BODY_CLASS}`);
    tab.classList.add(ACTIVE_CLASS);
    body.classList.add(ACTIVE_CLASS);
    body.style.maxHeight = body.scrollHeight + 'px';
  };

  const closeTab = (tab) => {
    const body = tab.querySelector(`.${ACCORDION_BODY_CLASS}`);
    tab.classList.remove(ACTIVE_CLASS);
    body.classList.remove(ACTIVE_CLASS);
    body.style.maxHeight = null;
  };

  /// open default active tab
  const defaultActiveTab = accordion.querySelector(`.${ACCORDION_TAB_CLASS}.${ACTIVE_CLASS}`);
  if (defaultActiveTab) {
    openTab(defaultActiveTab);
  }

  /// main accordion function
  const tabs = accordion.querySelectorAll(`.${ACCORDION_TAB_CLASS}`);
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const body = tab.querySelector(`.${ACCORDION_BODY_CLASS}`);
      const activeTab = accordion.querySelector(`.${ACCORDION_TAB_CLASS}.${ACTIVE_CLASS}`);

      if (body.classList.contains(ACTIVE_CLASS) && body.style.maxHeight != null) {
        closeTab(tab);
      } else {
        openTab(tab);

        if (activeTab) {
          closeTab(activeTab);
        }
      }
    });
  });
};

/// initialize all accordions on page
const accordions = document.querySelectorAll(`.${ACCORDION_CLASS}`);
if (accordions.length !== 0) {
  accordions.forEach(accordion => {
    initAccordion(accordion);
  });
}

