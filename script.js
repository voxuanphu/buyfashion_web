 const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const resultCount = document.getElementById("resultCount");
const heroProductCount = document.getElementById("heroProductCount");
const emptyState = document.getElementById("emptyState");

heroProductCount.textContent = products.length;

function formatPrice(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function getFilteredProducts() {
  const keyword = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  let filtered = [...products].filter((product) => {
    const matchKeyword =
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword) ||
      product.shop.toLowerCase().includes(keyword) ||
      product.badge.toLowerCase().includes(keyword);

    const matchCategory =
      category === "all" || product.category === category;

    return matchKeyword && matchCategory;
  });

  switch (sort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filtered.sort((a, b) => a.id - b.id);
      break;
  }

  return filtered;
}

function createProductCard(product) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <div class="badge-row">
          <span class="badge badge-discount">-${product.discount}%</span>
          <span class="badge badge-category">${product.category}</span>
        </div>
      </div>

      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>

        <div class="product-meta">
          <span class="meta-pill">${product.shop}</span>
          <span class="meta-pill">${product.badge}</span>
        </div>

        <div class="price-row">
          <span class="price-current">${formatPrice(product.price)}</span>
          <span class="price-old">${formatPrice(product.oldPrice)}</span>
        </div>

        <div class="rating-row">
          <span>⭐ ${product.rating}/5</span>
          <span>Đã bán ${product.sold}</span>
        </div>

<div class="product-actions">
  <a class="action-btn action-view"
     href="${product.merchantUrl || product.link}"
     target="_blank"
     rel="noopener">
     Xem shop
  </a>

  <a class="action-btn action-buy"
     href="${product.affiliateUrl || product.link}"
     target="_blank"
     rel="sponsored nofollow noopener">
     Mua ngay
  </a>
</div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  resultCount.textContent = filtered.length;

  if (filtered.length === 0) {
    productsGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  productsGrid.innerHTML = filtered.map(createProductCard).join("");
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);

renderProducts();
