document.getElementById('year').textContent = new Date().getFullYear();

AOS.init({once:true, offset:120, duration:1000, easing:'ease-in-out'});

// Portrait Parallax + Zoom
const portrait = document.getElementById('portrait');
let rect;
portrait.addEventListener('mousemove', e=>{
  if(!rect) rect = portrait.getBoundingClientRect();
  const x = (e.clientX - rect.left)/rect.width - 0.5;
  const y = (e.clientY - rect.top)/rect.height - 0.5;
  portrait.style.transform = `rotateX(${y*-10}deg) rotateY(${x*10}deg) scale(1.05)`;
});
portrait.addEventListener('mouseleave', ()=>{
  portrait.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  rect = null;
});
