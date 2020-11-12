// Есть файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
import cardTpl from '../templates/photo-card.hbs';
import { onOpenModal } from './modal';

// import API from '../js/api-service';
import ImageApiService from '../js/api-service';
const URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ';
const BASE_URL = 'https://pixabay.com/api';
// let searchQuery = '';
// const API_KEY = '19008570-42b7cc415e1b0453677c4c4a2';
const refs = {
    searchForm: document.querySelector('.js-search-form'),
    imagesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
    // можно сделать как через реф кнопку, так и через экземпляр
};

const imageApiService = new ImageApiService();

console.log(imageApiService);

refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', onLoadMore);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.imagesContainer.addEventListener('click', onOpenModal);

// function onSearch(e) {
//     e.preventDefault();

//     searchQuery = e.target.elements.query.value;

//     API(searchQuery)
//         .then(response => {
//             appendImagesMarkup(response.hits);
//         })
//         // .catch(error => { console.log(error) })
//         .catch(onFetchError);
// }

function onSearch(e) {
    e.preventDefault();
    imageApiService.query = e.target.elements.query.value;
    clearImagesMarkup();
    imageApiService.resetPage();
    imageApiService.fetchImage().then(appendImagesMarkup);
    console.log(refs.imagesContainer);
    if (imageApiService.query !== '') {
        refs.loadMoreBtn.classList.remove('is-hidden');
    }
    // API(searchQuery)
    //     .then(response => {
    //         appendImagesMarkup(response.hits);
    //     })
    //     // .catch(error => { console.log(error) })
    //     .catch(onFetchError);
}

function onLoadMore(e) {
    imageApiService.fetchImage().then(appendImagesMarkup);

    window.scrollTo({
    bottom: 100,
    behavior: 'smooth'
    });
}

function appendImagesMarkup(hits) {
    refs.imagesContainer.insertAdjacentHTML('beforeend', cardTpl(hits))
    console.log(hits);
    // const markup = cardTpl(images);
    // refs.imagesContainer.innerHTML = markup;
}

function clearImagesMarkup() {
    refs.imagesContainer.innerHTML = '';
};

// function fetchImage() {
//     return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
//         .then(response => {
//             // console.log(response)
//             return response.json();
//         })
// }



    // fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
    //     .then(response => {
    //         console.log(response)
    //         return response.json();
    //     })
    //     .then(response => {
    //         appendImagesMarkup(response.hits);
    //     })
    //     .catch(console.log('error'));
    //     // then(function(response) {
    //     //         return appendImagesMarkup(response.hits);
    //     //     })


// var blablabla = {
//     somekey: '1232rdfsdf',
//     then: function (cb) {
//         this.somekey = this.somekey + ' some response';
//         return cb(this.somekey, 'for fun');
//     }
// }

// blablabla.then((resp, secondArg) => {
//     console.log(resp, secondArg);
// });

// function appendImagesMarkup(images) {
//     refs.imagesContainer.insertAdjacentHTML('beforeend', cardTpl(images))
//     console.log(images);
//     // const markup = cardTpl(images);
//     // refs.imagesContainer.innerHTML = markup;
// }

function onFetchError(error) {
    alert('Ошибка');
}

// const ftch = fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${API_KEY}`);
// console.log(ftch);

// function fetchImages() {

// }