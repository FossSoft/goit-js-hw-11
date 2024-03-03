import{S as d,i as l}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function g(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=g(t);fetch(t.href,r)}})();const n=document.querySelector(".gallery");let i="";function f(e){i="",n.innerHTML=i;for(let s=0;s<e.hits.length;s++)i+=`<li class="gallery-item">
         <a class="gallery-link" href="${e.hits[s].largeImageURL}">
         <img class="gallery-image"
                src="${e.hits[s].webformatURL}"
                alt="${e.hits[s].tags}"/> </a>
        <ul class="stat">
          <li class="detals-stat">
           <h2 class="description">Likes</h2>
           <p class="stat-value">${e.hits[s].likes}</p>
          </li>
          <li class="detals-stat">
           <h2 class="description">Views</h2>
           <p class="stat-value">${e.hits[s].views}</p>
          </li>
          <li class="detals-stat">
           <h2 class="description">Comments</h2>
           <p class="stat-value">${e.hits[s].comments}</p>
          </li>
          <li class="detals-stat">
           <h2 class="description">Downloads</h2>
           <p class="stat-value">${e.hits[s].downloads}</p>
          </li>
        </ul>
        </li>`;n.innerHTML=i,p.refresh()}const p=new d(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(){return fetch(`${o.url}?key=${o.KEY}&q=${o.q}&image_type=${o.image_type}&orientation=${o.orientation}&safesearch=${o.safesearch}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)return n.innerHTML="",l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"topRight"});f(e)}).catch(e=>l.error({title:"Error",message:`${e}`,messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"topRight"})).finally(()=>{m.reset()})}const m=document.querySelector(".form"),u=document.querySelector(".button"),h=document.querySelector(".loader"),o={url:"https://pixabay.com/api/",KEY:"42515741-a33332df4257bc0cfcc74fb38",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};h.style.display="none";m.addEventListener("submit",b);function b(e){if(h.style.display="block",e.preventDefault(),o.q=e.target.elements.search.value.trim(),o.q==="")return u.disabled=!0,l.warning({title:"Look at me",message:"Ви не ввели що треба шукати",messageColor:"black",messageSize:"16",backgroundColor:"orange",theme:"dark",position:"topRight"});u.disabled=!1,y()}
//# sourceMappingURL=commonHelpers.js.map
