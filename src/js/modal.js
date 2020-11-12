import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onOpenModal(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    };
    const targetedImage = `<img src="${evt.target.dataset.src}" alt="" />`;
    console.log(targetedImage);
    console.log('клик по имейджу');
    evt.preventDefault();
    // запрещаем переход по ссылке
    const instance = basicLightbox.create(targetedImage);
    instance.show()
};

export { onOpenModal };