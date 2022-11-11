const navbarEmail = document.querySelector('.navbar-email');
const MenuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const iconCartShopping = document.querySelector('.navbar-shopping-cart')
const asideCartShopping = document.querySelector('#aside-ShoppingCart')
const cardsContainerProducts = document.querySelector('.cards-container')
const asideInfoProducts = document.querySelector('#aside-infoProducts')
const btnClose = document.querySelectorAll('.btn-close')
const myOrderContent = document.querySelector('.list-myOrden')
const lengthAddProduct = document.querySelector('#length-addProduct')
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
];

//productos seleccionados
let addProductsList = []



function toogleMenuDesktop () {
    asideCartShopping.classList.add('inactive')
    asideInfoProducts.classList.add('inactive')
    MenuDesktop.classList.toggle('inactive')
}

function toogleMenuMobile (){
    asideCartShopping.classList.add('inactive')
    asideInfoProducts.classList.add('inactive')
    menuMobile.classList.toggle('inactive')
}

function toogleCartShopping () {
    menuMobile.classList.add('inactive')
    MenuDesktop.classList.add('inactive')
    asideInfoProducts.classList.add('inactive')
    asideCartShopping.classList.toggle('inactive')
    if(!asideCartShopping.classList.contains('inactive')){
        renderAddProducts()
    }
}
function toogleInfoProducts(){
    asideCartShopping.classList.add('inactive');
    menuMobile.classList.add('inactive')
    MenuDesktop.classList.add('inactive')
    asideInfoProducts.classList.remove('inactive')
}
function closeInfoProduct(){
    asideCartShopping.classList.add('inactive');
    asideInfoProducts.classList.add('inactive')
}

navbarEmail.addEventListener('click', toogleMenuDesktop)
menuHamIcon.addEventListener('click', toogleMenuMobile)
iconCartShopping.addEventListener('click', toogleCartShopping)
btnClose.forEach((element) =>{
    element.addEventListener('click', closeInfoProduct)
})


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
        iconCart.addEventListener('click',() => addProductCart(product))
    
        figure.append(iconCart);
        namePrice.append(name,price)
    
        productInfo.append(namePrice,figure)
        productCard.append(imgProduct,productInfo)
    
        cardsContainerProducts.appendChild(productCard);
    })
}
function addProductCart(product){
    addProductsList.push(product)
    lengthAddProduct.textContent= addProductsList.length
    renderAddProducts()

}


function showInfoProducts (product) {
    toogleInfoProducts()
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

function showAddProducts (product) {
    const ShoppingCart = document.createElement('div');
    ShoppingCart.classList.add('shopping-cart')
    const figure = document.createElement('figure')
    const ImageProduct = document.createElement('img')
    const productName = document.createElement('p')
    const productPrice = document.createElement('p')
    const iconClose = document.createElement('img')

    ImageProduct.setAttribute('src', product.image)
    productName.textContent = product.name;
    productPrice.textContent ='$' + product.price
    iconClose.setAttribute('src', './icons/icon_close.png')
    figure.append(ImageProduct)
    ShoppingCart.append(figure,productName,productPrice,iconClose)
    myOrderContent.append(ShoppingCart)
}
function renderAddProducts(){
    addProductsList.forEach( (product) => {
        showAddProducts(product)
    })
}

renderProducts(productList);