const observed = document.querySelector('.intro')


const observer = new IntersectionObserver(
  entry=>{
    const header = document.body.querySelector('header')
    header.classList.toggle("active-header", entry.isIntersecting)
  },{
    threshold: 0.5,
  }
)

observer.observe(observed)



document.querySelector('.hashbar-container').onclick = () =>{
  document.querySelector('.context-menu').dataset.active = 'true'
  document.body.dataset.menu = 'true'
}

document.querySelector('.x').onclick = () =>{
  document.querySelector('.context-menu').removeAttribute('data-active')
  document.body.removeAttribute('data-menu')
}

document.querySelectorAll('.added-context').forEach( context =>{
  context.addEventListener('click', ()=>{
    context.closest('.context-items').querySelector('.extra').dataset.active !== 'true'?
    context.closest('.context-items').querySelector('.extra').dataset.active = 'true':context.closest('.context-items').querySelector('.extra').dataset.active = 'false'
  })
})

 const clickable = document.querySelectorAll('.clickable')
 clickable.forEach( clickable =>{
  clickable.addEventListener('click', ()=>{
    document.querySelector('.context-menu').removeAttribute('data-active')
    document.body.removeAttribute('data-menu')
  })
 })

setInterval( function animate(){
  slides = [...document.querySelector('.carousel').querySelectorAll('.intro')]
  activeSlide = document.querySelector('.carousel').querySelector('[data-active]')
  let offset = slides.indexOf(activeSlide)
  offset += 1
  if(offset >= slides.length) offset = 0
  nextSlide = slides[offset]
  nextSlide.dataset.active = 'true'
  delete activeSlide.dataset.active
},10000)

buttons = document.querySelectorAll('[data-carousel]')
buttons.forEach(button => {
  button.addEventListener('click', ()=>{
    slides = [...button.closest('.carousel').querySelectorAll('.intro')]
    activeSlide = button.closest('.carousel').querySelector('[data-active]')       
    let offset = slides.indexOf(activeSlide)
    button.dataset.carousel === 'next' ?offset += 1 : offset -=1
    if(offset >= slides.length) offset = 0
    if (offset < 0) offset = slides.length - 1
    nextSlide = slides[offset]
    nextSlide.dataset.active = 'true'
    delete activeSlide.dataset.active
  })
})
   


const kericho = [
  {
    Archdeaconary: 'Sotik',
    parish:'Manaret',
    residingRev: ' Ven philemon rotich',
    Churches: ['st Francis-Manaret' , 'st Nicholas-kisabei',  'tendwet','kiplabotwo', 'kimugul'],
    churchCouncil: ['Rose Tanui','Milcah', 'Yegon'],
    clergy: [ 'REV Samuel Rotich - vicar ', ' Agnes Ruto - lay reader st james olbutyo']
  }, {
    Archdeaconary: 'Sotik',
    parish:'Sotik',
    residingRev: 'REV Gilbert Bett',
    Churches: ['st Phillips' , 'st pauls',  'Nyatembe'],
    churchCouncil: ['Rose Tanui','Milcah', 'Yegon'],
    clergy: [ 'REV Samuel Rotich - vicar ', ' Agnes Ruto - lay reader st james olbutyo']
  },
{
  Archdeaconary: 'Sotik',
  parish:'Bomet',
  residingRev: ' REV Samuel Rotich ',
  Churches: ['st stephen bomet' , 'st james olbutyo' , ],
  churchCouncil: ['Agnes ruto -vice chair','linus Yego - secretary', 'Rose Adem -Treasurer'],
  clergy: [ 'REV Samuel Rotich - vicar ', ' Agnes Ruto - lay reader st james olbutyo']
},
{
  Archdeaconary: 'Sotik',
  parish:'Saruchat',
  residingRev: ' REV Dismus Kemboi ',
  Churches: ['saruchat' , 'Ngariet' , ' tembwa', 'Kapkures'],
  churchCouncil: ['Rose Tanui','Milcah', 'Yegon'],
  clergy: [ 'REV Samuel Rotich - vicar ', ' Agnes Ruto - lay reader st james olbutyo']
}];
  

  
//generating the pop-up //
  document.querySelectorAll('.img').forEach(img =>{
    img.addEventListener('click' ,()=>{
      const parish = img.dataset.parish
      //console.log(kericho[parish].Archdeaconary);
      if(document.querySelector('.larger-holder').dataset.active === 'true'){
        delete document.querySelector('.larger-holder').dataset.active
      } else{

        let Council = '';
        let clergy = '';

         kericho[parish].churchCouncil.forEach( member =>{
          Council += `<li> ${member} </li>`
        })
        kericho[parish].clergy.forEach( member =>{
          clergy += `<li> ${member} </li>`
        })
       
        document.querySelector('.con').innerHTML = `
        <span class="x" 
        onclick =" document.querySelector('.larger-holder').dataset.active === 'true'?  delete document.querySelector('.larger-holder').dataset.active: document.querySelector('.larger-holder').dataset.active = 'true';"
        >&#88;</span>
        <table>
          <tr>
          <th colspan="2"><img src="assets/images/ack-kericho.png" alt=""></th>
          </tr>
          <tr>
          <td class="head">
          Diocese:
          </td>
          <td>Kericho</td>
          </tr>
          <tr>
          <td class="head">Archdeaconary:</td>
          <td>${kericho[parish].Archdeaconary}</td>
          </tr>
          <tr>
          <td class="head">residing rev:</td>
          <td>${kericho[parish].residingRev}</td>
          </tr>
          <tr>
          <td class="head">churches:</td>
          <td> ${kericho[parish].Churches}</td>
          </tr>
        </table>
        <p>
          <h2>${kericho[parish].parish} Parish</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, officiis error possimus optio consequuntur adipisci ratione aspernatur repellendus deleniti sint. Distinctio quibusdam quis quaerat illum, dolores sequi nisi perferendis repellendus exercitationem voluptate tempore error? Aperiam quis aspernatur ipsam quasi est sed delectus ullam error similique tempore culpa ratione ab blanditiis perferendis nulla, cum voluptas facere! Vero assumenda eum veritatis. Mollitia vitae ad inventore, saepe ut beatae repellendus aperiam corrupti dolorum ratione assumenda id dolore, nemo vel!
        </p>
    
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique nesciunt atque repudiandae deserunt repellat sit officiis debitis aliquam exercitationem provident? Fugiat blanditiis minima possimus aliquid iure aperiam, provident ea officia odit sint corporis saepe adipisci! Eaque culpa cumque sunt! Veritatis, quaerat, earum consequatur quisquam ducimus eaque inventore, assumenda dignissimos ad doloremque commodi nihil repellat suscipit? Nesciunt, commodi! Quisquam voluptatum ullam similique, pariatur quos vitae! Sunt expedita reiciendis architecto! Molestias delectus adipisci, omnis in laborum quod rerum? Quos.
        </p>
        <hr>
        <p>
          <h3>Clergy</h3>
    
          <ul>
            ${clergy}
          </ul>
          <br>
          <h3>Parish Church Council</h3>
    
          <ul>
            ${
              Council
            }
          </ul>
        </p>
        `
        
        document.querySelector('.larger-holder').dataset.active = 'true';
      }
    })
  })

