const latestSongsRightScrolls = document.querySelector('#latest-songs-right-scrolls');
const latestSongsLeftScrolls = document.querySelector('#latest-songs-left-scrolls');
const latestSongsItem = document.querySelector('.latest-songs-item')
latestSongsRightScrolls.addEventListener("click", ()=>{
    latestSongsItem.scrollLeft -= 1000;
    console.log('hello');
    
})
latestSongsLeftScrolls.addEventListener("click", ()=>{
    latestSongsItem.scrollLeft += 1000;
})
