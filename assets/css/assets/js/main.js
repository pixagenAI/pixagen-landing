// tahun footer
document.getElementById('year')?.append(new Date().getFullYear());

// mobile menu toggle
document.querySelector('.hamburger')?.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth',block:'start'});
      if(window.innerWidth<641){
        const nav = document.querySelector('.nav');
        if(nav) nav.style.display='none';
      }
    }
  });
});
