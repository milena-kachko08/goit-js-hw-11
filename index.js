import{a as y,S as f,i as s}from"./assets/vendor-BIn0hBn5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g="51015530-5e955df2a81e83cea790abd16",h="https://pixabay.com/api/",v=async(t,o=1,n=12)=>{const a=new URLSearchParams({key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:n}),e=`${h}?${a.toString()}`;try{return(await y.get(e)).data}catch(r){throw new Error(`Failed to fetch images: ${r.message}`)}};let c;const S=t=>{const o=document.querySelector(".gallery"),n=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:p,comments:u,downloads:m})=>`<div class='photo-card'>
        <a href="${e}">
          <img src="${a}" alt="${r}" loading=""lazy/>
        </a>
        <div class="info">
          <div>
            <p>Likes</p>
            <p>${i}</p>
          </div>
          <div>
            <p>Views</p>
            <p>${p}</p>
          </div>
          <div>
            <p>Comments</p>
            <p>${u}</p>
          </div>
          <div>
            <p>Downloads</p>
            <p>${m}</p>
          </div>
        </div>
      </div>`).join("");o.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new f(".gallery a",{captionsData:"alt",captionDelay:250})},L=()=>{const t=document.querySelector(".gallery");t.innerHTML=""};function w(){const t=document.querySelector(".loader");t.style.display="inline-block"}function b(){const t=document.querySelector(".loader");t.style.display="none"}const q=document.querySelector(".form");document.querySelector(".loader");let l=1,d="";const $=12;q.addEventListener("submit",P);async function P(t){t.preventDefault();const o=t.currentTarget.elements.search.value.trim();if(!o){s.warning({title:"Warning",message:"Search query cannot be empty!",position:"topRight"});return}d=o,l=1,L(),w();try{const n=await v(d,l,$);if(n.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(n.hits)}catch(n){s.error({title:"Error",message:`Something went wrong: ${n.message}`,position:"topRight"})}finally{b()}}
//# sourceMappingURL=index.js.map
