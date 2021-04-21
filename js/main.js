const langBtn = document.querySelectorAll('.lang-group .lang-item');

check_lang();

langBtn.forEach(function(lang){
  lang.addEventListener('click', function(){
    langBtn.forEach(function(el){
      el.classList.remove('active');
    });
    lang.classList.add('active');
    check_lang();
  });
});

function check_lang(){
  document.querySelectorAll('*[data-lang]:not(.lang-item)').forEach(function(el){
    el.style.display = 'none';
  });
    
  document.querySelectorAll('*[data-lang="' + document.querySelector('.lang-item.active').getAttribute('data-lang') + '"]:not(.lang-item)').forEach(function(el){
    el.style.display = 'block';
  });
}
