// $======================== TOOLTIPS ========================$ //

const adjustHorizontalPosition = (tooltip) => {
  const body = tooltip.querySelector('.tooltip__body');
  const margin = 10;
  const rect = body.getBoundingClientRect();

  if (rect.right > window.innerWidth - margin) {
    tooltip.classList.add('_left');
    tooltip.classList.remove('_right');
  } else {
    tooltip.classList.remove('_left');
    tooltip.classList.add('_right');
  }
};

const checkVerticalPosition = (element) => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const verticalCenter = windowHeight / 2;

  if (rect.top <= verticalCenter && rect.bottom <= verticalCenter) {
    return 'above';
  } else {
    return 'below';
  }
};

const adjustVerticalPosition = (tooltip) => {

  if (checkVerticalPosition(tooltip) === 'above') {
    tooltip.classList.remove('_top');
    tooltip.classList.add('_bottom');
  } else {
    tooltip.classList.add('_top');
    tooltip.classList.remove('_bottom');
  }
};


const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tooltip => {
  adjustHorizontalPosition(tooltip);
  adjustVerticalPosition(tooltip);
});

window.addEventListener('scroll', () => {
  tooltips.forEach(tooltip => {
    adjustVerticalPosition(tooltip);
  });
});