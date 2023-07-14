fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    

    const porfileArr = [];
    const profilephotoArr = [];
    data.forEach((item, index) => {
      porfileArr.push(item.artist.name);
      profilephotoArr.push(item.artist.image);
    });

    function removeDuplicates(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    let trimmedArray = removeDuplicates(porfileArr);
    let trimmedphotoArr = removeDuplicates(profilephotoArr);

    trimmedArray.forEach((item, index) => {
      let artist = document.createElement("li");
      let htmlData = `<img src="${trimmedphotoArr[index]}" alt="${item}" />`;
      artist.insertAdjacentHTML("afterbegin", htmlData);
      document.querySelector("#popularArtist").append(artist);
    });


    const rightScrolls = document.querySelector("#right-scrolls");
    const leftScrolls = document.querySelector("#left-scrolls");
    const item = document.querySelector(".item");
    rightScrolls.addEventListener("click", () => {
      item.scrollLeft -= 300;
    });
    leftScrolls.addEventListener("click", () => {
      item.scrollLeft += 300;
    });
  });
