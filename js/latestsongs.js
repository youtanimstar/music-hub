fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
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
    latestSongsRightScrolls.addEventListener("click", () => {
      latestSongsItem.scrollLeft -= 1000;
      console.log("hello");
    });
    latestSongsLeftScrolls.addEventListener("click", () => {
      latestSongsItem.scrollLeft += 1000;
    });
  });
