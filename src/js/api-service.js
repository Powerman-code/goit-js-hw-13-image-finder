const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '19008570-42b7cc415e1b0453677c4c4a2';

export default class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchImage(searchQuery) {
        console.log(this);
        return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                this.incrementPage();
                return data.hits;
                // можно деструктуризировать data т.е.
                // .then(({ hits }) => {
                //     this.incrementPage();
                //     return hits;
                // })
            })
            // .catch(console.log('error'));
    }
    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}



// const BASE_URL = 'https://pixabay.com/api';
// const API_KEY = '19008570-42b7cc415e1b0453677c4c4a2';
// export default function fetchImage(searchQuery) {
//     return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
//         .then(response => {
//             // console.log(response)
//             return response.json();
//         })
// }