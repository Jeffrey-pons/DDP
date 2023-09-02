"use strict";

import { addToCart } from "./addtocart.js";
addToCart();

const sideBar = () => {
  const sidebar = document.getElementById("sidebar");
  const cartLink = document.getElementById("cart-link");
  const closeBtn = document.getElementById("close-btn");
  const body = document.body;

  function toggleSidebar(e) {
    e.preventDefault();
    e.stopPropagation();
    sidebar.classList.toggle("active");
    closeBtn.style.display = sidebar.classList.contains("active")
      ? "block"
      : "none";
  }

  cartLink.addEventListener("click", toggleSidebar);
  closeBtn.addEventListener("click", toggleSidebar);
  // body.addEventListener("click", hideSidebar);
};
sideBar();

const Checkout = () => {
  // Récupérer le bouton "Acheter" par son identifiant
  const buyButton = document.querySelector("#checkout");

  // Récupérer le bloc <div class="row">
  const rowDiv = document.querySelector(".payment");

  // Ajouter un écouteur d'événement au clic sur le bouton "Acheter"
  buyButton.addEventListener("click", function () {
    // Modifier le style CSS du bloc <div class="row">
    rowDiv.style.display = "block";
  });
};
Checkout();
