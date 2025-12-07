// Initialize cart count from localStorage on page load
function initializeCartCount() {
  const numberOfProductsElement = document.querySelector(".numberOfProducts");
  if (numberOfProductsElement) {
    const savedCount = localStorage.getItem("cartCount") || "0";
    numberOfProductsElement.textContent = savedCount;
  }
}

// Reset cart count
function resetCartCount() {
  localStorage.setItem("cartCount", "0");
  const numberOfProductsElement = document.querySelector(".numberOfProducts");
  if (numberOfProductsElement) {
    numberOfProductsElement.textContent = "0";
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initializeCartCount);

document.addEventListener("click", (e) => {
  
  // ----- ADD TO CART BUTTON -----
  if (e.target.closest(".add-to-cart-btn")) {
    e.stopPropagation();
    const numberOfProductsElement = document.querySelector(".numberOfProducts");
    let currentCount = parseInt(numberOfProductsElement.textContent) || 0;
    currentCount += 1;
    numberOfProductsElement.textContent = currentCount;
    
    // Save to localStorage
    localStorage.setItem("cartCount", currentCount);

    const card = e.target.closest(".product-card");
    const productId = card.getAttribute("data-product-id");

    // Get product data
    const product = getProductById(productId);
    if (product) {
      addToCart(product);
    }

    console.log("Added to cart:", productId);
    return;
  }

  // ----- PRODUCT CARD CLICK -----
  if (e.target.closest(".product-card")) {
    const card = e.target.closest(".product-card");
    const productId = card.getAttribute("data-product-id");

    window.location.href = `pages/productPage.html?id=${productId}`;
  }
});

// Add product to cart with full details
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  const cartItem = {
    id: product.id,
    title: product.name,
    price: product.sale_price || product.price,
    originalPrice: product.price,
    img: product.image,
    quantity: 1
  };
  
  cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));
}