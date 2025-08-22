document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-copy]');
  if(!btn) return;
  const sel = btn.getAttribute('data-copy');
  const el = document.querySelector(sel);
  if(!el) return;
  const text = el.innerText || '';
  navigator.clipboard.writeText(text).then(()=>{
    const prev = btn.textContent;
    btn.textContent = 'Copiado';
    setTimeout(()=> btn.textContent = prev || 'Copiar', 1200);
  });
});
