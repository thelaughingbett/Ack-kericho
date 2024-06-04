//hash-menu functionality
document.querySelector('.hashbar-container').onclick = () =>{
  if(document.querySelector('.hashbar-container').dataset.clicked !== 'true'){
    document.querySelector('.hashbar-container').dataset.clicked = 'true';
    document.querySelector('.top-cont').style.display = 'flex';
    document.querySelectorAll('.header-info').forEach( header  =>{
      header.classList.add('header-inf')
      header.classList.remove('header-info')
    }    
    )
    //dropdown-menu functionality
    //there is a bug here fix it 
    document.querySelectorAll('.header-inf').forEach( header =>{
      header.addEventListener('click', ()=>{
        if(header.querySelector('.extension-info').dataset.active !== 'true'){

          document.querySelectorAll('.extension-info').forEach(info=>{
            info.removeAttribute('data-active')
            console.log('activated')
          } )
          header.querySelector('.extension-info').dataset.active = 'true'
          console.log('true')

        }else{

          header.querySelector('.extension-info').removeAttribute('data-active')
          console.log('nah')
        }
      })
    })    
  }else{
    document.querySelector('.hashbar-container').dataset.clicked = 'false';
    document.querySelector('.top-cont').style.display = 'none';
    document.querySelectorAll('.header-info').forEach( header  =>{
      header.classList.add('header-info')
    } )
    document.querySelectorAll('.extension-info').forEach(info=>{
      info.removeAttribute('data-active')
    } )  
  } 
}


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

