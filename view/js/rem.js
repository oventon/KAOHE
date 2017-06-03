function client(){
var designWidth = 375, rem2px = 37.5;
document.documentElement.style.fontSize = 
  ((window.innerWidth / designWidth) * rem2px) + 'px';
}

client();