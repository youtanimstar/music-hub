fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const arr = [];
    data.forEach((item, index) => {
      arr.push(item);
    });

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
            <button class="button deleteButton " myId="${id}">Delete</button></div>
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

    // window.addEventListener("load", () => {
    //     let i;
    //   let num = JSON.parse(localStorage.getItem(playlistId)).cardInfo.length;
    //   let cardObject = [];
    //   cardObject = JSON.parse(localStorage.getItem(playlistId)).cardInfo;

    //   for (i = 0; i < num; i++) {
    //     const songCard = document.createElement("div");
    //     songCard.classList.add("song-card");
    //     const htmlData = `<img src="${cardObject[i].image}" alt="${cardObject[i].title}" />
    //       <div class="right">
    //           <div class="right-info">
    //             <div class="title">${cardObject[i].title}</div>
    //             <div class="description">${cardObject[i].name}</div>
    //           </div>
    //           <div class="card-info">
    //         <h2 class="time">${cardObject[i].dur}</h2>
    //         <button class="button deleteButton " myId="${cardObject[i].id2}">Delete</button></div>
    //       </div>`;
    //     songCard.insertAdjacentHTML("afterbegin", htmlData);
    //     document.querySelector(".playlist-songs").prepend(songCard);
    //   }
      
    // });
  });
