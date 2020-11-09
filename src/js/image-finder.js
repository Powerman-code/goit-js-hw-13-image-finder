// Есть файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
import cardTemplate from '../templates/photo-card.hbs';
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
const URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ';
const BASE_URL = 'https://pixabay.com/api';
let searchQuery = '';
const API_KEY = '19008570-42b7cc415e1b0453677c4c4a2';
const refs = {
    searchForm: document.querySelector('.js-search-form'),

    imagesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

// const options = {
//         headers: {
//             Authorization: '19008570-42b7cc415e1b0453677c4c4a2',
//         },
//     }

refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(e) {
    e.preventDefault();

    searchQuery = e.target.elements.query.value;

    fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(appendImagesMarkup());

// function onLoadMore() {

}

function appendImagesMarkup(...images) {
    refs.imagesContainer.insertAdjacentHTML('beforeend', cardTemplate())
}

// const ftch = fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${API_KEY}`);
// console.log(ftch);

// function fetchImages() {

// }