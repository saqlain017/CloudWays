const navEl = document.getElementById('myNav');
const nav2_1 = document.getElementById('nav2_1');
console.log(navEl);
        window.addEventListener('scroll',()=>{
            if (window.scrollY>=600){
            navEl.classList.add('fixed-top');
            nav2_1.style.display = "block";
            } else if (window.scrollY<600){
            navEl.classList.remove('fixed-top');
            nav2_1.style.display = "none";
    }
})

let socialAside = document.getElementById('aside');
console.log(aside);
window.addEventListener('scroll',()=>{
    if(window.scrollY>=600 && window.scrollY<=21850){
        socialAside.style.display = "block";
    }else{
        socialAside.style.display = "none";
    }
    

})

let backTop = document.getElementsByClassName('backToTop')[0];
console.log(backTop);
window.addEventListener('scroll',()=>{
    if(window.scrollY>=10000){
        backTop.style.display = "block";
    }else{
        backTop.style.display = "none";
    }
})