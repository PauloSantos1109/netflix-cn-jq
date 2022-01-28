const boxIcon = document.getElementById('boxIcon');
const navegar = document.getElementById('navegar');

navegar.addEventListener('mouseover', ()=>{
  boxIcon.style.display ="flex"
});
(navegar, boxIcon).addEventListener('mouseleave', ()=>{
  boxIcon.style.display ="none"
});

