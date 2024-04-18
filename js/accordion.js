// $======================== accordion ========================$ //

const tabs = document.querySelectorAll(".accordion__tab");

const defaultOpenContent = document.querySelector('.accordion__content.open');
if (defaultOpenContent) {
  defaultOpenContent.style.maxHeight = defaultOpenContent.scrollHeight + 'px';
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const content = tab.querySelector('.accordion__content');
    const openContent = document.querySelector(".accordion__content.open");
    const openTab = document.querySelector(".accordion__tab.open");

    if (content.classList.contains("open") && content.style.maxHeight != null) {
      tab.classList.remove("open");
      content.classList.remove("open");
      content.style.maxHeight = null;
    } else {
      tab.classList.add("open");
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";

      if (openContent) {
        openTab.classList.remove("open");
        openContent.classList.remove("open");
        openContent.style.maxHeight = null;
      }
    }
  });
});