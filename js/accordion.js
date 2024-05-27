// $======================== accordion ========================$ //

const initAccordion = (accordion) => {
  /// functions to open and close tabs
  const openTab = (tab) => {
    const body = tab.querySelector('.accordion__body');
    tab.classList.add("_active");
    body.classList.add("_active");
    body.style.maxHeight = body.scrollHeight + "px";
  };
  
  const closeTab = (tab) => {
    const body = tab.querySelector('.accordion__body');
    tab.classList.remove("_active");
    body.classList.remove("_active");
    body.style.maxHeight = null;
  };

  /// open default active tab
  const defaultActiveTab = accordion.querySelector('.accordion__tab._active');
  if (defaultActiveTab) {
    openTab(defaultActiveTab);
  }
  
  /// main accordion function
  const tabs = accordion.querySelectorAll(".accordion__tab");
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const body = tab.querySelector('.accordion__body');
      const openedTab = accordion.querySelector(".accordion__tab._active");
  
      if (body.classList.contains("_active") && body.style.maxHeight != null) {
        closeTab(tab);
      } else {
        openTab(tab);
  
        if (openedTab) {
          closeTab(openedTab);
        }
      }
    });
  });
}

/// initialize all accordions on page
const accordions = document.querySelectorAll('.accordion');
if (accordions.length !== 0) {
  accordions.forEach(accordion => {
    initAccordion(accordion);
  });
}

