const t=document.getElementById("form");const n=document.getElementById("year");const e=document.getElementById("image");const o=document.getElementById("icon-container");const c=document.getElementById("mute");const s=document.getElementById("j-result");const a=document.getElementById("g-result");const d=document.getElementById("countdown");const u=document.getElementById("countdown2");const m=document.getElementById("countdown-title");const A=document.querySelector(".countdown-container");const r=new Audio("soundCompressed.mp3");let l=false,i=0,M,g,b;const k={".0":"A5",".052":"M25",".105":"A13",".157":"A2",".210":"M22",".263":"A10",".315":"M30",".368":"A18",".421":"A7",".473":"M27",".526":"A15",".578":"A4",".631":"M24",".684":"A12",".736":"A1",".789":"M21",".842":"A9",".894":"M29",".947":"A17"};const y=[["M26","A2","A9","A16"],["M27","A3 ","A10","A17"],["M21","M28","A4","A11","A18"],["M22","M29","A5","A12"],["M23","M30","A6","A13"],["M24","M31","A7","A14"],["M25","A1","A8","A15"]];const h=[[12,19,26,33],[11,18,25,32],[10,17,24,31],[16,23,30],[15,22,29],[14,21,28],[13,20,27]];const D=[[0,6,17,23,28,34,45,51,56,62,73,79,84,90],[1,7,12,18,29,35,40,46,57,63,68,74,85,91,96],[2,13,19,24,30,41,47,52,58,69,75,80,86,97],[3,8,14,25,31,36,42,53,59,64,70,81,87,92,98],[9,15,20,26,37,43,48,54,65,71,76,82,93,99],[4,10,21,27,32,38,49,55,60,66,77,83,88,94],[5,11,16,22,33,39,44,50,61,67,72,78,89,95]];const E=[null,[6,13],[5,12],[4,11,18],[3,10,17],[2,9,16],[1,8,15],[0,7,14]];function f(t){const e=(t/19%1).toString().slice(1,5)||".0";const n=k[e];const o=Number(n.slice(1));const c=n[0]==="M"?3:4;const s=new Date(`${t}-${c}-${o}`);let a,r,l,i,d,u,m,A,g;for(var f=0;f<y.length;f++){if(y[f].some(e=>e===n)){a=f}}for(var f=0;f<h.length;f++){if(h[f].some(e=>e===Number(t.toString().slice(0,2)))){r=f}}for(var f=0;f<D.length;f++){if(D[f].some(e=>e===Number(t.toString().slice(2)))){l=f}}m=a+r+l;for(var f=1;f<E.length;f++){if(E[f].some(e=>e===m)){i=f}}s.setDate(s.getDate()+i);switch(true){case t<1582:d=0;break;case t>=1582&&t<=1699:d=10;break;case t>=1700&&t<=1799:d=11;break;case t>=1800&&t<=1899:d=12;break;case t>=1900&&t<=2099:d=13;break;case t>=2100&&t<=2199:d=14;break;case t>=2200&&t<=2299:d=15;break;case t>=2300&&t<=2499:d=16;break;case t>=2500&&t<=2599:d=17;break;case t>=2600&&t<=2699:d=18;break;case t>=2700&&t<=2899:d=19;break;case t>=2900&&t<=2999:d=20;break;case t>=3e3&&t<=3099:d=21;break;case t>=3100&&t<=3299:d=22;break;case t>=3300&&t<=3399:d=23;break;case t===3400:d=24;break}if(t>=1582){u=new Date(s);u.setDate(s.getDate()+d);b=u;g=`${u.getDate()}. ${u.getMonth()+1}. ${u.getFullYear()}`}else{g="-- -- ----";L()}A=`${s.getDate()}. ${s.getMonth()+1}. ${s.getFullYear()}`;M={oldDate:A,newDate:g}}function $(){s.innerText=M.oldDate;a.innerText=M.newDate;S()}function v(e){e.preventDefault();l=t.checkValidity();if(l&&n.value){f(Number(n.value));$()}}function I(){i++;if(i>=3&&r.paused){r.play();o.hidden=false;c.style.opacity="1"}setTimeout(()=>{i=0},1e3)}function w(){r.pause();r.currentTime=0;c.style.opacity="0"}const B=1e3;const p=B*60;const x=p*60;const C=x*24;const S=()=>{g=setInterval(()=>{const e=(new Date).getTime();const t=b-e;const n=Math.floor(t/C);const o=Math.floor(t%C/x);const c=Math.floor(t%x/p);const s=Math.floor(t%p/B);let a,r,l,i;a=T(n," дан",["а"]);r=T(o," сат",["и","а"]);l=T(c," минут",["а"]);i=T(s," секунд",["и","е"]);if(t<0){L()}else{m.textContent=`Васкрс ${b.getFullYear()}. године прослављамо за`;d.textContent=`${n+a}, ${o+r},`;u.textContent=`${c+l} и ${s+i}.`;A.hidden=false}},B)};const T=(e,t,n)=>{let o=e.toString().slice(-2);let c=o.slice(-1);let s=t+n[0];if(o[0]==="1"&&o[1]){return s}else if(c==="1"){s=t}else if(n[1]&&(c==="2"||c==="3"||c==="4")){s=t+n[1]}return s};const L=()=>{A.hidden=true;clearInterval(g);m.textContent="";d.textContent="";u.textContent="";b=null};t.addEventListener("submit",v);e.addEventListener("click",I);o.addEventListener("click",w);r.addEventListener("ended",w);