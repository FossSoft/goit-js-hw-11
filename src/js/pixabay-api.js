import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryImg, createMarkup } from "./render-functions";

import { ourForm, paramPixabay } from "../main";


export function getData() {
 return fetch(`${paramPixabay.url}?key=${paramPixabay.KEY}&q=${paramPixabay.q}&image_type=${paramPixabay.image_type}&orientation=${paramPixabay.orientation}&safesearch=${paramPixabay.safesearch}`)
            .then(response => {
            
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
            })
            
            .then(data => {
                if (data.hits.length === 0) {
                    galleryImg.innerHTML = "";
                return iziToast.error({
                title: 'Error',
                message: `Sorry, there are no images matching your search query. Please try again!`,
                messageColor: 'white',
                messageSize: '16',
                backgroundColor: 'red',
                theme: 'dark',
                position: 'topRight',
            });
            } else {
                createMarkup(data);
            }
            })
            .catch(error => {
                return iziToast.error({
                title: 'Error',
                message: `${error}`,
                messageColor: 'white',
                messageSize: '16',
                backgroundColor: 'red',
                theme: 'dark',
                position: 'topRight',
            });
            })
            .finally(() => {
            ourForm.reset();
        });   
}