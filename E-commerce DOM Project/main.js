
const cart = []
const products = [
    {
        id: "1",
        name: "Play Station 5",
        price: 2000,
        img: ""
    },
    {
        id: "2",
        name: "iPhone X",
        price: 3000,
        img: ""
    },
    {
        id: "3",
        name: "Samsung TV",
        price: 4800,
        img: ""
    },
    {
        id: "4",
        name: "Lenovo ThinkPad",
        price: 4500,
        img: ""
    },
    {
        id: "5",
        name: "Type-C charger",
        price: 50,
        img: ""
    }
]
const content = document.getElementById("content")

const renderAboutUs = function () {
    //first clear content
    clearContent()
    const p = document.createElement("p")
    p.innerHTML = "this is the about us page"
    content.appendChild(p)
}

const renderProducts = function () {
    //first clear content
    clearContent()

    for (product of products) {
        const prodContainer = createProductContainer(product)

        const addButton = document.createElement("button")
        addButton.setAttribute("id", product.id)
        addButton.setAttribute("class", "prod-add-btn")
        addButton.onclick = function (event) {
            if (existsInCart(event.srcElement.id)) {
                alert("You already added this product to cart!")
            }
            else {
                for (prod of products) {
                    if (prod.id === event.srcElement.id) {
                        cart.push(prod)
                    }
                }
            }
        }
        addButton.innerHTML = "Add To Cart"
        //create product container

        prodContainer.appendChild(addButton)
        //add it to content container
        content.appendChild(prodContainer)
    }
}

const renderCart = function () {
    clearContent()
    for (product of cart) {
        const prodContainer = createProductContainer(product)

        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("id", product.id)
        deleteButton.setAttribute("class", "cart-item-delete-btn")
        deleteButton.onclick = function (event) {
            for (cartItemIndex in cart) {
                if (cart[cartItemIndex].id === event.srcElement.id) {
                    cart.splice(cartItemIndex, 1)
                }
            }
            renderCart()
        }
        deleteButton.innerHTML = "Remove From Cart"
        prodContainer.appendChild(deleteButton)
        //add it to content container
        content.appendChild(prodContainer)
    }
}

const createProductContainer = function (product) {
    const prodContainer = document.createElement("div")
    prodContainer.setAttribute("class", "prod-container")
    prodContainer.setAttribute("id", product.id)
    const prodName = document.createElement("p")
    prodName.setAttribute("class", "prod-name")
    prodName.innerHTML = product.name
    const prodPrice = document.createElement("p")
    prodPrice.setAttribute("class", "prod-price")
    prodPrice.innerHTML = product.price
    const prodImg = document.createElement("img")
    prodImg.setAttribute("class", "prod-img")
    prodImg.src = product.img
    prodContainer.appendChild(prodName)
    prodContainer.appendChild(prodPrice)
    prodContainer.appendChild(prodImg)

    return prodContainer
}

const addToCart = function (productId) {
    const productToAdd = {}
    for (prod of products) {
        if (prod.id === productId) {
            productToAdd = prod
        }
    }
    cart.push(productToAdd)
}

const existsInCart = function (productId) {
    for (cartItem of cart) {
        if (cartItem.id === productId) {
            return true
        }
    }
    return false
}

const clearContent = function () {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
} 