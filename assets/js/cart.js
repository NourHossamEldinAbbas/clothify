document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const emptyCart = document.getElementById("empty-cart");
  const cartContainer = document.getElementById("cart-container");

  // If cart empty → show empty page
  if (cart.length === 0) {
    emptyCart.classList.remove("hidden");
    cartContainer.classList.add("hidden");
    return;
  }

  // Otherwise show items
  emptyCart.classList.add("hidden");
  cartContainer.classList.remove("hidden");

  let html = `
    <div class="bg-white p-8 rounded-3xl shadow-xl border border-dark-slate-grey/10">
      <h2 class="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div class="space-y-6">
  `;

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    html += `
      <div class="flex items-center gap-4 border-b pb-4">
        <img src="${item.img}" class="w-20 h-20 rounded-lg object-cover border" />

        <div class="flex-1">
          <h3 class="font-bold">${item.title}</h3>
          <p class="text-dark-slate-grey/70">${item.price} EGP</p>
        </div>

        <button 
          data-index="${index}" 
          class="delete-item text-red-600 text-xl"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  });

  html += `
      </div>
      <div class="flex justify-between items-center mt-8">
        <h3 class="text-2xl font-bold">Total:</h3>
        <p class="text-2xl font-bold">${total} EGP</p>
      </div>

      <button class="mt-6 w-full bg-dark-slate-grey text-old-lace py-3 rounded-lg font-bold hover:opacity-90">
        Checkout
      </button>
    </div>
  `;

  cartContainer.innerHTML = html;

  // Delete item handler
  document.querySelectorAll(".delete-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");

      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });
});
