import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

// import "./js/pixabay-api"
// import "./js/render-functions"

import { getData } from "./js/pixabay-api";

export const ourForm = document.querySelector(".form");
const button = document.querySelector(".button");
const loader = document.querySelector(".loader");

export const paramPixabay = {
    url : "https://pixabay.com/api/",
    KEY : "42515741-a33332df4257bc0cfcc74fb38",
    q : "",
    image_type : "photo",
    orientation : "horizontal",
    safesearch : true,
}

loader.style.display = "none";

ourForm.addEventListener("submit", getPhoto);

function getPhoto(event) {
    loader.style.display = "block";
        event.preventDefault();
        paramPixabay.q = event.target.elements.search.value.trim();

    if (paramPixabay.q === "") {
        button.disabled = true;
        return iziToast.warning({
                title: "Look at me",
                message: `Ви не ввели що треба шукати`,
                messageColor: 'black',
                messageSize: '16',
                backgroundColor: 'orange',
                theme: 'dark',
                position: 'topRight',
        });
        } else {
        button.disabled = false;
        getData();
    };
};