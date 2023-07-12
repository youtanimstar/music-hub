const rightScrolls = document.querySelector('#right-scrolls');
const leftScrolls = document.querySelector('#left-scrolls');
const item = document.querySelector('.item')
rightScrolls.addEventListener("click", ()=>{
    item.scrollLeft -= 300;
})
leftScrolls.addEventListener("click", ()=>{
    item.scrollLeft += 300;
})

