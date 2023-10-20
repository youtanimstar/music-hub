// ============================
// TITLE : The search section
// DESCRIPTION: In this section we can search any song from the data
// ============================

import { data } from "../data/data.js";
const box3 = document.querySelector('.box3')
const  note = document.createElement('div')
    note.classList.add(`text`);
let arr2 = [0]
let songs = data;
console.log(songs)
let arr9 = []
let arr10 = []
for (let i = 0; i < songs.length; i++) {
  arr9.push(songs[i].title.toLowerCase())
}
for (let i = 0; i < songs.length; i++) {
  arr10.push(songs[i].title.toLowerCase().split(''))
  // console.log(arr10[i])
}
// console.log(arr10[0][1])
const box4 = document.querySelector('.box4')
let ar = "";
const func1 = ()=>{
var box0j = document.querySelector('.box0i')
for (let i = 0; i < songs.length; ++i) {
  const htmlData = `<div class="boxii2">
    <div class="img"><img src="${songs[i].poster}" class="image" alt=""></div>
    <div class="ptag">${songs[i].title}</div>
    <div class="musicnametag">${songs[i].artist.name}</div>
    <div class="like">
    <div class="boxsub">
        <i class="fa fa-play play-button " aria-hidden="true" ></i>
    </div>
    <div class="time">${songs[i].duration}</div>
    <div class="add">
    <div class="boxsub" id = 'camel${i}'>
        <i class="fa fa-music" aria-hidden="true" id = 'camel${i}'></i>
    </div>
    </div>
    </div>

    </div>`
  box0j.insertAdjacentHTML('beforebegin', htmlData)
}
}
// if(ar == "")
// {
  func1()
  // box4.innerHTML=""
// }
let jk = "true"
const searchicon = document.querySelector('#search')
searchicon.addEventListener('input', () => {
   ar = searchicon.value
  for (let i = 0; i < arr9.length; i++) {
    
    if ((ar == arr9[i])) {
       box4.innerHTML =  `<div class="boxii2">
       <div class="img"><img src="${songs[i].poster}" class="image" alt=""></div>
       <div class="ptag">${songs[i].title}</div>
       <div class="musicnametag">${songs[i].artist.name}</div>
       <div class="like">
       <div class="boxsub">
       <i class="fa fa-play play-button " aria-hidden="true" ></i>
       </div>
       <div class="time">${songs[i].duration}</div>
       <div class="add">
       <div class="boxsub" id = 'camel${i}'>
           <i class="fa fa-music" aria-hidden="true" id = 'camel${i}'></i>
       </div>
       </div>
       </div>
       </div>`
       box4.style.height = "100vh"
      document.querySelector('body').style.overflowY = "hidden"
     
    }
   }
     
})
searchicon.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
      // for(let i=0;i<4;i++)
      // {
    box4.innerHTML = "";
    box4.style.height = "0vh"
      // }
         document.querySelector('body').style.overflowY = "scroll"

     
  }
});
const searchicon1 = document.querySelector('#search')
searchicon.addEventListener('input', () => {
   ar = searchicon1.value
  
  for (let i = arr10.length-1; i>=0 ; i--) {
    for(let j = 0 ; j<arr10[i].length;j++)
    {
          // console.log(arr10[i][j])
    if ((ar[j] == arr10[i][j])) {
       console.log(songs[i].title)
      const  note = document.createElement('div')
    note.classList.add(`text`);
       note.innerHTML =  `<div class="boxii2">
       <div class="img"><img src="${songs[i].poster}" class="image" alt=""></div>
       <div class="ptag">${songs[i].title}</div>
       <div class="musicnametag">${songs[i].artist.name}</div>
       <div class="like">
       <div class="boxsub">
          <i class="fa fa-play play-button " aria-hidden="true" ></i>
       </div>
       <div class="time">${songs[i].duration}</div>
       <div class="add">
       <div class="boxsub" id = 'camel${i}'>
           <i class="fa fa-music" aria-hidden="true" id = 'camel${i}'></i>
       </div>
       </div>
       </div>
       </div>`
       document.querySelector('.box4').append(note);
       box4.style.height = "100vh"
      document.querySelector('body').style.overflowY = "hidden"
      break;
    }
  }
  // console.log('/')
   } 
});

const music = new Audio();
const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach((playButton, index) => {
    playButton.addEventListener('click', () => {
        if (music.paused) {
            music.src = `${songs[index].song}`;
            music.play();
            playButton.classList.remove("fa-play");
            playButton.classList.add("fa-pause");
        } else {
            music.pause();
            playButton.classList.remove("fa-pause");
            playButton.classList.add("fa-play");
        }
    });
});

