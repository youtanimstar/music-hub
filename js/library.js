const box = document.querySelector('.boxii')
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let p1 = document.querySelector('.p1')
let int1 = document.querySelector('.in1')
let j = "true"
const ihb = document.querySelector('#imt')
const modal1 = document.querySelector('.modal')
const cls = document.querySelector('.cls')

const func1 = (text = '')=>{

    const note = document.createElement('div')
    note.classList.add('boxiii');
    // const edittext = note.querySelector('.area1')
    const htmlData = `<div class="boxv">
    <div class="boxl" ><div class="boxs"><i class="fa-solid fa-x" id="cls1"></i></div></div>
    <p class="p1" >${ihb.value}</p>
  </div>
`

  if(ihb.value =='')
  {
    alert('please give the title before creating the playlist');
  }
  else{

 
    note.insertAdjacentHTML('afterbegin',htmlData)
    // console.log(note)
    document.querySelector('.boxi').appendChild(note);
    note.querySelector('.boxs').addEventListener('click',()=>{
       note.remove()
        
    })
   
  }
  
    
   
}
// const func = ()=>{
    
//     j="true"
// }
// window.onclick = ((event)=>{
    cls.addEventListener('click',()=>{

    
        
        modal.style.display = "block";
        j="false"
    
    // else
    // {
    //    func()
    // }
})
p1.addEventListener('click',()=>{

    
        
    modal.style.display = "block";
    // j="false"

// else
// {
//    func()
// }
})
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
span.onclick = function() {
    modal.style.display = "none";
  }
//   window.onclick = ((event)=>{
//     modal.style.display = "none";
//   })

const btn1 = document.querySelector('.button1')
btn1.addEventListener('click',()=>{
    
    modal.style.display = "none";
   func1()
   ihb.value="";
   
   
   
})
