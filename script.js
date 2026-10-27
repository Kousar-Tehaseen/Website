let cartItemCount = 0;

function addToCart(itemName) {
    cartItemCount++;
    document.getElementById('cart-count').textContent = '(' + cartItemCount + ')';

    let toast = document.getElementById('toast');
    toast.innerHTML = '<i class="fas fa-check-circle" style="color: #2ed573;"></i> ' + itemName + ' added to cart!';
    toast.className = 'show';

    setTimeout(function () {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}

function showToast(message) {
    let toast = document.getElementById('toast');
    toast.innerHTML = '<i class="fas fa-bag-shopping" style="color: var(--primary);"></i> ' + message;
    toast.className = 'show';

    setTimeout(function () {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}