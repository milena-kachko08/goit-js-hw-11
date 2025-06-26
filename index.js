import{a as y,S as m,i as s}from"./assets/vendor-BIn0hBn5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="51015530-5e955df2a81e83cea790abd16",h="https://pixabay.com/api/",v=async(i,t=1,o=12)=>{const n=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:o}),e=`${h}?${n.toString()}`;try{const r=await y(e);if(!r.ok)throw new Error(`HTTP Error: ${r.status}`);return await r.json()}catch(r){throw r}};let c;const w=i=>{const t=document.querySelector(".gallery"),o=i.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:d,comments:u,downloads:f})=>`<div class='photo-card'>
        <a href="${e}">
          <img src="${n}" alt="${r}" loading=""lazy/>
        </a>
        <div class="info">
          <div>
            <p>Likes</p>
            <p>${a}</p>
          </div>
          <div>
            <p>Views</p>
            <p>${d}</p>
          </div>
          <div>
            <p>Comments</p>
            <p>${u}</p>
          </div>
          <div>
            <p>Downloads</p>
            <p>${f}</p>
          </div>
        </div>
      </div>`).join("");t.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new m(".gallery a",{captionsData:"alt",captionDelay:250})},L=()=>{const i=document.querySelector(".gallery");i.innerHTML=""};function S(){loader.style.display="inline-block"}function b(){loader.style.display="none"}const $=document.querySelector(".form");let l=1,p="";const P=12;$.addEventListener("submit",q);async function q(i){i.preventDefault();const t=i.currentTarget.elements.search.value.trim();if(!t){s.warning({title:"Warning",message:"Search query cannot be empty!",position:"topRight"});return}p=t,l=1,L(),S();try{const o=await v(p,l,P);if(o.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(o.hits)}catch(o){s.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{b()}}
//# sourceMappingURL=index.js.map
