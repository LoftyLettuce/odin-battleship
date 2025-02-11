(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,'*{\n  padding: 0;\n  margin: 0;\n  color: var(---font-color);\n  font-family: "Montserrat", serif;\n}\n:root{\n  ---ship-color: #7c2d12;\n  ---sea-color: #06b6d4;\n  ---background-color: #171717;\n  ---font-color: #f8fafc;\n  ---miss-color: #fb923c;\n  ---hit-color: #b91c1c;\n}\nsvg{\n  fill: var(---font-color);\n  height: 2rem;\n}\n.home, .game, .congrat{\n  background-color: var(---background-color);\n}\n.home{\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2%;\n  gap: 2%;\n  box-sizing: border-box;\n}\n.home table{\n  flex: 1 1 0;\n  aspect-ratio: 1/1;\n}\n.home>button{\n  border: 1px solid var(---sea-color);\n  background-color: var(---background-color);\n  flex: 0;\n}\n.input{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.input>*{\n  max-width: 20%;\n}\n.input input, .input select, .input button{\n  border: 1px solid var(---sea-color);\n  background-color: var(---background-color);\n}\n.input input{\n  padding-left: 1rem;\n}\n.input button{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.game{\n  padding: 1%;\n  height: 100vh;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 7fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 2%;\n  column-gap: 5%;\n}\ntable{\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n}\ntr{\n  flex: 1 1 0;\n  display: flex;\n}\ntable button{\n  flex: 1 1 0;\n  background-color: var(---sea-color);\n  box-sizing: border-box;\n  border: 1px solid var(---background-color);\n}\n.hide .ship{\n  background-color: var(---sea-color);\n}\n.ship{\n  background-color: var(---ship-color);\n}\n.checked{\n  background-color: var(---miss-color);\n}\n.ship.checked{\n  background-color: var(---hit-color);\n}\n.congrat{\n  position: absolute;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.congrat button{\n  border: none;\n  padding: 1%;\n  background-color: #171717;\n  opacity: 100%;\n}',""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=o(h,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,n.d({},{Q:()=>E});var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),l=n.n(c),s=n(56),d=n.n(s),u=n(540),p=n.n(u),h=n(113),m=n.n(h),f=n(365),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(f.A,b),f.A&&f.A.locals&&f.A.locals;const v=function(){function e(e,t){const n=t.querySelectorAll("tr");for(let t=0;t<7;t++){const r=n[t].querySelectorAll("button");for(let n=0;n<7;n++)if(0==e.board.board[t][n])r[n].className="";else{if(1==e.board.board[t][n]){r[n].classList.add("checked");continue}r[n].className="ship"}}}return{createTable:function(e){const t=document.createElement("table");for(let n=0;n<e;n++){const r=document.createElement("tr");for(let t=0;t<e;t++){const e=document.createElement("button");e.setAttribute("row",n),e.setAttribute("col",t),r.appendChild(e)}t.appendChild(r)}return t},renderTable:e,connectTable:function(e){for(let t=0;t<7;t++){const n=e.querySelectorAll("tr");for(let r=0;r<7;r++){const o=n[t].querySelectorAll("button");o[r].addEventListener("click",(()=>{e.classList.contains("active")&&g.playGround(o[r].getAttribute("row"),o[r].getAttribute("col"))}))}}},createInput:function(t,n){const r=document.createElement("div");r.className="input";let o=document.createElement("select");for(let e=0;e<t.board.battleships.length;e++){const t=document.createElement("option");t.textContent=`Number ${e}`,t.value=e,o.appendChild(t)}let a=document.createElement("label");a.textContent="Ship:",a.appendChild(o),r.appendChild(a);for(let e=0;e<2;e++){const t=document.createElement("input");t.setAttribute("type","number"),t.setAttribute("min","0"),t.setAttribute("max","6"),t.required=!0,a=document.createElement("label"),a.textContent=0==e?"Row: ":"Col: ",a.appendChild(t),r.appendChild(a)}o=document.createElement("select");for(let e=0;e<2;e++){const e=document.createElement("option");o.appendChild(e)}o.children[0].textContent="Horizontal",o.children[0].value=!1,o.children[1].textContent="Vertical",o.children[1].value=!0,a=document.createElement("label"),a.textContent="Orientation: ",a.appendChild(o),r.appendChild(a);const i=document.createElement("button");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>ship-wheel</title><path d="M2,11L4.05,11.1C4.3,8.83 5.5,6.85 7.25,5.56L6.13,3.84C5.86,3.36 6,2.75 6.5,2.47C7,2.2 7.59,2.36 7.87,2.84L8.8,4.66C9.78,4.24 10.86,4 12,4C13.14,4 14.22,4.24 15.2,4.66L16.13,2.84C16.41,2.36 17,2.2 17.5,2.47C18,2.75 18.14,3.36 17.87,3.84L16.75,5.56C18.5,6.85 19.7,8.83 19.95,11.1L22,11A1,1 0 0,1 23,12A1,1 0 0,1 22,13L19.95,12.9C19.7,15.17 18.5,17.15 16.75,18.44L17.87,20.16C18.14,20.64 18,21.25 17.5,21.53C17,21.8 16.41,21.64 16.13,21.16L15.2,19.34C14.22,19.76 13.14,20 12,20C10.86,20 9.78,19.76 8.8,19.34L7.87,21.16C7.59,21.64 7,21.8 6.5,21.53C6,21.25 5.86,20.64 6.13,20.16L7.25,18.44C5.5,17.15 4.3,15.17 4.05,12.9L2,13A1,1 0 0,1 1,12A1,1 0 0,1 2,11M9.07,11.35C9.2,10.74 9.53,10.2 10,9.79L8.34,7.25C7.11,8.19 6.27,9.6 6.05,11.2L9.07,11.35M12,9C12.32,9 12.62,9.05 12.9,9.14L14.28,6.45C13.58,6.16 12.81,6 12,6C11.19,6 10.42,6.16 9.72,6.45L11.1,9.14C11.38,9.05 11.68,9 12,9M14.93,11.35L17.95,11.2C17.73,9.6 16.89,8.19 15.66,7.25L14,9.79C14.47,10.2 14.8,10.74 14.93,11.35M14.93,12.65C14.8,13.26 14.47,13.8 14,14.21L15.66,16.75C16.89,15.81 17.73,14.4 17.95,12.8L14.93,12.65M12,15C11.68,15 11.38,14.95 11.09,14.86L9.72,17.55C10.42,17.84 11.19,18 12,18C12.81,18 13.58,17.84 14.28,17.55L12.91,14.86C12.62,14.95 12.32,15 12,15M9.07,12.65L6.05,12.8C6.27,14.4 7.11,15.81 8.34,16.75L10,14.21C9.53,13.8 9.2,13.26 9.07,12.65Z" /></svg>',i.addEventListener("click",(()=>{const o=Array.from(r.querySelectorAll("input, select"));o.every((e=>e.checkValidity()))&&(t.board.placeShip(t.board.battleships[o[0].value],o[1].value,o[2].value,JSON.parse(o[3].value)),e(t,n))})),r.appendChild(i),r}}}(),g=function(){let e,t,n;function r(e){document.body.appendChild(E(e.name))}return{innit:function(r,o){const a=document.querySelector("body"),i=document.createElement("div");i.classList.add("game"),e=r,t=o,n=[v.createTable(7),v.createTable(7)];let c=[t,e];for(let e=0;e<2;e++){const t=document.createElement("h1");t.textContent=c[1-e].name;const r=document.createElement("div");r.append(t,n[e]),i.appendChild(r),v.renderTable(c[e],n[e]),v.connectTable(n[e])}n[0].className="active",n[0].classList.add("hide"),a.appendChild(i)},playGround:function(o,a){e.play(t.board,o,a)&&(n[0].classList.remove("active"),v.renderTable(t,n[0]),t.board.allShipSunk()&&r(e),t.play(e.board),v.renderTable(e,n[1]),e.board.allShipSunk()&&r(t),n[0].classList.add("active"))}}}();class C{constructor(e){this.hp=e,this.sunk=!(e>0)}hit(){this.hp>0&&(this.hp--,this.sunk=0==this.hp)}}class y{constructor(){this.board=Array(7).fill(0).map((()=>Array(7).fill(!1))),this.battleships=[]}placeShip(e,t,n,r){const o=this.board.map((t=>t.map((t=>t!=e&&t))));let a={value:t},i={value:n},c=r?a:i;const l=c.value=Math.min(7-e.hp,c.value);for(;c.value<l+e.hp;c.value++){if(o[a.value][i.value])return!1;o[a.value][i.value]=e}this.board=o}receiveAttack(e,t){if(this.board[e][t]){if(1==this.board[e][t])return!1;this.board[e][t].hit()}return this.board[e][t]=!0}innitBoard(){this.battleships.push(new C(2),new C(1),new C(1),new C(7),new C(3)),this.placeShip(this.battleships[0],0,0,!0),this.placeShip(this.battleships[1],1,3,!0),this.placeShip(this.battleships[2],1,6,!0),this.placeShip(this.battleships[3],3,0,!1),this.placeShip(this.battleships[4],6,2,!1)}allShipSunk(){return this.battleships.every((e=>e.sunk))}}class x{constructor(e){this.name=e,this.board=new y,this.board.innitBoard()}}class L extends x{constructor(e){super(e)}play(e,t,n){return e.receiveAttack(t,n)}}class w extends x{constructor(e){super(e),this.moves=Array(49).fill(0).map(((e,t)=>t)),this.board.board.forEach((e=>e.fill(!1)));const t=Array(7).fill(0).map(((e,t)=>t)),n=Math.round(100*Math.random())%2==0;for(let e=0;e<5;e++){const r=Math.floor(6*Math.random()),o=Math.floor(Math.random()*(t.length-1));0==this.board.placeShip(this.board.battleships[e],r,t[o],n)&&e--,t.splice(o,1)}}play(e){const t=Math.floor(Math.random()*(this.moves.length-1)),n=this.moves[t];return this.moves.splice(t,1),e.receiveAttack((n-n%7)/7,n%7)}}function A(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("h1");t.textContent="BATTLESHIP",e.appendChild(t);const n=v.createTable(7);e.appendChild(n);let r=new L("Human"),o=new w("Bot");v.renderTable(r,n),e.appendChild(v.createInput(r,n));const a=document.createElement("button");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>play</title><path d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>',a.addEventListener("click",(()=>{document.body.replaceChildren(),g.innit(r,o)})),e.appendChild(a),e}function E(e){const t=document.createElement("div");t.classList.add("congrat");const n=document.createElement("h1");n.textContent=e+" WIN!!!",t.appendChild(n);const r=document.createElement("button");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home-circle-outline</title><path d="M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14" /></svg>',r.addEventListener("click",(()=>{document.body.replaceChildren(),document.body.appendChild(A())})),t.appendChild(r),t}window.addEventListener("load",(()=>{document.querySelector("body").appendChild(A())}))})();