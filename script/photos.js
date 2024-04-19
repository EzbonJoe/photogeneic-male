import {photos} from '../data/photoObject.js';

let photosHTML = '';

photos.forEach((photo) => {
    photosHTML += `
    <div class="content-container">
        <div class="image-container">
            <img src="${photo.image}" class="image1">
        </div>
    </div>
    `;
});

document.querySelector('.js-grid').innerHTML = photosHTML;