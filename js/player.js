// ============================
// TITLE : Player section js
// DESCRIPTION: In the home page there is a player section where if we click any horizontal card then a music player pop up and the music starts.
// ============================

import { data } from "../data/data.js";

const music = new Audio();
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];
let condition = true;
// Song Card section (home page)

data.forEach((item, index) => {
  let songCardHtml = document.createElement("div");
  songCardHtml.classList.add("song-card");
  songCardHtml.setAttribute("id", `${item.title}`);
  const htmlData = `<img src="${item.image}" class="left" alt="${item.title}" />
        <div class="right">
          <div class="title">${item.title}</div>
          <div class="description">
            ${item.artist.name}
          </div>`;
  songCardHtml.insertAdjacentHTML("afterbegin", htmlData);
  document.querySelector(".song-card-section").append(songCardHtml);
});

// Music palyer section


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

// Key press events ( play, pause, skip )

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

// player progress bar js

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
let songIndex;
songCard.forEach((item, index) => {
  item.addEventListener("click", () => {
    songIndex = index;
    playerTitle.innerHTML = data[index].title;
    player.classList.add("active");
    music.src = `${data[index].song}`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
      bar2.style.width = `0%`;
      dot.style.left = `0%`;
    });
  });
});

// Next and previous songs js

let back = document.getElementById("back");
let next = document.getElementById("next");

// previous song button js

back.addEventListener("click", () => {
  songIndex = songIndex - 1;

  if (songIndex < 0) {
    songIndex = songCard.length - 1;
    music.src = `${data[songIndex].song}`;
    playerTitle.innerHTML = data[songIndex].title;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  } else {
    music.src = `${data[songIndex].song}`;
    playerTitle.innerHTML = data[songIndex].title;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  }
});

// next song button js

next.addEventListener("click", () => {
  songIndex = songIndex + 1;
  if (songIndex >= songCard.length) {
    songIndex = 0;
    music.src = `${data[songIndex].song}`;
    playerTitle.innerHTML = data[songIndex].title;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  } else {
    music.src = `${data[songIndex].song}`;
    playerTitle.innerHTML = data[songIndex].title;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });
  }
});
