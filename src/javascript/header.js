let site = document.querySelector('.header__linklist');
let link = document.querySelectorAll('.header__link')

link.forEach(name => {
    console.log(name)
    if(site.id === name.innerText){
        name.classList.toggle('header__active');
    } 
    
})

let headerMenu        = document.querySelector('.header__size');
let headerOpen        = document.querySelector('.header__burger')
let headerMenuClose   = document.querySelector('.header__shutdown')


headerMenu.addEventListener('click', function(){


    if (headerOpen.classList.contains('header__closed')){

        headerOpen.classList.replace('header__closed', 'header__open');

    }else if(headerOpen.classList.contains('header__open')){

            headerOpen.classList.replace('header__open', 'header__closed');    
    }; 

}); 

headerMenuClose.addEventListener('click' , function() {
    if (headerOpen.classList.contains('header__open')){
        headerOpen.classList.replace('header__open', 'header__closed'); 
    }
})