/*&// &======================== IMPORT ========================& //&*/
import { isEscapeKey } from "./utils.js";


/*$// $------------ open modal ------------$ //$*/
const openModal = (modal) => {
	modal.classList.add('open');

	const cross = modal.querySelector('.modal__cross');

	// коллбэк по нажатию на крестик
	const onCrossClick = () => {
		closeModal(modal);
		cross.removeEventListener('click', onCrossClick);
	}
	cross.addEventListener('click', onCrossClick);

	// коллбэк по нажатию на escape
	const onEscapeKeydown = (e) => {
		if (isEscapeKey(e)) {
			closeModal(modal);
		}
		document.removeEventListener('keydown', onEscapeKeydown);
	}
	document.addEventListener('keydown', onEscapeKeydown);

	// фиксация страницы при открытом модальном окне
	document.body.style.overflow = 'hidden';
}

/*$// $------------ close modal ------------$ //$*/
const closeModal = (modal) => {
	modal.classList.remove('open');
	document.body.style.overflow = 'visible';
}


/*&// &======================== EXPORT ========================& //&*/
export { openModal, closeModal }