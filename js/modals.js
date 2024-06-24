//$======================== MODALS ========================$//
//$======================== MODALS ========================$//
const MODAL_CLASS = '.modal';
const CLOSE_MODAL_BUTTON_CLASS = '.close-modal'
// $------------ general ------------$ //
const openModal = (modal) => {
	modal.showModal();
	document.body.style.overflow = 'hidden';
};

const closeModal = (modal) => {
	modal.close();
	document.body.style.overflow = 'visible';
};

const modals = document.querySelectorAll(MODAL_CLASS);
modals.forEach(modal => {
	if (modal) {
		const closeModalButton = modal.querySelector(CLOSE_MODAL_BUTTON_CLASS);
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal(modal);
			}
		});
		if (closeModalButton) {
			closeModalButton.addEventListener('click', () => {
				closeModal(modal);
			});
		}
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				closeModal(modal);
			}
		});
	}
});


/*&// &======================== EXPORT ========================& //&*/
export { openModal }