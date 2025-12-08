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
          class="lg:hidden text-2xl text-dark-slate-grey hover:text-dark-slate-grey/70 transition-colors"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <!-- Logo -->
        <a href="../index.html" class="flex items-center gap-2">
          <img
            src="../assets/images/logo.png"
            alt="Clothify"
            class="h-20 w-auto object-contain"
          />
        </a>

        <!-- Icons -->
        <div class="flex items-center gap-8 text-xl">
          <button class="hover:text-dark-slate-grey/70 transition-colors">
            <a
              href="../pages/searching.html"
              class="hover:text-dark-slate-grey/70 transition-colors"
              ><i class="fa-solid fa-magnifying-glass"></i
            ></a>
          </button>
          <a
            href="../pages/login.html"
            class="hover:text-dark-slate-grey/70 transition-colors"
            ><i class="fa-regular fa-user"></i
          ></a>
          <button class="hover:text-dark-slate-grey/70 transition-colors relative">
            <a
              href="../pages/shoppingCart.html"
              class="hover:text-dark-slate-grey/70 transition-colors flex items-center gap-1"
              ><i class="fa-solid fa-bag-shopping"></i
            >
            <p class="numberOfProducts text-sm"></p></a>
          </button>
        </div>
      </div>

      <!-- Mobile Menu (Hidden by default) -->
      <div
        id="mobile-menu"
        class="hidden absolute top-20 left-0 w-full bg-old-lace border-b border-dark-slate-grey/10 shadow-lg lg:hidden overflow-y-auto"
        style="max-height: calc(100vh - 80px);"
      >
        <!-- Tab Buttons -->
        <div class="flex border-b border-dark-slate-grey/10 sticky top-0 bg-old-lace">
          <button
            id="mobile-tab-women"
            class="flex-1 py-4 text-center font-bold text-dark-slate-grey border-b-2 border-dark-slate-grey active-tab transition-colors"
          >
            Women
          </button>
          <button
            id="mobile-tab-men"
            class="flex-1 py-4 text-center font-bold text-dark-slate-grey/50 border-b-2 border-transparent hover:text-dark-slate-grey transition-colors"
          >
            Men
          </button>
          <button
            id="mobile-tab-fabrics"
            class="flex-1 py-4 text-center font-bold text-dark-slate-grey/50 border-b-2 border-transparent hover:text-dark-slate-grey transition-colors"
          >
            Fabrics
          </button>
        </div>

        <!-- Women Tab Content -->
        <div id="mobile-content-women" class="block p-4 space-y-6">
          <div>
            <h3 class="font-bold text-dark-slate-grey mb-3">Clothing</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Tops</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Dresses</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Pants</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Denim</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Sweaters</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">T-Shirts</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Jackets</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Activewear</a></li>
            </ul>
          </div>
          <div class="border-t border-dark-slate-grey/10 pt-4">
            <h3 class="font-bold text-dark-slate-grey mb-3">Accessories</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Watches</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Wallets</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Bags</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Sunglasses</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Hats</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Belts</a></li>
            </ul>
          </div>
          <div class="border-t border-dark-slate-grey/10 pt-4">
            <h3 class="font-bold text-dark-slate-grey mb-3">Brands</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Full Nelson</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">My Way</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Re-Arranged</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Counterfeit</a></li>
            </ul>
          </div>
        </div>

        <!-- Men Tab Content (Hidden by default) -->
        <div id="mobile-content-men" class="hidden p-4 space-y-6">
          <div>
            <h3 class="font-bold text-dark-slate-grey mb-3">Clothing</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Tops</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Pants</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Sweaters</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">T-Shirts</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Jackets</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Activewear</a></li>
            </ul>
          </div>
          <div class="border-t border-dark-slate-grey/10 pt-4">
            <h3 class="font-bold text-dark-slate-grey mb-3">Accessories</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Watches</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Wallets</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Bags</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Sunglasses</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Hats</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Belts</a></li>
            </ul>
          </div>
          <div class="border-t border-dark-slate-grey/10 pt-4">
            <h3 class="font-bold text-dark-slate-grey mb-3">Brands</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Re-Arranged</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Counterfeit</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Full Nelson</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">My Way</a></li>
            </ul>
          </div>
        </div>

                <!-- Fabrics Tab Content -->
        <div id="mobile-content-fabrics" class="block p-4 space-y-6">
          <div>
            <h3 class="font-bold text-dark-slate-grey mb-3">Natural Fibers</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Cotton</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Linen</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Wool</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Silk</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Hemp</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Cashmere</a></li>
            </ul>
          </div>
          <div class="border-t border-dark-slate-grey/10 pt-4">
            <h3 class="font-bold text-dark-slate-grey mb-3">Synthetic Fibers</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Polyester</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Nylon</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Acrylic</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Spandex</a></li>
            </ul>
          </div>
          <div class="border-t border-dark-slate-grey/10 pt-4">
            <h3 class="font-bold text-dark-slate-grey mb-3">Semi-Synthetic Fibers</h3>
            <ul class="space-y-2 text-sm text-dark-slate-grey/70">
              <li><a href="#" class="hover:text-dark-slate-grey">Viscose</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Modal</a></li>
              <li><a href="#" class="hover:text-dark-slate-grey">Lyocell</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>`;

  const navPlaceholder = document.getElementById("navbar-placeholder");
  if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;

  // Attach mobile menu button event listener AFTER navbar is loaded
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Tab switching for mobile menu
  const tabWomen = document.getElementById("mobile-tab-women");
  const tabMen = document.getElementById("mobile-tab-men");
  const tabFabrics = document.getElementById("mobile-tab-fabrics");
  const contentWomen = document.getElementById("mobile-content-women");
  const contentMen = document.getElementById("mobile-content-men");
  const contentFabrics = document.getElementById("mobile-content-fabrics");

  if (tabFabrics && tabWomen && tabMen && contentFabrics && contentWomen && contentMen) {
    tabFabrics.addEventListener("click", () => {
      contentFabrics.classList.remove("hidden");
      contentWomen.classList.add("hidden");
      contentMen.classList.add("hidden");
    });
    tabWomen.addEventListener("click", () => {
      contentWomen.classList.remove("hidden");
      contentMen.classList.add("hidden");
      contentFabrics.classList.add("hidden");
    });
    tabMen.addEventListener("click", () => {
      contentMen.classList.remove("hidden");
      contentWomen.classList.add("hidden");
      contentFabrics.classList.add("hidden");
    });
  }
  // Update active tab styling
  const tabs = [tabWomen, tabMen, tabFabrics];
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active-tab");
        t.classList.add("border-transparent");
        t.classList.remove("border-dark-slate-grey");
        t.classList.add("text-dark-slate-grey/50");
      });
      tab.classList.add("active-tab");
      tab.classList.remove("border-transparent");
      tab.classList.add("border-dark-slate-grey");
      tab.classList.remove("text-dark-slate-grey/50");
    });
  });
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