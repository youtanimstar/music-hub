const box3 = document.querySelector('.box3')
const  note = document.createElement('div')
    note.classList.add(`text`);
let arr2 = [0]
// let note = []
const songs = [
  {
    id: "1",
    songName: "On My Way",
    artist: "Alan Walker",
    poster: "1.jpg",
  },
  {
    id: "2",
    songName: "Alan Walker-Fade",
    artist: "Alan Walker",
    poster: "2.jpg",
  },
  {
    id: "3",
    songName: "Cartoon - On & On",
    artist: "Daniel Levi",
    poster: "3.jpg",
  },
  {
    id: "4",
    songName: `Warriyo - Mortals`,
    artist: "Mortals",
    poster: "4.jpg",
  },
  {
    id: "5",
    songName: "Ertugrul Gazi",
    artist: "Ertugru",
    poster: "5.jpg",
  },
  {
    id: "6",
    songName: "Electronic Music",
    artist: "Electro",
    poster: "6.jpg",
  },
  {
    id: "7",
    songName: "Agar Tum Sath Ho",
    artist: "Tamashaa",
    poster: "7.jpg",
  },
  {
    id: "8",
    songName: "Suna Hai",
    artist: "Neha Kakker",
    poster: "8.jpg",
  },
  {
    id: "9",
    songName: "Dilbar",
    artist: "Satyameva Jayate",
    poster: "9.jpg",
  },
  {
    id: "10",
    songName: "Duniya",
    artist: "Luka Chuppi",
    poster: "10.jpg",
  },
  {
    id: "11",
    songName: "Lagdi Lahore Di",
    artist: "Street Dancer 3D",
    poster: "11.jpg",
  },
  {
    id: "12",
    songName: "Putt Jatt Da",
    artist: "Putt Jatt Da",
    poster: "12.jpg",
  },
  {
    id: "13",
    songName: "Baarishein",
    artist: "Atif Aslam",
    poster: "13.jpg",
  },
  {
    id: "14",
    songName: "Vaaste",
    artist: "Dhvani Bhanushali",
    poster: "14.jpg",
  },
  {
    id: "15",
    songName: "Lut Gaye",
    artist: "Jubin Nautiyal",
    poster: "15.jpg",
  },
];
let arr9 = []
let arr10 = []
for (let i = 0; i < songs.length; i++) {
  arr9.push(songs[i].songName.toLowerCase())
  
}
for (let i = 0; i < songs.length; i++) {
  arr10.push(songs[i].songName.toLowerCase().split(''))
  // console.log(arr10[i])
}
// console.log(arr10[0][1])
const box4 = document.querySelector('.box4')
let ar = "";
const func1 = ()=>{
var box0j = document.querySelector('.box0i')
for (let i = 0; i < songs.length; ++i) {
  const htmlData = `<div class="boxii2">
<div class="img"><img src="${songs[i].poster}" alt=""></div>
<div class="ptag">${songs[i].songName}</div>
<div class="musicnametag">${songs[i].artist}</div>
<div class="like">
<div class="boxsub">
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
</div>
<div class="time">5:27</div>
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
       <div class="img"><img src="${songs[i].poster}" alt=""></div>
       <div class="ptag">${songs[i].songName}</div>
       <div class="musicnametag">${songs[i].artist}</div>
       <div class="like">
       <div class="boxsub">
           <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
       </div>
       <div class="time">5:27</div>
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
       console.log(songs[i].songName)
      const  note = document.createElement('div')
    note.classList.add(`text`);
       note.innerHTML =  `<div class="boxii2">
       <div class="img"><img src="${songs[i].poster}" alt=""></div>
       <div class="ptag">${songs[i].songName}</div>
       <div class="musicnametag">${songs[i].artist}</div>
       <div class="like">
       <div class="boxsub">
           <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
       </div>
       <div class="time">5:27</div>
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
     
})