import{S as u,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="46932892-ab4a09809774f514baea4f6c0";function d(s){const t=`https://pixabay.com/api/?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>r.hits).catch(r=>{throw console.error("Error fetching images:",r),r})}function m(s,t){const r=s.map(n=>`
        <a href="${n.largeImageURL}" class="gallery-item">
          <div class="image-card">
            <img src="${n.webformatURL}" alt="${n.tags}" />
            <div class="info">
              <p><b>Likes:</b> ${n.likes}</p>
              <p><b>Views:</b> ${n.views}</p>
              <p><b>Comments:</b> ${n.comments}</p>
              <p><b>Downloads:</b> ${n.downloads}</p>
            </div>
          </div>
        </a>
      `).join("");t.insertAdjacentHTML("beforeend",r)}function p(s){s.innerHTML=""}const h=document.querySelector(".search-form"),y=document.querySelector(".input-search"),l=document.querySelector(".results-container"),a=document.querySelector(".loader");let g=new u(".results-container .gallery-item",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",s=>{s.preventDefault();const t=y.value.trim();if(t===""){c.error({title:"Error",message:"Please enter a search term!"});return}p(l),b(t)});function b(s){a.style.display="block",d(s).then(t=>{if(a.style.display="none",t.length===0){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(t,l),g.refresh()}).catch(t=>{a.style.display="none",c.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}
//# sourceMappingURL=index.js.map
