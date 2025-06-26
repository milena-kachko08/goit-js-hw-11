import{a as m,S as y,i as s}from"./assets/vendor-BIn0hBn5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="51015530-5e955df2a81e83cea790abd16",h="https://pixabay.com/api/",v=async(n,t=1,o=12)=>{const a=new URLSearchParams({key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:o}),e=`${h}?${a.toString()}`;try{return(await m.get(e)).data}catch(r){throw new Error(`Failed to fetch images: ${r.message}`)}};let c;const L=n=>{const t=document.querySelector(".gallery"),o=n.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:p,comments:u,downloads:f})=>`<div class='photo-card'>
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
            <p>${f}</p>
          </div>
        </div>
      </div>`).join("");t.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new y(".gallery a",{captionsData:"alt",captionDelay:250})},S=()=>{const n=document.querySelector(".gallery");n.innerHTML=""};function w(){loader.style.display="inline-block"}function b(){loader.style.display="none"}const $=document.querySelector(".form");document.querySelector(".loader");let l=1,d="";const q=12;$.addEventListener("submit",P);async function P(n){n.preventDefault();const t=n.currentTarget.elements.search.value.trim();if(!t){s.warning({title:"Warning",message:"Search query cannot be empty!",position:"topRight"});return}d=t,l=1,S(),w();try{const o=await v(d,l,q);if(o.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}catch(o){s.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{b()}}
//# sourceMappingURL=index.js.map
