// ==========================
// TECNOOFERTAS MX PREMIUM
// ==========================

// Buscador de productos

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

const filter = this.value.toLowerCase();

const products = document.querySelectorAll(".product");

products.forEach(product => {

const text = product.innerText.toLowerCase();

if (text.includes(filter)) {
product.style.display = "block";
} else {
product.style.display = "none";
}

});

});

}

// Categorías

const categories = document.querySelectorAll(".category-card");

categories.forEach(category => {

category.addEventListener("click", () => {

const categoryName = category.innerText.toLowerCase();

const products = document.querySelectorAll(".product");

products.forEach(product => {

const productText = product.innerText.toLowerCase();

if (
productText.includes(categoryName) ||
categoryName.includes("hogar")
) {
product.style.display = "block";
} else {
product.style.display = "none";
}

});

});

});

// Mostrar todos los productos

function showAllProducts() {

const products = document.querySelectorAll(".product");

products.forEach(product => {
product.style.display = "block";
});

}

// Botón volver arriba

const backToTop = document.createElement("button");

backToTop.innerHTML = "⬆";

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#2563eb";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {
backToTop.style.display = "block";
} else {
backToTop.style.display = "none";
}

});

backToTop.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});

// Newsletter

const newsletterBtn =
document.querySelector(".newsletter button");

if (newsletterBtn) {

newsletterBtn.addEventListener("click", () => {

const email =
document.querySelector(".newsletter input").value;

if (email.length < 5) {

alert("Ingresa un correo válido");

} else {

alert(
"Gracias por suscribirte a TecnoOfertas MX 🚀"
);

}

});

}

// Animación de aparición

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

});

document.querySelectorAll(".product, .blog-card, .category-card")
.forEach(el => {

el.style.opacity = "0";
el.style.transform = "translateY(30px)";
el.style.transition = "0.6s";

observer.observe(el);

});

console.log("TecnoOfertas MX Premium cargado");
