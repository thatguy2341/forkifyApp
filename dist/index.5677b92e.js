function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,a={},o={},s=i.parcelRequire3a11;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},i.parcelRequire3a11=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.5677b92e.js","eyyUD","icons.c14567a0.svg","hfd23","icons.c14567a0.svg"]'));var c=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof f?r:f).prototype);return i(c,"_invoke",{value:(o=new F(a||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===m){if("throw"===r)throw i;return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===h)throw s=m,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var l=d(e,n,o);if("normal"===l.type){if(s=o.done?m:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(s=m,o.method="throw",o.arg=l.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",m="completed",g={};function f(){}function v(){}function _(){}var y={};l(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b($([])));w&&w!==r&&n.call(w,o)&&(y=w);var k=_.prototype=f.prototype=Object.create(y);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return v.prototype=_,i(k,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:v,configurable:!0}),v.displayName=l(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(L.prototype),l(L.prototype,s,function(){return this}),e.AsyncIterator=L,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new L(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),l(k,c,"Generator"),l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}const l="https://forkify-api.herokuapp.com/api/v2/recipes/",u="0eb35abf-47c1-4a2b-b987-92db2ac9858d",d=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`Problem with ${t?"posting":"getting"} data: ${i.message} (${n.status})`);return i}catch(e){throw e}},h=function(e){return window.innerWidth<e},p={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1,maxPage:1},bookmarks:[]},m=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,imageUrl:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,cookingTime:t.cooking_time,sourceUrl:t.source_url,...t.key&&{key:t.key}}},g=async function(e){try{let t=await d(`${l}${e}?key=${u}`);p.recipe=m(t),p.bookmarks.some(e=>e.id===p.recipe.id)?p.recipe.bookmarked=!0:p.recipe.bookmarked=!1}catch(e){console.error(e)}},f=async function(e){try{var t;p.search.query=e;let r=await d(`${l}?search=${e}&key=${u}`);p.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,imageUrl:e.image_url,publisher:e.publisher,...e.key&&{key:e.key}})),p.search.maxPage=(t=p.search.results.length,Math.ceil(t/10))}catch(e){throw console.error(e),e}},v=function(e=1){p.search.page=e;let t=(e-1)*p.search.resultsPerPage,r=e*p.search.resultsPerPage;return p.search.results.slice(t,r)},_=function(e){let t=e/p.recipe.servings;p.recipe.servings=e,p.recipe.ingredients=p.recipe.ingredients.map(e=>(e.quantity&&(e.quantity=e.quantity*t),e))},y=function(){localStorage.setItem("bookmarks",JSON.stringify(p.bookmarks))},b=function(e){p.bookmarks.push(e),e.id===p.recipe.id&&(p.recipe.bookmarked=!0),y()},w=function(e){p.bookmarks=p.bookmarks.filter(t=>t.id!==e),e===p.recipe.id&&(p.recipe.bookmarked=!1),y()},k=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Used wrong format for inserting an ingredient! Please use the specified format.");let[r,n,i]=t;return{quantity:+r||null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await d(`${l}?key=${u}`,r);p.recipe=m(n),b(p.recipe)}catch(e){throw e}};localStorage.removeItem("bookmarks"),function(){let e=localStorage.getItem("bookmarks");e&&(p.bookmarks=JSON.parse(e))}();var E={};E=new URL("icons.c14567a0.svg",import.meta.url).toString();class L{_data;render(e,t=!0){return e.constructor===Object&&0===Object.values(e).length||Array.isArray(e)&&0===e.length?this.renderErrorMessage():(this._data=e,t)?void(this._parentElement.innerHTML=this._renderHTML()):this._renderHTML()}update(e){this._data=e;let t=Array.from(document.createRange().createContextualFragment(this._renderHTML()).querySelectorAll("*")),r=Array.from(this._parentElement.querySelectorAll("*"));t.forEach((e,t)=>{let n=r[t];e.isEqualNode(n)||(n.innerHTML=e.innerHTML)})}renderErrorMessage(t=this._errorMessage){this._parentElement.innerHTML=`
    <div class="error">
    <div>
      <svg>
        <use href="${e(E)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${t}</p>
  </div>`}renderMessage(t=this._succesMessage){this._parentElement.innerHTML=`
    <div class="message">
    <div>
      <svg>
        <use href="${e(E)}#icon-smile"></use>
      </svg>
    </div>
    <p>${t}</p>
  </div>`}renderSpinner(){this._parentElement.innerHTML=`
      <div class="spinner">
        <svg>
          <use href="${e(E)}#icon-loader"></use>
        </svg>
      </div>`}clear(){this._parentElement.innerHTML=""}}var x={};x=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;class S extends L{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for the given id. Please try again!";_succesMessage;addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny[data-change]");if(!r)return;let n=+r.dataset.change;n>0&&e(n)})}addHandlerBookmark(t){this._parentElement.addEventListener("click",function(r){let n=r.target.closest("#bookmark-btn");n&&("true"===n.getAttribute("data-active")?(n.setAttribute("data-active","false"),n.innerHTML=`
        <svg class="">
          <use href="${e(x)}#icon-bookmark"></use>
        </svg>`):(n.setAttribute("data-active","true"),n.innerHTML=`
        <svg class="">
          <use href="${e(x)}#icon-bookmark-fill"></use>
        </svg>`),t())})}_renderHTML(){let t=this._data;return`        
    <figure class="recipe__fig">
    <img src="${t.imageUrl}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${t.title}</span>
    </h1>
  </figure>
  
  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${e(x)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${t.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${e(x)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${t.servings}</span>
      <span class="recipe__info-text">servings</span>
  
      <div class="recipe__info-buttons">
        <button data-change="${t.servings-1}" class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${e(x)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button data-change="${t.servings+1}"  class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${e(x)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
  
    <div class="recipe__user-generated ${t.key?"":"hidden"}">
      <svg>
        <use href="${e(x)}.svg#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round" id="bookmark-btn" data-active=${t.bookmarked?"true":"false"}>
      <svg class="">
        <use href="${e(x)}#${t.bookmarked?"icon-bookmark-fill":"icon-bookmark"}"></use>
      </svg>
    </button>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${t.ingredients.map(e=>this._generateHtmlForIngredient(e)).join("")}
    </ul>
  </div>
  
  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${t.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${t.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${e(x)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}_generateHtmlForIngredient(t){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${e(x)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${t.quantity?new n(t.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${t.unit||""}</span>
        ${t.description??""}
      </div>
    </li>`}}var F=new S,$=new class{_parentElement;_searchBars;getQuery(){let e=this._searchBars.map(e=>e.value||"").join("");return this._clearInput(),e}_clearInput(){this._searchBars.forEach(e=>e.value="")}_getSearchBars(){this._parentElement=Array.from(document.querySelectorAll(".search")),this._searchBars=this._parentElement.map(e=>e.querySelector(".search__field"))}addHandlerSearch(e){this._getSearchBars(),this._parentElement.forEach(t=>{t.addEventListener("submit",function(t){let r=this.querySelector(".search__field");r?.value&&(e(r.value),t.preventDefault())})})}},T=new class extends L{_parentElement="";_renderHTML(){let t=window.location.hash.slice(1);return`
        <li class="preview">
          <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.imageUrl}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${e(E)}.svg#icon-user"></use>
            </svg>
            </div>
          </div>
        </a>
      </li>`}};class M extends L{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try another :)";_succesMessage;_renderHTML(){return this._data.map(e=>T.render(e,!1)).join("")}}var H=new M;class q extends L{_parentElement=document.querySelector(".pagination");_currentPage=1;addHandlerRender(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&(r.classList.contains("pagination__btn--next")||r.classList.contains("pagination__btn--prev"))&&e(+r.dataset.goto)})}_renderHTML(){this._currentPage=this._data.page;let e=this._data.maxPage;return 1===this._currentPage?this._currentPage<e?this._generateNextBtn():"":this._currentPage<e?`
        ${this._generatePrevBtn()}
        ${this._generateNextBtn()}
        `:this._generatePrevBtn()}_generatePrevBtn(){return`
    <button data-goto="${this._currentPage-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${e(x)}.svg#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._currentPage-1}</span>
    </button>`}_generateNextBtn(){return`
    <button data-goto="${this._currentPage+1}" class="btn--inline pagination__btn--next">
        <span>Page ${this._currentPage+1}</span>
        <svg class="search__icon">
            <use href="${e(x)}.svg#icon-arrow-right"></use>
        </svg>
    </button>`}_generatePageButtons(){}}var P=new q;class N extends L{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks choosen yet. Go ahead and choose some";_succesMessage;addHandlerRender(e){window.addEventListener("load",()=>e(!1))}_renderHTML(){return this._data.map(e=>T.render(e,!1)).join("")}}var O=new N;class R extends L{_parentElement=document.querySelector(".upload");_modal=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_errorMessage="No recipes found for your query. Please try another :)";_succesMessage="Successfuly added your new recipe";added=!1;constructor(){super(),this._addHandlerRender()}_addHandlerRender(){let e=this.toggleModal.bind(this);this._btnClose.addEventListener("click",e),this._btnOpen.addEventListener("click",e),this._overlay.addEventListener("click",e)}toggleModal(){this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_renderHTML(){return`
    <form class="upload">
      <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input value="TEST101" required name="title" type="text" />
        <label>URL</label>
        <input value="TEST101" required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input value="TEST101" required name="image" type="text" />
        <label>Publisher</label>
        <input value="TEST101" required name="publisher" type="text" />
        <label>Prep time</label>
        <input value="23" required name="cookingTime" type="number" />
        <label>Servings</label>
        <input value="23" required name="servings" type="number" />
      </div>

      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input
          value="0.5,kg,Rice"
          type="text"
          required
          name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 2</label>
        <input
          value="1,,Avocado"
          type="text"
          name="ingredient-2"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 3</label>
        <input
          value=",,salt"
          type="text"
          name="ingredient-3"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 4</label>
        <input
          type="text"
          name="ingredient-4"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 5</label>
        <input
          type="text"
          name="ingredient-5"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 6</label>
        <input
          type="text"
          name="ingredient-6"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>

      <button class="btn upload__btn">
        <svg>
          <use href="${e(E)}.svg#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    </form>`}}var j=new R;class U{_parentELement=document.querySelector(".header");_form=this._parentELement.querySelector("form");_toggler=this._parentELement.querySelector("#toggler");_expandContainer=this._parentELement.querySelector("#container-expanded-nav");constructor(){this._loadExpandContainer(),this._loadEventListener()}_loadEventListener(){this._toggler.addEventListener("click",this._slideNav.bind(this))}collapseNav(){this._form.classList.add("hide-element"),this._toggler.classList.remove("hide-element")}showNav(){this._form.classList.remove("hide-element"),this._toggler.classList.add("hide-element"),this._expandContainer.classList.add("hide-element")}_loadExpandContainer(){this._expandContainer.querySelector("ul").innerHTML="",this._form.querySelector(".search__field").style.width="50vw",this._expandContainer.querySelector("ul").insertAdjacentHTML("afterbegin",this._form.outerHTML),this._form.querySelector(".search__field").style.width="auto"}_slideNav(){this._expandContainer.classList.toggle("hide-element")}}var A=new U;class I{_parentElemnent=document.querySelector(".container");_firstElement=document.querySelector(".recipe");_secondElement=document.querySelector(".search-results");focusedElement="recipe";addHandlerRender(e){["resize","load"].forEach(t=>window.addEventListener(t,e))}organizeBigGrid(){this._parentElemnent.style.gridTemplate=`
    "head head" 10rem
    "list recipe" minmax(100rem, auto) / 1fr 2fr`,this.showAll()}organizeTinyGrid(){this._parentElemnent.style.gridTemplate=`
    "head" 10rem
    "${this.focusedElement}" 10rem`,this.focusFirst()}focusFirst(){this._firstElement.classList.remove("hide-element"),this._secondElement.classList.add("hide-element")}focusSecond(){this._firstElement.classList.add("hide-element"),this._secondElement.classList.remove("hide-element")}showAll(){this._firstElement.classList.remove("hide-element"),this._secondElement.classList.remove("hide-element")}}var B=new I;const z=async function(){let e=window.location.hash.replace("#","");if(e)try{h(800)&&B.focusFirst(),F.renderSpinner(),H.update(v()),O.update(p.bookmarks),await g(e),F.render(p.recipe)}catch(e){console.error(e)}},D=async function(){try{h(800)&&B.focusSecond(),H.renderSpinner();let e=$.getQuery();if(console.log(e),!e)return;await f(e),H.render(v()),P.render({page:p.search.page,maxPage:p.search.maxPage})}catch(e){console.error(e)}},G=function(e=!0){e&&(p.recipe.bookmarked?w(p.recipe.id):b(p.recipe)),O.render(p.bookmarks)},C=async function(e){try{h(800)&&B.focusFirst(),j.renderSpinner(),await k(e),F.render(p.recipe),j.renderMessage(),O.render(p.bookmarks),window.history.pushState(null,"",`#${p.recipe.id}`),setTimeout(function(){j.render([!0]),j.toggleModal()},1e3)}catch(e){console.error(e),j.renderErrorMessage(e.message)}};O.addHandlerRender(G),F.addHandlerRender(z),F.addHandlerServings(function(e){_(e),F.update(p.recipe)}),F.addHandlerBookmark(G),P.addHandlerRender(function(e){p.search.page=e,H.render(v(e)),P.render({page:e,maxPage:p.search.maxPage})}),j.addHandlerUpload(C),B.addHandlerRender(function(){h(800)?(A.collapseNav(),B.organizeTinyGrid()):(A.showNav(),B.organizeBigGrid())}),$.addHandlerSearch(D);
//# sourceMappingURL=index.5677b92e.js.map
