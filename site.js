(function(){var r=document.documentElement,b=document.querySelector('.theme'),m=['auto','light','dark'],i=0;
try{i=m.indexOf(localStorage.getItem('theme'));if(i<0)i=0}catch(e){}
function set(){m[i]=='auto'?r.removeAttribute('data-theme'):r.setAttribute('data-theme',m[i]);b.textContent='Theme: '+m[i];b.setAttribute('aria-label','Theme: '+m[i]+'. Click to change.')}
b.onclick=function(){i=(i+1)%3;try{localStorage.setItem('theme',m[i])}catch(e){}set()};set()})();
