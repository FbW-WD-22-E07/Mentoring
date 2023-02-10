import display_login_form from "./helper.js";

/** DISPLAY LOGIN FORM */
const login_btn = document.getElementById("login-btn");
login_btn.addEventListener("click", display_login_form);



/** Fetch Products */
async function fetchProducts () {


    try {
        let res = await fetch("https://fakestoreapi.com/products");
        let products_array = await res.json();
        
        if (products_array.length === 0) {
            throw Error('The number of products is too low');
        }

        
        products_array.forEach(product => {
            let productElem = `
                                <div class="product-card">
                                    <img src="${product.image}" alt="${product.title}" />
                                    <h4 class="product-name">${product.title}</h4>
                                    <p class="product-price">${product.price}</p>
                                    <p class="product-description">${product.description}</p>
                                    <button class="add-to-cart" id="pid-${product.id}">Add to Cart</button>
                                </div>
                                `;
            
                                let products = document.getElementById('products');
            products.innerHTML += productElem;
        });
    } catch (error) {
        console.log(error);
    }    
    
}
fetchProducts();
/* ------------------------- example user ------------------------- */
let user_in_db = {
    name: 'Dejan Ivkovic',
    username: 'dejan',
    password: '123'
}


/* ------------------------ authentication ------------------------ */
let submit_btn = document.getElementById('login-submit');
submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    try {
        if (user_in_db.username === username && user_in_db.password === password) {
            localStorage.setItem('isLoggedin', true);
            console.log('isLoggedin:', isLoggedin)
            alert('You are logged in successfully!')
        } else {
            throw Error('Please register first');
        }
        
    } catch (error) {
        alert(error.message)
    }


    console.log('login submited')
});




if (localStorage.getItem('isLoggedin')) {
    login_btn.innerHTML = 'Logout'
}

