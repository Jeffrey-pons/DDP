export const addToCart = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const cartLink = document.getElementById("cart-link");
    const closeBtn = document.getElementById("close-btn");
    let addToCartBtn = document.querySelector(".add-to-cart-btn");
    const sidebarContent = document.querySelector(".sidebar-content");

    function checkCartEmpty() {
      const checkoutButton = document.getElementById("checkout");
      checkoutButton.style.display =
        sidebarContent.children.length > 0 ? "block" : "none";
    }

    closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("active");
    });

    cartLink.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.add("active");
    });

    addToCartBtn.addEventListener("click", function () {
      const productContainer = this.closest(".container-product");
      const productName = productContainer.querySelector("h2").textContent;
      const productPriceElement = productContainer.querySelector("h1");
      const productPrice = parseFloat(productPriceElement.textContent);
      const productName2 = productContainer.querySelector("h3").textContent;
      const productImageSrc =
        productContainer.querySelector(".img-product img").src;

      checkCartEmpty();

      // Vérifier si le produit est déjà dans le panier
      const existingProduct = sidebarContent.querySelector(
        `.product-item[data-product="${productName}"]`
      );

      if (existingProduct) {
        const productCounter =
          existingProduct.querySelector(".product-counter");
        const count = parseInt(productCounter.textContent) + 1;
        productCounter.textContent = count;

        const productPriceElement =
          existingProduct.querySelector(".product-price");
        const newPrice = parseFloat(productPriceElement.textContent) + 89;
        productPriceElement.textContent = `${newPrice.toFixed(2)} €`;
      } else {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.setAttribute("data-product", productName);
        productItem.innerHTML = `
          <div class="product-image">
            <img src="${productImageSrc}" alt="${productName}" class="product-image-panier" />
          </div>
          <div class="product-info">
            <h3 class="product-h3-panier">${productName}</h3>
            <p class="product-p-panier">${productName2}</p>
            <p class="product-price">${productPrice.toFixed(2)} €</p>
            <span>Quantité : <span class="product-counter">1</span></span>
          </div>
        `;
        sidebarContent.appendChild(productItem);
      }

      // Ouvrir la sidebar
      sidebar.classList.add("active");
      closeBtn.style.display = "block";
    });
  });
};
