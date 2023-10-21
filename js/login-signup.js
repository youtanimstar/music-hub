function showMenuItems(){
     const hamburgerItem = document.getElementById('hamb');
     hamburgerItem.style.display = 'none'
     const navbar = document.getElementById('mobile-menu');
     navbar.style.display = 'block';
     document.body.style.overflow = 'hidden'  
}

function hideMenuItems(){
     const navbar = document.getElementById('mobile-menu');
     navbar.style.display = 'none'
     const hamburgerItem = document.getElementById('hamb');
     hamburgerItem.style.display = 'block'
     document.body.style.overflow = 'auto' 
}
