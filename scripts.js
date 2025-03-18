let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartCount++;
    cartTotal += productPrice;

    // Update cart count in header
    document.getElementById("cart-count").textContent = cartCount;

    // Update cart section
    document.getElementById("cart-section").style.display = 'block';
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `$${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    document.getElementById("cart-total").textContent = cartTotal.toFixed(2);
}

function checkout() {
    alert(`Your total is $${cartTotal.toFixed(2)}. Proceeding to payment.`);
    cart = [];
    cartCount = 0;
    cartTotal = 0;

    // Update cart display
    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-section").style.display = 'none';
}
