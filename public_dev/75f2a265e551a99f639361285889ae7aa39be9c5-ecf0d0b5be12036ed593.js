(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+dU1":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),o=n.n(a),r=n("/MKj"),l=n("r5Q1"),c=n.n(l),u=function(e){var t=e.label,n=e.id,r=e.options,l=e.onChange,u=e.selectedOption,i=e.className,d=void 0===i?"":i,V=Object(a.useState)(!1),s=V[0],m=V[1],p="dropdown-"+n;return Object(a.useEffect)((function(){var e=function(e){var t=document.getElementById(p);(null==t?void 0:t.contains(e.target))||m(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[m]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:c.a.dropdownContainer+" "+(s?c.a.dropdownOpen:"")+" "+d,id:p},o.a.createElement("div",{className:c.a.dropdownToggle,onClick:function(){return m(!s)}},o.a.createElement("div",null,t),o.a.createElement("div",null,u.label)),o.a.createElement("div",{className:c.a.dropdownMenu,onBlur:function(){return m(!1)}},o.a.createElement("ul",{className:c.a.dropdownMenuContent},r.map((function(e){return o.a.createElement("li",{key:e.value,onClick:function(){l(e.value),m(!1)},className:c.a.dropdownMenuItem,value:e.value},e.label)}))))))},i=n("j/Ep"),d=n("No7A"),V=n("vd24"),s=n.n(V),m=function(e){var t=e.hasDifficultySetting,n=e.hasSizeSetting,a=Object(r.useSelector)((function(e){return e.game.options.size})),l=Object(r.useSelector)((function(e){return e.game.options.difficulty})),c=Object(r.useSelector)((function(e){return e.game.phase})),V=Object(r.useDispatch)(),m=[{value:i.b.easy,label:"Easy"},{value:i.b.normal,label:"Normal"},{value:i.b.hard,label:"Hard"}],p=[{value:i.a.small,label:"4x4"},{value:i.a.medium,label:"5x5"},{value:i.a.big,label:"6x6"}];return o.a.createElement("div",{className:s.a.settings},Boolean(n)&&o.a.createElement(u,{label:"Board size",className:s.a.customDropdown,id:"board-size",options:p,selectedOption:p.find((function(e){return e.value===a})),onChange:function(e){V(Object(d.a)(e)),c!==i.c.gameEnd&&V(Object(d.d)(e))}}),Boolean(t)&&o.a.createElement(u,{label:"Difficulty",id:"difficulty",selectedOption:m.find((function(e){return e.value===l})),options:m,onChange:function(e){V(Object(d.b)(e)),c!==i.c.gameEnd&&V(Object(d.d)(e))}}))}},"4XLq":function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),l=n("rCLJ"),c=n("yxp9"),u=n.n(c),i=n("uC36"),d=n("eWwy"),V=n.n(d),s=function(e){var t=e.game,n=Object(a.useState)(!0),c=n[0],d=n[1],s=i.a[t];return o.a.createElement("div",{className:V.a.top},o.a.createElement("div",{className:V.a.header},o.a.createElement("h1",{className:V.a.title},s.title),o.a.createElement("span",{className:V.a.sound,onClick:function(){d(!c);var e=document.getElementById("ost");c?e.play():e.pause()}},c?o.a.createElement(l.a,{size:32}):o.a.createElement(l.b,{size:32}))),o.a.createElement("audio",{id:"ost",loop:!0,src:u.a}),o.a.createElement("div",{className:V.a.nav},s.routes.map((function(e){return o.a.createElement(r.Link,{key:e.route,className:V.a.tab,activeClassName:V.a.active,to:e.route},e.label)}))))},m=n("9kNL"),p=n.n(m),A=function(e){var t=e.children,n=e.game;return o.a.createElement("div",{className:p.a.container},o.a.createElement(s,{game:n}),o.a.createElement("div",{className:p.a.content},t))}},"9kNL":function(e,t,n){e.exports={container:"Layout-module--container--j7Jey",content:"Layout-module--content--2aW9H"}},CpIh:function(e,t,n){e.exports=n.p+"static/playthrough-f6438af940546a3d46285fbf5c5de4d6.gif"},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),o=n.n(a),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.a.createContext&&o.a.createContext(r),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};function i(e){return function(t){return o.a.createElement(d,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return o.a.createElement(t.tag,c({key:n},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var n,a=e.attr,r=e.size,l=e.title,i=u(e,["attr","size","title"]),d=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&o.a.createElement("title",null,l),e.children)};return void 0!==l?o.a.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},No7A:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return V}));var a=n("j/Ep"),o=n("lQ4/"),r=n("xflN");function l(e){var t=parseInt(e),n=new Array(t*t).fill(0,0,t*t).map((function(e){return Math.random()})),l=Object(o.a)(n,t),c=[a.c.player1Turn,a.c.player2Turn],u=c[Math.floor(Math.random()*c.length)];return{type:r.f,payload:{phase:u,pieces:l.pieces,allMarbles:l.initialMarbles}}}function c(){return{type:r.c}}function u(e){return{type:r.e,payload:{cell:e}}}function i(e){return{type:r.d,payload:{size:e}}}function d(e){return{type:r.d,payload:{difficulty:e}}}function V(){return{type:r.a}}},O1PD:function(e,t,n){e.exports={content:"page-module--content--PPVci",wrapper:"page-module--wrapper--3Lkwf",card:"page-module--card--35xxk",container:"page-module--container--3Mqp5"}},SL6I:function(e,t,n){e.exports={button:"Button-module--button--3lPXX",animate1:"Button-module--animate1--2fRxM",animate2:"Button-module--animate2--FE7-H",animate3:"Button-module--animate3--3d0f0",animate4:"Button-module--animate4--2U4sP"}},Tz5b:function(e,t){e.exports="data:audio/mpeg;base64,SUQzBAAAAAAAVlREUkMAAAAMAAADMTk5Ni0wMi0wNwBUWFhYAAAAEwAAA0lFTkcAQmlsbCBXb2xmb3JkAFRTU0UAAAAPAAADTGF2ZjU3LjM2LjEwMAAAAAAAAAAAAAAA//NwAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAD+QBiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmKWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/////////////////////////////////8AAAAATGF2YzU3LjM5AAAAAAAAAAAAAAAAJAAAAAAAAAAAA/kUVf8HAAAAAAD/84BkAAx9CV0ooIgADPAC4l1BEAK6O2VIwAN5AwDHG+Ab/H6nPzn/QhCEIT/7nOc5z/+chCEIRpyEIQhCN/kIBgYGBgZzoQDAwMDAwMW6BwMDAwMDB8uD4Pv9QJh/g+D5/8H3xACYPg+H1A+D4Pg//4nB8H6wfB8/JJLLbro0yh+IAQBMH3xAH4f5cH+D7/KA+/BM+p3ggCb1AgGPBP8HwfNec//Lh///+D4fcpucuYmJh1ZkZePQHBZhAj84w+NrhFqBgCQYA7bpRjGLQfuW//OCZCMM2U+FjswoAxdTVvsdjFAH2J4CYfiIc0xBuQGmkW12NGRDUisqFDFECRCKArfOPUwoaaKyxVO//1Jc1Djm/p/6EWRKx3+d///8iV87ocdOJv///FWBomHh4l1AEQN/AEAhBAOQlTPanB4y52ADw/VrBYVicMpMc581Tv1MfR/mOREyXqa50xrtQ8i//zlT0N///NQ02aayt////9Geq9DWOIR6U/////zTW/Ueso9Y6paIZhoSCwAC0JgACAANBaKYoY0xUjqOSIcTXjj/84JkGw6hlzctyLQAEttaul+BKALDmBUzFl8L0NIGQtEy4ckcoXV/8YUKIdgcQjmSSq+YjhPGw9Uj+vX/mpPJY8Sx8eqBdr1//xPh5ksgSSJiUTVJc5////j2SRkkbssuoqSfV/////tUiZPKpiKAYDgUDgQDAYCAQCAQAP1+/N/mDpv1ZTf7lKEhb/xERDrOML//lRKaL//+xwGFjK1RXT////MEgYRQWytM6V/////9VZVKIrRTCRVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVf/zgmQWAAABpADgAAAAAANIAcAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"},U5E3:function(e,t,n){e.exports={buttonQuit:"Buttons-module--buttonQuit--3mYK9"}},U7va:function(e,t,n){e.exports=n.p+"static/win-ab3cb11060eac248dbe89b7950a005dc.mp3"},UE3f:function(e,t,n){e.exports={preloadImage1:"Board-module--preloadImage1--19Qjf",preloadImage2:"Board-module--preloadImage2--lFZpT",stage:"Board-module--stage--1qRCh",board:"Board-module--board--4t-NE",block:"Board-module--block--31UXZ",piece:"Board-module--piece--p-9hQ",obstacle:"Board-module--obstacle--iAPXD",selectedPlayer1:"Board-module--selectedPlayer1--2lVCq",selectedPlayer2:"Board-module--selectedPlayer2--bzg3m",empty:"Board-module--empty--1wnUx",tutorial:"Board-module--tutorial--3fm-b"}},XdKK:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("q1tI"),o=n.n(a),r=n("/MKj"),l=n("eqEe"),c=n.n(l),u=n("SL6I"),i=n.n(u),d=function(e){var t=e.label,n=(e.id,e.onClick),a=e.className,r=void 0===a?"":a;return o.a.createElement("div",{className:i.a.button+" "+r,onClick:n},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),t)},V=n("j/Ep"),s=n("No7A"),m=n("U5E3"),p=n.n(m),A=function(e){e.pause(),e.currentTime=0,e.play()},f=function(){var e=Object(r.useSelector)((function(e){return e.game.options.size})),t=Object(r.useSelector)((function(e){return e.game.phase})),n=Object(r.useDispatch)();return o.a.createElement("div",null,o.a.createElement("audio",{id:"buttonSound",src:c.a}),t!==V.c.gameEnd&&o.a.createElement(d,{className:p.a.buttonQuit,label:"Quit",onClick:function(){A(document.getElementById("buttonSound")),n(Object(s.c)())}}),o.a.createElement(d,{label:"New game",onClick:function(){A(document.getElementById("buttonSound")),n(Object(s.d)(e))}}))}},XmWl:function(e,t,n){e.exports={gameInfo:"GameInfo-module--gameInfo--3NxRb",playerInfo:"GameInfo-module--playerInfo--2u7Xf",p1:"GameInfo-module--p1--we2gx",p2:"GameInfo-module--p2--WSaKE"}},dWbV:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),o=n.n(a),r=n("/MKj"),l=n("j/Ep"),c=n("XmWl"),u=n.n(c),i=function(e){var t,n=e.vsComp,a=Object(r.useSelector)((function(e){return e.game.phase})),c=(t={},t[l.c.player1Turn]=n?"Your turn":"Player 1 turn",t[l.c.player2Turn]="Player 2 turn",t[l.c.computerTurn]="Computer turn",t[l.c.player1Wins]=(n?"You win":"Player 1 wins")+"!",t[l.c.player2Wins]=(n?"Computer":"Player 2")+" wins!",t)[a]||"",i=a===l.c.player1Turn||a===l.c.player1Wins;return o.a.createElement("div",{className:u.a.gameInfo},a!==l.c.gameEnd&&o.a.createElement("div",{className:u.a.playerInfo+" "+(i?u.a.p1:u.a.p2),id:"game-info"},c))}},eWwy:function(e,t,n){e.exports={top:"Header-module--top--8yFkq",header:"Header-module--header--1rl48",sound:"Header-module--sound--23dFt",title:"Header-module--title--10s7Z",nav:"Header-module--nav--1H61L",tab:"Header-module--tab--2YSrf",active:"Header-module--active--3R6RC"}},eqEe:function(e,t,n){e.exports=n.p+"static/button-0859886874293b3a7807d701de4e69dd.mp3"},jj42:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("q1tI"),o=n.n(a),r=n("/MKj"),l=n("Tz5b"),c=n.n(l),u=n("CpIh"),i=n.n(u),d=n("U7va"),V=n.n(d),s=n("j/Ep"),m=n("No7A"),p=n("UE3f"),A=n.n(p),f=function(e){e.pause(),e.currentTime=0,e.play()},b=function(e){var t=e.handleBothPlayers,n=Object(a.useState)(!1),l=n[0],u=n[1],d=Object(r.useSelector)((function(e){return e.game.phase})),p=parseInt(Object(r.useSelector)((function(e){return e.game.options.size})),10),b=Object(r.useSelector)((function(e){return e.game.pieces})),y=Object(r.useDispatch)(),v=function(){u(!1),y(Object(m.f)())},E=function(e,n,a,o){(t||d===s.c.player1Turn)&&n.type===s.e.piece&&(u(!0),e.preventDefault(),f(document.getElementById("clickSound")),y(Object(m.e)(a*p+o)))},g=function(e,n,a){(t||d===s.c.player1Turn)&&l&&e.type===s.e.piece&&(f(document.getElementById("clickSound")),y(Object(m.e)(n*p+a)))};return o.a.createElement("div",{className:A.a.stage},o.a.createElement("div",{className:A.a.preloadImage1}),o.a.createElement("div",{className:A.a.preloadImage2}),o.a.createElement("audio",{id:"clickSound",src:c.a}),o.a.createElement("audio",{id:"winSound",src:V.a}),d===s.c.gameEnd?o.a.createElement("img",{className:A.a.tutorial,alt:"Game Tutorial",src:i.a}):o.a.createElement("table",{className:A.a.board,onMouseUp:function(){return v()},onTouchEnd:function(){return v()}},o.a.createElement("tbody",null,b.slice(0,p).map((function(e,t){return o.a.createElement("tr",null,b.slice(t*p,t*p+p).map((function(e,n){return o.a.createElement("td",{className:A.a.block+" "+(a=e.type,(r={},r[s.e.obstacle]=A.a.obstacle,r[s.e.empty]=A.a.empty,r[s.e.piece]=A.a.piece,r[s.e.selected]=d===s.c.player1Turn?A.a.selectedPlayer1:A.a.selectedPlayer2,r)[a]),key:n,id:e.type+n,onMouseDown:function(a){return E(a,e,t,n)},onTouchStart:function(a){return E(a,e,t,n)},onMouseOver:function(){return g(e,t,n)},onTouchMove:function(){return g(e,t,n)}});var a,r})))})))))}},r5Q1:function(e,t,n){e.exports={dropdownContainer:"Dropdown-module--dropdown-container--3cArm",dropdownToggle:"Dropdown-module--dropdown-toggle--2Jwc9",dropdownMenu:"Dropdown-module--dropdown-menu--37o-7",dropdownMenuContent:"Dropdown-module--dropdown-menu-content--1ulcq",dropdownMenuItem:"Dropdown-module--dropdown-menu-item--192E7",dropdownOpen:"Dropdown-module--dropdown-open--3-1QB"}},uC36:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a,o=((a={})[n("j/Ep").d.randix]={title:"Randix",routes:[{route:"/randix/",label:"Home"},{route:"/randix/vs-player/",label:"vs Player"},{route:"/randix/vs-computer/",label:"vs Cp"}]},a)},vd24:function(e,t,n){e.exports={settings:"Settings-module--settings--3ThMv",label:"Settings-module--label--1TUCt",customDropdown:"Settings-module--customDropdown--2GisM"}},yxp9:function(e,t,n){e.exports=n.p+"static/Wallpaper-e63e046a58bdc1f0a28e56777708e45d.mp3"}}]);
//# sourceMappingURL=75f2a265e551a99f639361285889ae7aa39be9c5-ecf0d0b5be12036ed593.js.map