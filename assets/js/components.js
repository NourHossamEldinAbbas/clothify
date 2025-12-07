
function loadNavbar() {
  const navbarHTML = `
 <nav
      class="fixed w-full z-50 bg-old-lace/95 backdrop-blur-sm border-b border-dark-slate-grey/10 transition-all duration-300"
      id="navbar"
    >
      <div
        class="container mx-auto px-4 h-20 flex items-center justify-between"
      >
        <!-- Mobile Menu Button -->
        <button
          id="mobile-menu-btn"
          class="lg:hidden text-2xl text-dark-slate-grey"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <!-- Logo -->
        <a href="../index.html" class="flex items-center gap-2">
          <!-- Using the uploaded logo file if available, otherwise text fallback -->
          <img
            src="../assets/images/logo.png"
            alt="Clothify"
            class="h-20 w-auto object-contain"
          />
        </a>

        <!-- Icons -->
        <div class="flex items-center gap-5 text-lg">
          <button
            class="hover:text-dark-slate-grey/70 transition-colors hidden sm:block"
          >
            <a
            href="searching.html"
            class="hover:text-dark-slate-grey/70 transition-colors"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></a>
          </button>
          <a
            href="login.html"
            class="hover:text-dark-slate-grey/70 transition-colors"
            ><i class="fa-regular fa-user"></i
          ></a>
         <button class="hover:text-dark-slate-grey/70 transition-colors relative">
          <a
            href="shoppingCart.html"
            class="hover:text-dark-slate-grey/70 transition-colors"
            ><i class="fa-solid fa-bag-shopping relative flex gap-2">
            <p class="numberOfProducts text-sm"></p></i
          >
          </a>
                </button>
        </div>
      </div>

      <!-- Mobile Menu (Hidden by default) -->
      <div
        id="mobile-menu"
        class="hidden absolute top-20 left-0 w-full bg-old-lace border-b border-dark-slate-grey/10 shadow-lg lg:hidden"
      >
        <div class="flex flex-col p-4 space-y-4 font-medium">
          <a href="#new-arrivals" class="block">New Arrivals</a>
          <a href="#sale" class="block text-red-600">Sale</a>
          <a href="#collections" class="block">Collections</a>
          <a href="#fabrics" class="block">Fabrics</a>
          <hr class="border-dark-slate-grey/10" />
          <a href="project/login.html" class="block">Sign In / Register</a>
        </div>
      </div>
    </nav>
    <div class="h-20"></div> `;

  const navPlaceholder = document.getElementById("navbar-placeholder");
  if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;
}

function loadFooter() {
  const footerHTML = `
    <footer class="bg-dark-slate-grey text-old-lace pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <!-- Brand Info -->
          <div class="col-span-1 md:col-span-1 md:row-span-2">
            <a href="../index.html" class="inline-block mb-6">
              <img
                src="../assets/images/logoWhite.png"
                alt="Clothify"
                class="m-0 pr-5 h-30 w-auto opacity-90"
              />
            </a>
            <p class="text-old-lace/70 text-sm leading-relaxed mb-6">
              Revolutionizing the clothing industry by connecting factories,
              suppliers, and customers in one seamless ecosystem.
            </p>
            <div class="flex gap-4">
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                ><i class="fa-brands fa-instagram"></i
              ></a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                ><i class="fa-brands fa-twitter"></i
              ></a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                ><i class="fa-brands fa-tiktok"></i
              ></a>
            </div>
          </div>

          <!-- Quick Shops -->
          <div>
            <h4 class="font-bold text-lg mb-6">Quick Shop</h4>
            <ul class="space-y-3 text-old-lace/70 text-sm">
              <li>
                <a href="#" class="hover:text-old-lace transition-colors"
                  >NEW ARRIVALS</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-old-lace transition-colors"
                  >BEST SELLERS</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-old-lace transition-colors"
                  >MEN'S COLLECTION</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-old-lace transition-colors"
                  >WOMEN'S COLLECTION</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-old-lace transition-colors"
                  >FABRICS & MATERIALS</a
                >
              </li>
            </ul>
          </div>

          <!-- Customer Care -->
          <div>
            <h4 class="font-bold text-lg mb-6">Customer Care</h4>
            <ul class="space-y-3 text-old-lace/70 text-sm">
              <li>
                <a href="policies.html" class="hover:text-old-lace transition-colors"
                  >CONTACT US</a
                >
              </li>
              <li>
                <a href="policies.html"  class="hover:text-old-lace transition-colors"
                  >SHIPPING POLICY</a
                >
              </li>
              <li>
                <a href="policies.html" class="hover:text-old-lace transition-colors"
                  >RETURNS & EXCHANGES</a
                >
              </li>
              <li>
                <a href="policies.html" class="hover:text-old-lace transition-colors"
                  >PRIVACY POLICY</a
                >
              </li>
              <li>
                <a href="policies.html" class="hover:text-old-lace transition-colors"
                  >TERMS OF SERVICE</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar: Copyright Text & Payment Icons (Updated as requested) -->
        <div
          class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-old-lace/50"
        >
          <p>&copy; 2025 Clothify. All rights reserved.</p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <i class="fa-brands fa-cc-visa text-2xl"></i>
            <i class="fa-brands fa-cc-mastercard text-2xl"></i>
            <i class="fa-brands fa-cc-paypal text-2xl"></i>
          </div>
        </div>
      </div>
    </footer>
    `;

  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  loadFooter();
});

// Mobile Menu Script
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});