'use strict'
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn')
const cartBtn = document.querySelector('#shopping-btn')

// Header toggler starts
menuBtn.addEventListener('click', function(){
    navbar.classList.toggle('active')
    cartItem.classList.remove('active')
    searchForm.classList.remove('active')
});

const cartItem = document.querySelector('.cart-items-container');
cartBtn.addEventListener('click', function(){
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
})

const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');
searchBtn.addEventListener('click', function(){
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
})
window.onscroll = () =>{
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
    searchForm.classList.remove('active')
}
// Header toggler ends


//Carts Functionality

const removeCartItemButtons = document.getElementsByClassName('btn-danger');
for(let i = 0; i < removeCartItemButtons.length; i++){
    let buttons = removeCartItemButtons[i];
    buttons.addEventListener('click', function(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    })
}
(function updateCartTotal () {
    let cartItemContainer =
    document.getElementsByClassName
    ('cart-items-container')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-item')
    for(let i=0; i < cartRows; i++){
        let cartRow = cartRows[i];
        
    }
}())