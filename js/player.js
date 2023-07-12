const music = new Audio("../music/test.mp3");

const songs = [
  {
    id: "1",
    songName: " On My Way",
    artist: "Alan Walker",
    poster: "img/1.jpg",
  },
  {
    id: "2",
    songName: "Alan Walker-Fade",
    artist: "Alan Walker",
    poster: "img/2.jpg",
  },
  {
    id: "3",
    songName: "Cartoon - On & On",
    artist: "Daniel Levi",
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName: `Warriyo - Mortals`,
    artist: "Mortals",
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName: "Ertugrul Gazi",
    artist: "Ertugru",
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName: "Electronic Music",
    artist: "Electro",
    poster: "img/6.jpg",
  },
  {
    id: "7",
    songName: "Agar Tum Sath Ho",
    artist: "Tamashaa",
    poster: "img/7.jpg",
  },
  {
    id: "8",
    songName: "Suna Hai",
    artist: "Neha Kakker",
    poster: "img/8.jpg",
  },
  {
    id: "9",
    songName: "Dilber",
    artist: "Satyameva Jayate",
    poster: "img/9.jpg",
  },
  {
    id: "10",
    songName: "Duniya",
    artist: "Luka Chuppi",
    poster: "img/10.jpg",
  },
  {
    id: "11",
    songName: "Lagdi Lahore Di",
    artist: "Street Dancer 3D",
    poster: "img/11.jpg",
  },
  {
    id: "12",
    songName: "Putt Jatt Da",
    artist: "Putt Jatt Da",
    poster: "img/12.jpg",
  },
  {
    id: "13",
    songName: "Baarishein",
    artist: "Atif Aslam",
    poster: "img/13.jpg",
  },
  {
    id: "14",
    songName: "Vaaste",
    artist: "Dhvani Bhanushali",
    poster: "img/14.jpg",
  },
  {
    id: "15",
    songName: "Lut Gaye",
    artist: "Jubin Nautiyal",
    poster: "img/15.jpg",
  },
];

let i;

for (i = 0; i < songs.length; i++) {
  let songCardHtml = document.createElement("div");
  songCardHtml.classList.add("song-card");
  const htmlData = `<img src="../images/${songs[i].id}.jpg" class="left" alt="${songs[i].id}" />
    <div class="right">
      <div class="title">${songs[i].songName}</div>
      <div class="description">
        ${songs[i].artist}
      </div>`;
  songCardHtml.insertAdjacentHTML("afterbegin", htmlData);
  document.querySelector(".song-card-section").append(songCardHtml);
}

// master play and wave js

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];
let condition = true;
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    condition = false;
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
    condition = true;
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (condition) {
      music.play();
      masterPlay.classList.remove("bi-play-fill");
      masterPlay.classList.add("bi-pause-fill");
      wave.classList.add("active2");
      condition = false;
    } else {
      music.pause();
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
      condition = true;
    }
    event.preventDefault();
  }
  if (event.code === "ArrowRight") {
    music.currentTime = music.currentTime + 10;
  }
  if (event.code === "ArrowLeft") {
    music.currentTime = music.currentTime - 10;
  }
});

// play bar js

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
  masterPlay.classList.add("bi-play-fill");
  masterPlay.classList.remove("bi-pause-fill");
  wave.classList.remove("active2");
  condition = true;
});

// make song cards play song

const songCard = document.querySelectorAll(".song-card");
const songCardButtons = document.querySelectorAll(".songs-button");
const player = document.querySelector(".player");
const playerTitle = document.querySelector("#player-title");
let cardIndex;
songCard.forEach((items, index) => {
  items.addEventListener("click", () => {
    cardIndex = index;
    console.log(cardIndex + 1);

    playerTitle.innerHTML = songs[index].songName;
    player.classList.add("active");
    music.src = `../music/${index + 1}.mp3`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  });
});

let back = document.getElementById("back");
let next = document.getElementById("next");
back.addEventListener("click", () => {
  cardIndex = cardIndex - 1;

  if (cardIndex < 0) {
    cardIndex = songs.length - 1;
    music.src = `../music/${cardIndex+1}.mp3`;
    console.log(cardIndex + 1);
    playerTitle.innerHTML = songs[cardIndex].songName;
    music.play();
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  } else {
    music.src = `../music/${cardIndex + 1}.mp3`;
    console.log(cardIndex + 1);
    playerTitle.innerHTML = songs[cardIndex].songName;
    music.play();
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  }
});

next.addEventListener("click", () => {
  cardIndex = cardIndex + 1;
  if (cardIndex > songs.length - 1) {
    cardIndex = 0;
    music.src = `../music/${cardIndex+1}.mp3`;
    playerTitle.innerHTML = songs[cardIndex].songName;
    music.play();
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  } else {
    music.src = `../music/${cardIndex + 1}.mp3`;
    console.log(cardIndex + 1);
    playerTitle.innerHTML = songs[cardIndex].songName;
    music.play();
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  }
});
