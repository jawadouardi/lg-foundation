(function(){
  const h=document.querySelector('.hamburger');
  const n=document.querySelector('.nav-links');
  if(h&&n){h.addEventListener('click',function(){n.classList.toggle('open');const o=n.classList.contains('open');h.setAttribute('aria-expanded',o)})}

  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      const item=q.closest('.faq-item');
      const isOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(i){i.classList.remove('open')});
      if(!isOpen)item.classList.add('open');
    });
  });

  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const msg=document.getElementById('formMsg');
      const cb=document.getElementById('privacyCheck');
      if(cb&&!cb.checked){msg.textContent='Please accept the privacy policy.';msg.style.color='#e53e3e';return}
      msg.textContent='Thank you for your message. We will respond within 2 business days.';msg.style.color='#276749';
      form.reset();
    });
  }
})();
