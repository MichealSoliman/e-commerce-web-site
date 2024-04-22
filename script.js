// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
};

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}




// single-product
const MainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");
for (let i = 0; i < smallImg.length; i++) {
  
    smallImg[i].onclick = function(){
        MainImg.src = smallImg[i].src
    }
}



