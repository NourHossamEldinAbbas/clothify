document.addEventListener("click", (e) => {
  
  // ----- ADD TO CART BUTTON -----
  if (e.target.closest(".add-to-cart-btn")) {
    e.stopPropagation();

    const card = e.target.closest(".product-card");
    const productId = card.getAttribute("data-product-id");

    console.log("Added to cart:", productId);
    return;
  }

  // ----- PRODUCT CARD CLICK -----
  if (e.target.closest(".product-card")) {
    const card = e.target.closest(".product-card");
    const productId = card.getAttribute("data-product-id");

    window.location.href = `/Github/repos/clothify/pages/productPage.html?id=${productId}`;
  }

});
