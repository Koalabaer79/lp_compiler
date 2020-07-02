console.info("Welcome to the Landingpage Compiler!");var elements=["nav","header","description","mid1","features","mid2","commands"],sections={description:"arrow1",mid1:"arrow2",features:"arrow3",mid2:"arrow4",commands:"arrow5"},timeShow=null,timeline={};const queryString=window.location.search,urlParams=new URLSearchParams(queryString),intro=urlParams.get("intro");var myCookie=document.cookie.indexOf("intro=");if(myCookie<0||"show"===intro){timeLine=[{id:"text_1",anim:"fadeIn",time:200},{id:"text_1",anim:"fadeOut",time:2200},{id:"text_2",anim:"fadeIn",time:3200},{id:"text_2",anim:"fadeOut",time:5200},{id:"text_3",anim:"fadeIn",time:6200},{id:"text_3",anim:"fadeOut",time:8200},{id:"background",anim:"fadeOut",time:8200},{id:"container",anim:"display",time:9200},{id:"background",anim:"hide",time:9200}];timeShow=9201;setCookie()}else{timeLine=[{id:"container",anim:"display",time:1},{id:"background",anim:"hide",time:1}];timeShow=2}function isInViewport(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function isElementXPercentInViewport(e,t){let i=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return!(Math.floor(100-(i.top>=0?0:i.top)/(+-i.height/1)*100)<t||Math.floor(100-(i.bottom-n)/i.height*100)<t)}var timeString=[1];function animate(e,t,i){timer=setTimeout(function(){document.getElementById(e).classList.add(t)},i),timeString.push(timer)}function stop(){timeString.forEach(e=>{clearTimeout(e)}),document.getElementById("background").classList.add("hide"),document.getElementById("container").classList.add("display"),fullyInViewport()}function setCookie(){var e=new Date;e.setTime(e.getTime()+864e5);var t="expires="+e.toUTCString();document.cookie="intro=shown; "+t}function fullyInViewport(){elements.forEach(e=>{var t=document.getElementById(e);isInViewport(t)&&(t.classList.add("fadeIn"),void 0!==sections[e]&&document.getElementById(sections[e]).classList.add("hidden"))})}function partlyInViewport(){elements.forEach(e=>{var t=document.getElementById(e);isElementXPercentInViewport(t,50)&&(t.classList.add("fadeIn"),void 0!==sections[e]&&document.getElementById(sections[e]).classList.add("hidden"))})}if(window.innerWidth>=800){var showPage=setTimeout(function(){fullyInViewport()},timeShow);window.addEventListener("scroll",function(e){partlyInViewport()})}else elements.forEach(e=>{document.getElementById(e).classList.add("fadeIn")});timeLine.forEach(e=>{animate(e.id,e.anim,e.time)});