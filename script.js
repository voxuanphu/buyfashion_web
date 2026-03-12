 const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");
const resultCount = document.getElementById("resultCount");
const heroProductCount = document.getElementById("heroProductCount");
const activeTags = document.getElementById("activeTags");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const emptyState = document.getElementById("emptyState");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const backToTop = document.getElementById("backToTop");

heroProductCount.textContent = `${products.length}+`;

function formatPrice(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function renderActiveTags(searchValue, categoryValue, priceValue, sortValue) {
  const tags = [];

  if (searchValue.trim()) {
    tags.push(`Từ khóa: ${searchValue.trim()}`);
  }

  if (categoryValue !== "all") {
    tags.push(`Danh mục: ${categoryValue}`);
  }

  if (priceValue !== "all") {
    tags.push(`Giá: dưới ${Number(priceValue).toLocaleString("vi-VN")}đ`);
  }

  if (sortValue !== "featured") {
    const sortLabelMap = {
      "price-asc": "Giá tăng dần",
      "price-desc": "Giá giảm dần",
      "rating-desc": "Đánh giá cao",
      "discount-desc": "Giảm giá mạnh"
    };
    tags.push(`Sắp xếp: ${sortLabelMap[sortValue] || sortValue}`);
  }

  activeTags.innerHTML = tags.map(tag => `<span class="active-tag">${tag}</span>`).join("");
}

function getFilteredProducts() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const categoryValue = categoryFilter.value;
  const priceValue = priceFilter.value;
  const sortValue = sortFilter.value;

  let filtered = [...products].filter(product => {
    const matchSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.shop.toLowerCase().includes(searchValue) ||
      product.badge.toLowerCase().includes(searchValue);

    const matchCategory =
      categoryValue === "all" || product.category === categoryValue;

    const matchPrice =
      priceValue === "all" || product.price <= Number(priceValue);

    return matchSearch && matchCategory && matchPrice;
  });

  switch (sortValue) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "discount-desc":
      filtered.sort((a, b) => b.discount - a.discount);
      break;
    default:
      filtered.sort((a, b) => {
        if (b.rating !== a.rating) return b.rating - a.rating;
        return b.discount - a.discount;
      });
      break;
  }

  renderActiveTags(searchValue, categoryValue, priceValue, sortValue);
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
          <div class="price-block">
            <span class="price-current">${formatPrice(product.price)}</span>
            <span class="price-old">${formatPrice(product.oldPrice)}</span>
          </div>
        </div>

        <div class="rating-row">
          <span>⭐ ${product.rating} / 5</span>
          <span>Đã bán ${product.sold}</span>
        </div>

        <div class="product-actions">
          <a class="action-btn action-view" href="${product.link}" target="_blank" rel="noopener noreferrer">
            Xem shop
          </a>
          <a class="action-btn action-buy" href="${product.link}" target="_blank" rel="noopener noreferrer">
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
  productsGrid.innerHTML = filtered.map(createProductCard).join("");

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    productsGrid.classList.add("hidden");
  } else {
    emptyState.classList.add("hidden");
    productsGrid.classList.remove("hidden");
  }
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "all";
  priceFilter.value = "all";
  sortFilter.value = "featured";
  renderProducts();
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
priceFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);
clearFiltersBtn.addEventListener("click", resetFilters);

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderProducts();
