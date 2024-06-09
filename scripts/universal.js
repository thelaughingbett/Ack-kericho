const list = [...document.querySelector('.jsRightFaq').children]
list.forEach(list => {
  list.addEventListener('click',() =>{
   const p = [...list.querySelectorAll('p')]
   p.forEach( para =>{
    para.toggleAttribute('data-active')    
   })
  })
});