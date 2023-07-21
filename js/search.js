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
    poster: "../images/1.jpg",
    duration: "4:10"
  },
  {
    id: "2",
    songName: "Alan Walker-Fade",
    artist: "Alan Walker",
    poster: "../images/2.jpg",
    duration: "3:25"
  },
  {
    id: "3",
    songName: "Cartoon - On & On",
    artist: "Daniel Levi",
    poster: "../images/3.jpg",
    duration: "5:20"
  },
  {
    id: "4",
    songName: `Warriyo - Mortals`,
    artist: "Mortals",
    poster: "../images/4.jpg",
    duration: "5:25"
  },
  {
    id: "5",
    songName: "Ertugrul Gazi",
    artist: "Ertugru",
    poster: "../images/5.jpg",
    duration: "3:10"
  },
  {
    id: "6",
    songName: "Electronic Music",
    artist: "Electro",
    poster: "../images/6.jpg",
    duration: "4:05"
  },
  {
    id: "7",
    songName: "Agar Tum Sath Ho",
    artist: "Tamashaa",
    poster: "../images/7.jpg",
    duration: "5:25"
  },
  {
    id: "8",
    songName: "Suna Hai",
    artist: "Neha Kakker",
    poster: "../images/8.jpg",
    duration: "4:47"
  },
  {
    id: "9",
    songName: "Dilbar",
    artist: "Satyameva Jayate",
    poster: "../images/9.jpg",
    duration: "4:20"
  },
  {
    id: "10",
    songName: "Duniya",
    artist: "Luka Chuppi",
    poster: "../images/10.jpg",
    duration: "4:10"
  },
  {
    id: "11",
    songName: "Lagdi Lahore Di",
    artist: "Street Dancer 3D",
    poster: "../images/11.jpg",
    duration: "5:40"
  },
  {
    id: "12",
    songName: "Putt Jatt Da",
    artist: "Putt Jatt Da",
    poster: "../images/12.jpg",
    duration: "3:55"
  },
  {
    id: "13",
    songName: "Baarishein",
    artist: "Atif Aslam",
    poster: "../images/13.jpg",
    duration: "2:52"
  },
  {
    id: "14",
    songName: "Vaaste",
    artist: "Dhvani Bhanushali",
    poster: "../images/14.jpg",
    duration: "6:26"
  },
  {
    id: "15",
    songName: "Lut Gaye",
    artist: "Jubin Nautiyal",
    poster: "../images/15.jpg",
    duration: "5:20"
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
<div class="img"><img src="${songs[i].poster}" class="image" alt=""></div>
<div class="ptag">${songs[i].songName}</div>
<div class="musicnametag">${songs[i].artist}</div>
<div class="like">
<div class="boxsub">
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
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
       <div class="ptag">${songs[i].songName}</div>
       <div class="musicnametag">${songs[i].artist}</div>
       <div class="like">
       <div class="boxsub">
           <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
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
       console.log(songs[i].songName)
      const  note = document.createElement('div')
    note.classList.add(`text`);
       note.innerHTML =  `<div class="boxii2">
       <div class="img"><img src="${songs[i].poster}" class="image" alt=""></div>
       <div class="ptag">${songs[i].songName}</div>
       <div class="musicnametag">${songs[i].artist}</div>
       <div class="like">
       <div class="boxsub">
           <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
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
     
})