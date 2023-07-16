
fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const arr = [];
    data.forEach((item, index) => {
      arr.push(item);
    });


    // adding the songs card to the suggestion section
    let i;
    for (i = 0; i < 50; i++) {
      let numArray = [];
      const songCard = document.createElement("div");
      songCard.classList.add("song-card");
      let num = getRandomArbitrary(0, arr.length);
      numArray.push(num);

      const htmlData = `<img src="${arr[num].image}" alt="${arr[num].title}" />
      <div class="right">
          <div class="right-info">
            <div class="title">${arr[num].title}</div>
            <div class="description">${arr[num].artist.name}</div>
          </div>
          <div class="card-info">
        <h2 class="time">${arr[num].duration}</h2>
        <button class="button addButton" myId="${num}">Add</button></div>
      </div>`;
      songCard.insertAdjacentHTML("afterbegin", htmlData);
      document.querySelector(".playlist-songs-suggestion").append(songCard);
    }

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
      let i;
    }

    // adding the songs card to the playlist section

   
    const addCard = document.querySelectorAll(".addButton");
    addCard.forEach((item, index) => {
      item.addEventListener("click", () => {
        let id = Number(item.getAttribute("myId"));

        const songCard = document.createElement("div");
        songCard.classList.add("song-card");
        // songCard.setAttribute("class", "playlistSong");
        const htmlData = `<img src="${arr[id].image}" alt="${arr[id].title}" />
          <div class="right">
              <div class="right-info">
                <div class="title">${arr[id].title}</div>
                <div class="description">${arr[id].artist.name}</div>
              </div>
              <div class="card-info">
            <h2 class="time">${arr[id].duration}</h2>
            <button class="button deleteButton " myId="${id}">Delete</button></div>
          </div>`;
        songCard.insertAdjacentHTML("afterbegin", htmlData);
        document.querySelector(".playlist-songs").prepend(songCard);

        const deleteCard = document.querySelector('.deleteButton');
        deleteCard.addEventListener('click',()=>{
          songCard.remove();
          
          
        })

      });
      
      
    });

    
    const playlistTitle = document.querySelector(".playlist-tile");

    let playlistId = localStorage.getItem("currentPlaylist");

    if(playlistId === "")
    {
      alert("No such Playlist exits");
      window.close();
      
    }
    playlistTitle.innerHTML  = localStorage.getItem(playlistId);



  });
