fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let arr = [];
    data.forEach((item, index) => {
      arr.push(item);
    });

    const music = new Audio();
    data.forEach((item, index) => {
      let latestSong = document.createElement("li");
      let htmlData = ` <div class="item-text-section">
    <h2 class="item-title">${item.title}</h2>
    <p class="item-description">
      ${item.artist.name}
    </p>
    <a href="#${item.title}" class="item-button">listen now</a>
  </div>
  <img src="${item.poster}" alt="${item.artist.name}" />`;

      latestSong.insertAdjacentHTML("afterbegin", htmlData);
      document.querySelector(".latest-songs-item").append(latestSong);
    });

    const latestSongsRightScrolls = document.querySelector(
      "#latest-songs-right-scrolls"
    );
    const latestSongsLeftScrolls = document.querySelector(
      "#latest-songs-left-scrolls"
    );
    const latestSongsItem = document.querySelector(".latest-songs-item");
    const totalWidth = latestSongsItem.clientWidth * arr.length;
    let buttonClick = false;
    latestSongsRightScrolls.addEventListener("click", () => {
      buttonClick = true;
      if (latestSongsItem.scrollLeft === 0) {
        latestSongsItem.scrollLeft = totalWidth;
        
      } else {
        latestSongsItem.scrollLeft -= latestSongsItem.clientWidth;
      }
    });
    latestSongsLeftScrolls.addEventListener("click", () => {
      buttonClick = true;
      let checkwidth = latestSongsItem.scrollLeft + latestSongsItem.clientWidth;
      if (checkwidth >= totalWidth) {
        latestSongsItem.scrollLeft = 0;
      } else {
        latestSongsItem.scrollLeft += latestSongsItem.clientWidth;
      }
    });

    // automatic scroll
    setInterval(function () {
      if(buttonClick)
      {
        setTimeout(()=>{
          buttonClick = false;
        },5000)
      }
      else{
        let checkwidth = latestSongsItem.scrollLeft + latestSongsItem.clientWidth;
      if (checkwidth >= totalWidth) {
        latestSongsItem.scrollLeft = 0;
      } else {
        latestSongsItem.scrollLeft += latestSongsItem.clientWidth;
      }
      }
      
    }, 5000);
  });
