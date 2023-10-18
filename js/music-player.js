// ============================
// TITLE : Music player section
// DESCRIPTION: This section is used to play the music from the playlist page
// ============================

import { data } from "../data/data.js";
const index = localStorage.getItem("cardId");
let currIndex;
let queue = [];
if (localStorage.getItem("playQueue") === "true") {
  queue = JSON.parse(localStorage.getItem("currentQueue")).cardInfo;
  currIndex = queue.length - 1;
}

const music = new Audio();
const background = document.querySelector(".background");
background.setAttribute("src", data[index].poster);
music.src = `${data[index].song}`;
const image = document.querySelector(".image-section");
image.setAttribute("src", data[index].image);
const title = document.querySelector(".title");
title.innerHTML = data[index].title;
const artistName = document.querySelector(".artist");
artistName.innerHTML = data[index].artist.name;
// music player

let play = document.querySelector(".fa-play");
let pause = document.querySelector(".fa-pause");
play.classList.add("active");
play.addEventListener("click", () => {
  music.play();
  play.classList.remove("active");
  pause.classList.add("active");
});
pause.addEventListener("click", () => {
  music.pause();
  play.classList.add("active");
  pause.classList.remove("active");
});

let condition = true;

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (condition) {
      music.play();
      play.classList.remove("active");
      pause.classList.add("active");
      condition = false;
    } else {
      music.pause();
      play.classList.add("active");
      pause.classList.remove("active");
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

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let range = document.querySelector(".range");
range.value = 0;
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
  range.value = progressbar;
});

range.addEventListener("change", () => {
  music.currentTime = (range.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
  play.classList.add("active");
  pause.classList.remove("active");
  condition = true;
  range.value = 0;
  currentStart.innerText = `0:00`;

  if (queue.length !== 0 && currIndex > 0) { //play next song
    currIndex--;
    localStorage.setItem("cardId", queue[currIndex].id2);
    music.src = `${data[queue[currIndex].id2].song}`;
    background.setAttribute("src", data[queue[currIndex].id2].poster);
    image.setAttribute("src", data[queue[currIndex].id2].image);
    title.innerHTML = data[queue[currIndex].id2].title;
    artistName.innerHTML = data[queue[currIndex].id2].artist.name;
    music.play();
    play.click();
  } else {
    localStorage.removeItem("currentQueue");
    localStorage.removeItem("playQueue");
  }
});
