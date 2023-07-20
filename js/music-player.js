fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {

    const index = localStorage.getItem("cardId");

    console.log(index);
    

    const music = new Audio();
    const background = document.querySelector(".background");
    background.setAttribute("src", data[index].poster)
    music.src = `${data[index].song}`;
    const image = document.querySelector(".image-section");
    image.setAttribute("src", data[index].image);
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
    music.addEventListener('timeupdate', ()=>{
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


    })

    range.addEventListener("change", () => {
        music.currentTime = (range.value * music.duration) / 100;
        
      });
    
      music.addEventListener("ended", () => {
        play.classList.add("active");
        pause.classList.remove("active");
        // wave.classList.remove("active2");
        condition = true;
        range.value = 0;
        currentStart.innerText = `0:00`;
      });
  


  });
