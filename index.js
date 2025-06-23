import{S as m,i as s}from"./assets/vendor-Cau1Iyua.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y="51015530-5e955df2a81e83cea790abd16",h="https://pixabay.com/api/",v=async(t,o=1,n=12)=>{const a=new URLSearchParams({key:y,q:t,image_type:"photo",orientaiton:"horizontal",safesearch:"true",page:o,per_page:n}),e=`${h}?${a.toString()}`;try{const r=await fetch(e);if(!r.ok)throw new Error(`HTTP Error: ${r.status}`);return await r.json()}catch(r){throw r}};let c;const w=t=>{const o=document.querySelector(".gallery"),n=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:d,comments:f,downloads:g})=>`<div class='photo-card'>
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
            <p>${d}</p>
          </div>
          <div>
            <p>Comments</p>
            <p>${f}</p>
          </div>
          <div>
            <p>Downloads</p>
            <p>${g}</p>
          </div>
        </div>
      </div>`).join("");o.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new m(".gallery a",{captionsData:"alt",captionDelay:250})},S=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},L=document.querySelector(".search-form"),b=document.querySelector(".loader");let l=1,p="";const $=12;L.addEventListener("submit",P);async function P(t){t.preventDefault();const o=t.currentTarget.elements.search.value.trim();if(!o){s.warning({title:"Warning",message:"Search query cannot be empty!",position:"topRight"});return}p=o,l=1,S(),u(!0);try{const n=await v(p,l,$);if(n.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(n.hits)}catch(n){s.error({title:"Error",message:`Something went wrong: ${n.message}`,position:"topRight"})}finally{u(!1)}}const u=t=>b.style.display=t?"inline-block":"none";
//# sourceMappingURL=index.js.map
