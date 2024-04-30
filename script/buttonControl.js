let burgerBtn = document.querySelector(".js-burger-container");
let burgerMenu = document.querySelector(".js-burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function (){
    if(!isBurgerOpen){
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
        isBurgerOpen = true;

    }else if (isBurgerOpen){
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false; 
    }
}