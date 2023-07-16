const box = document.querySelector(".boxii");
var modal = document.getElementById("myModal");
const myBtn = document.querySelector('.myBtn');
var span = document.getElementsByClassName("close")[0];
let p1 = document.querySelector(".p1");
let int1 = document.querySelector(".in1");
let j = "true";
const ihb = document.querySelector("#imt");
const modal1 = document.querySelector(".modal");
const cls = document.querySelector(".cls");
const playlistObject = {};
const func1 = (id, value) => {
  const note = document.createElement("div");
  note.classList.add("boxiii");
  const htmlData = `<div class="boxv">
    <div class="boxl" ><div class="boxs"><i class="fa-solid fa-x" id="${id}"></i></div></div>
    <p class="p1" ><a href="../dist/playlist.html" target="blank" id="button${id}">${value}</a></p>
  </div>
`;

  if (value == "") {
    alert("please give the title before creating the playlist");
  } else {
    note.insertAdjacentHTML("afterbegin", htmlData);
    document.querySelector(".boxi").appendChild(note);
    note.querySelector(".boxs").addEventListener("click", () => {
      note.remove();
      localStorage.removeItem(id);
      localStorage.setItem("currentPlaylist", "");
    });
  }

  const button = document.getElementById(`button${id}`);

  button.addEventListener("click", () => {
    localStorage.setItem("currentPlaylist", id);
  });
};
cls.addEventListener("click", () => {
  modal.style.display = "block";
  j = "false";
});
p1.addEventListener("click", () => {
  modal.style.display = "block";
});
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
span.onclick = function () {
  modal.style.display = "none";
};

const btn1 = document.querySelector(".button1");
btn1.addEventListener("click", () => {
  modal.style.display = "none";
  let temp1 = new Date();
  let temp2 = temp1.getTime();
  playlistObject.title = ihb.value;
  playlistObject.id = temp2;
  func1(temp2, ihb.value);
  localStorage.setItem(temp2, JSON.stringify(playlistObject));
  ihb.value = "";
});

window.addEventListener("load", (e) => {
  let i;
  for (i = 0; i < localStorage.length; i++) {
    let key;
    let value;
    if (Number(localStorage.key(i))) {
      key = localStorage.key(i);
      value = JSON.parse(localStorage.getItem(key)).title;
      func1(key, value);
    }
  }
});

myBtn.addEventListener('click', ()=>{
  document.querySelector('.modal').classList.toggle('active');
})