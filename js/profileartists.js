// ============================
// TITLE : Profile artist js
// DESCRIPTION: In this js file the photos of all artist is loaded into the html file dynamically
// ============================

import { data } from "../data/data.js";

const porfileArr = [];
const profilephotoArr = [];
// pushing the data to the appropiate arrays

data.forEach((item, index) => {
  porfileArr.push(item.artist.name);
  profilephotoArr.push(item.artist.image);
});

// removing function to delete the duplicates names form the array

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// assigning the oputut

let trimmedArray = removeDuplicates(porfileArr);
let trimmedphotoArr = removeDuplicates(profilephotoArr);

// assigning the html for the artist profile section

trimmedArray.forEach((item, index) => {
  let artist = document.createElement("li");
  let htmlData = `<img src="${trimmedphotoArr[index]}" alt="${item}" />`;
  artist.insertAdjacentHTML("afterbegin", htmlData);
  document.querySelector("#popularArtist").append(artist);
});

// artist profile scroll js

const rightScrolls = document.querySelector("#right-scrolls");
const leftScrolls = document.querySelector("#left-scrolls");
const item = document.querySelector(".item");
rightScrolls.addEventListener("click", () => {
  item.scrollLeft -= 300;
});
leftScrolls.addEventListener("click", () => {
  item.scrollLeft += 300;
});

const keyCopyright = document.querySelector("#copyClick")
keyCopyright.addEventListener('click', ()=>{
  window.location.href="https://github.com/youtanimstar/music-hub/"
})