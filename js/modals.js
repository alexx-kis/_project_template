/*&// &======================== IMPORT ========================& //&*/
import { isEscapeKey } from "./utils.js";


/*$// $------------ open modal ------------$ //$*/
const openModal = (modal) => {
	modal.classList.add('open');

	//# обработчик закрытия модального окна по клику на крестик
	const onCrossClick = () => {
		closeModal(modal);
	}

	//# обработчик закрытия модального окна по нажатию на escape
	const onEscapeKeydown = (e) => {
		if (isEscapeKey(e)) {
			closeModal(modal);
		}
	}
	//# обработчик закрытия модального окна по нажатию на него само
	const onModalClick = () => {
		closeModal(modal);
	}

	const cross = modal.querySelector('.modal__cross');

	cross.addEventListener('click', onCrossClick);
	document.addEventListener('keydown', onEscapeKeydown);
	modal.addEventListener('click', onModalClick);

	document.body.style.overflow = 'hidden'; // disable document scroll



	/*$// $------------ close modal ------------$ //$*/
	const closeModal = (modal) => {
		modal.classList.remove('open');

		cross.removeEventListener('click', onCrossClick);
		document.removeEventListener('keydown', onEscapeKeydown);
		modal.removeEventListener('click', onModalClick);

		document.body.style.overflow = 'visible'; // enable document scroll
	}
}


/*&// &======================== EXPORT ========================& //&*/
export { openModal }