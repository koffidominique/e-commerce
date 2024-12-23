


let cartIcon = document.querySelectorAll('.cart_menu .fa-cart-shopping')
let cartMenu = document.querySelectorAll('.car_container')
let closeCart = document.querySelectorAll('.close_cart')

cartIcon.forEach(cart =>{
    cart.addEventListener('click',()=>{
        cartMenu.forEach(cartItem =>{
            cartItem.classList.toggle('show_cart_menu');
        });
    });
});
closeCart.forEach(cartClose =>{
    cartClose.addEventListener('click',()=>{
        cartMenu.forEach(cartItem =>{
            cartItem.classList.toggle('show_cart_menu');
        });
    });
});