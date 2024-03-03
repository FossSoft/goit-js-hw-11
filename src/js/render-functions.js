import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

export const galleryImg = document.querySelector(".gallery");
export let htmlListOfGallery = "";

export function createMarkup(data) {
    htmlListOfGallery = "";
    galleryImg.innerHTML = htmlListOfGallery;
  
    for (let i = 0; i < data.hits.length; i++) {
        htmlListOfGallery += `<li class="gallery-item">
         <a class="gallery-link" href="${data.hits[i].largeImageURL}">
         <img class="gallery-image"
                src="${data.hits[i].webformatURL}"
                alt="${data.hits[i].tags}"/> </a>
        <ul class="stat">
          <li class="detals-stat">
           <h2 class="description">Likes</h2>
           <p class="stat-value">${data.hits[i].likes}</p>
          </li>
          <li class="detals-stat">
           <h2 class="description">Views</h2>
           <p class="stat-value">${data.hits[i].views}</p>
          </li>
          <li class="detals-stat">
           <h2 class="description">Comments</h2>
           <p class="stat-value">${data.hits[i].comments}</p>
          </li>
          <li class="detals-stat">
           <h2 class="description">Downloads</h2>
           <p class="stat-value">${data.hits[i].downloads}</p>
          </li>
        </ul>
        </li>`
    }

    galleryImg.innerHTML = htmlListOfGallery;
  
    lightbox.refresh();
  
}

    const lightbox = new SimpleLightbox('.gallery-item a', {
            captionsData: "alt",
            captionPosition: "bottom",
            captionDelay: 250,
    });

