fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const arr = [];
    data.forEach((item, index) => {
      arr.push(item);
    });
    let playlistImage = document.querySelector(".playlist-image");
    playlistImage.setAttribute("src", "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2")
    let playlistId = localStorage.getItem("currentPlaylist");

    let playlistObject = {};
    playlistObject = {
      title: JSON.parse(localStorage.getItem(playlistId)).title,
      id1: JSON.parse(localStorage.getItem(playlistId)).id,
      cardInfo: [],
    };

    // console.log(playlistObject);

    // adding the songs card to the suggestion section
    let i;
    for (i = 0; i < arr.length; i++) {
      let numArray = [];
      const songCard = document.createElement("div");
      songCard.classList.add("song-card");
      songCard.setAttribute("cardId", `${i}`);
      localStorage.setItem(`${i}`, `${arr[i].song}`);
      let num = getRandomArbitrary(0, arr.length);
      // numArray.push(num);

      const htmlData = `<img src="${arr[i].image}" alt="${arr[i].title}" />
      <div class="right">
          <div class="right-info">
            <div class="title">${arr[i].title}</div>
            <div class="description">${arr[i].artist.name}</div>
          </div>
          <div class="card-info">
        <h2 class="time">${arr[i].duration}</h2>
        <div class="button-section">
        <button class="button addButton" myId="${i}">Add</button>
        <a href="../dist/player.html" target="_blank"> 
        <button class="button playButton" myId="${i}">Play</button></div></a></div>
      </div>`;
      songCard.insertAdjacentHTML("afterbegin", htmlData);
      document.querySelector(".playlist-songs-suggestion").append(songCard);
    }

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
      let i;
    }

    // adding the songs card to the playlist section
    let numSongs = 0;
    const addCard = document.querySelectorAll(".addButton");
    addCard.forEach((item, index) => {
      
      item.addEventListener("click", () => {
        let id = Number(item.getAttribute("myId"));

        const songCard = document.createElement("div");
        songCard.classList.add("song-card");
        const htmlData = `<img src="${arr[id].image}" alt="${arr[id].title}" />
          <div class="right">
              <div class="right-info">
                <div class="title">${arr[id].title}</div>
                <div class="description">${arr[id].artist.name}</div>
              </div>
              <div class="card-info">
            <h2 class="time">${arr[id].duration}</h2>
            <div class="button-section">
            <button class="button deleteButton " myId="${id}">Delete</button>
            <a href="../dist/player.html" target="_blank"> 
        <button class="button playButton2" myId="${id}">Play</button></div></a></div>
          </div>`;
        songCard.insertAdjacentHTML("afterbegin", htmlData);
        document.querySelector(".playlist-songs").prepend(songCard);
        let temp1 = new Date();
        let temp2 = temp1.getTime();

        if(JSON.parse(
          localStorage.getItem(playlistId)
        ).cardInfo != undefined)
        {
          playlistObject.cardInfo = JSON.parse(
          localStorage.getItem(playlistId)
        ).cardInfo;
          
        }
        

        playlistObject.cardInfo.push({
          image: arr[id].image,
          title: arr[id].title,
          name: arr[id].artist.name,
          dur: arr[id].duration,
          id2: id,
          upid: temp2,
        });
        // console.log(playlistObject);

        localStorage.setItem(playlistId, JSON.stringify(playlistObject));

        // console.log(playlistObject);
        numSongs++;
        document.querySelector('.playlist-subtitle').innerHTML = `${numSongs} Songs`;
        const deleteCard = document.querySelector(".deleteButton");
        deleteCard.addEventListener("click", () => {
          songCard.remove();
          numSongs = numSongs - 1;
          document.querySelector('.playlist-subtitle').innerHTML = `${numSongs} Songs`;
        });

        const play2 = document.querySelectorAll(".playButton2")
    play2.forEach((item, index)=>{
      item.addEventListener('click', ()=>{
        let id = item.getAttribute("myid");
        localStorage.setItem('cardId', id);
        console.log(id);
        
      });
    });
    playlistImage.setAttribute("src", arr[id].image);





      });
    });

    

    const playlistTitle = document.querySelector(".playlist-tile");

    if (playlistId === "") {
      alert("No such Playlist exits");
      window.close();
    }
    playlistTitle.innerHTML = JSON.parse(
      localStorage.getItem(playlistId)
    ).title;

    const play = document.querySelectorAll(".playButton")
    play.forEach((item, index)=>{
      item.addEventListener('click', ()=>{
        let id = item.getAttribute("myid");
        localStorage.setItem('cardId', id);
        console.log(id);
        
      })
    })
    
  });