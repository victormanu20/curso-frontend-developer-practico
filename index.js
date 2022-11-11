const navbarEmail = document.querySelector('.navbar-email');
const MenuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const iconCartShopping = document.querySelector('.navbar-shopping-cart')
const asidecartShopping = document.querySelector('#aside-ShoppingCart')
const cardsContainerProducts = document.querySelector('.cards-container')
const asideInfoProducts = document.querySelector('#aside-infoProducts')
const btnClose = document.querySelectorAll('.btn-close')
console.log()
// arreglo de productos
const productList = [
    {
        name : 'Bike',
        price : 12000,
        image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name : 'motorcycle',
        price : 12000,
        image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name : 'monitor',
        price : 12000,
        image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name : 'mouse',
        price : 12000,
        image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name : 'mouse',
        price : 12000,
        image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name : 'mouse',
        price : 12000,
        image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name : 'mouse',
        price : 12000,
        image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name : 'mouse',
        price : 12000,
        image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
]

function isAsideCartShopping() {
    const isAsideCartShopping = asidecartShopping.classList.contains('inactive');
    if (!isAsideCartShopping){
        asidecartShopping.classList.add('inactive')
    }
}


function toogleMenuDesktop () {
    isAsideCartShopping()
    MenuDesktop.classList.toggle('inactive')
}

function toogleMenuMobile (){
    isAsideCartShopping()
    menuMobile.classList.toggle('inactive')
}

function toogleCartShopping () {
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isMenuDesktopClosed = MenuDesktop.classList.contains('inactive');

    if(!isMenuMobileClosed){
        menuMobile.classList.add('inactive')
    }
    if(!isMenuDesktopClosed){
        MenuDesktop.classList.add('inactive')
    }
    asidecartShopping.classList.toggle('inactive')
}


navbarEmail.addEventListener('click', toogleMenuDesktop)
menuHamIcon.addEventListener('click', toogleMenuMobile)
iconCartShopping.addEventListener('click', toogleCartShopping)



function renderProducts(arr) {
    arr.map((product) => {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image)
        imgProduct.addEventListener('click',() => showInfoProducts(product))
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const namePrice = document.createElement('div');
        const name = document.createElement('p');
        name.textContent= product.name;
        const price = document.createElement('p');
        price.textContent = '$' + product.price;
    
        const figure = document.createElement('figure');
        const iconCart = document.createElement('img');
        iconCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        figure.append(iconCart);
        namePrice.append(name,price)
    
        productInfo.append(namePrice,figure)
        productCard.append(imgProduct,productInfo)
    
        cardsContainerProducts.appendChild(productCard);
    })
}
function showInfoProducts (product) {
    asideInfoProducts.classList.remove('inactive')
    const ImageProduct = document.querySelector('.info-products__img-product')
    const descriptionProduct = document.querySelector('.info-products__description')
    const productPrice = document.querySelector('.info-products__price')
    const productName = document.querySelector('.info-products__name')
    const productText = document.querySelector('.info-products__text')
    ImageProduct.setAttribute('src',product.image);

    productPrice.textContent = '$' + product.price;
    productName.textContent = product.name;
    descriptionProduct.append(productPrice,productName,productText)
}
console.log
btnClose.forEach((element) =>{
    element.addEventListener('click', closeInfoProduct)
})

function closeInfoProduct () {
    asideInfoProducts.classList.add('inactive')
    asidecartShopping.classList.add('inactive')

}

renderProducts(productList);