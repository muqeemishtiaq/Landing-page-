let cart = [];

// 1. Function to add an item to the cart (using push)
function addItemToCart(item, price, quantity, discount = 0) {
    let cartItem = {
        item: item,
        price: price,
        quantity: quantity,
        discount: discount
    };
    cart.push(cartItem);  // Using push to add the item to the cart array
    updateCart();
}

// 2. Function to remove the last added item from the cart (using pop)
function removeLastItemFromCart() {
    if (cart.length > 0) {
        cart.pop();  // Using pop to remove the last item from the cart array
        updateCart();
    }
}

// 3. Function to view cart and displthis.ay items
function viewCart() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear current list

    cart.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.item} - $${item.price.toFixed(2)} x ${item.quantity} (Discount: ${item.discount}%)`;
        cartItems.appendChild(li);
    });
}

// 4. Function to calculate and display the total cost
function totalCost() {
    let total = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        let discountAmount = (item.discount / 100) * itemTotal;
        total += (itemTotal - discountAmount);
    });

    document.getElementById('totalCost').innerText = total.toFixed(2);
}

// Update the cart and total cost
function updateCart() {
    viewCart();
    totalCost();
}

// Functions for buttons
function addItem() {
    let item = document.getElementById('itemName').value;
    let price = parseFloat(document.getElementById('itemPrice').value);
    let quantity = parseInt(document.getElementById('itemQuantity').value);
    let discount = parseFloat(document.getElementById('itemDiscount').value) || 0;

    addItemToCart(item, price, quantity, discount);
}

function removeLastItem() {
    removeLastItemFromCart();
}
