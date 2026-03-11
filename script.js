 const products = [
  {
    id: 1,
    name: "Áo thun nam basic cotton mềm",
    price: 199000,
    shop: "Men Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "basic",
    label: "Basic"
  },
  {
    id: 2,
    name: "Áo thun nam oversize trẻ trung",
    price: 229000,
    shop: "Urban Style",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "oversize",
    label: "Oversize"
  },
  {
    id: 3,
    name: "Áo thun nam thể thao khô thoáng",
    price: 249000,
    shop: "Sport Max",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "sport",
    label: "Thể thao"
  },
  {
    id: 4,
    name: "Áo thun nam cổ tròn basic dễ mặc",
    price: 189000,
    shop: "Basic Wear",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "basic",
    label: "Basic"
  },
  {
    id: 5,
    name: "Áo thun nam oversize phong cách Hàn",
    price: 239000,
    shop: "Korean Style",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "oversize",
    label: "Oversize"
  },
  {
    id: 6,
    name: "Áo thun nam chạy bộ co giãn",
    price: 259000,
    shop: "Run Active",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "sport",
    label: "Thể thao"
  },
  {
    id: 7,
    name: "Áo thun nam trơn form đẹp",
    price: 205000,
    shop: "Daily Fit",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "basic",
    label: "Basic"
  },
  {
    id: 8,
    name: "Áo thun nam oversize streetwear",
    price: 245000,
    shop: "Street Mood",
    image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "oversize",
    label: "Oversize"
  },
  {
    id: 9,
    name: "Áo thun gym nam co giãn 4 chiều",
    price: 269000,
    shop: "Gym Zone",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "sport",
    label: "Thể thao"
  },
  {
    id: 10,
    name: "Áo thun nam basic màu đen",
    price: 199000,
    shop: "Black Tee",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "basic",
    label: "Basic"
  },
  {
    id: 11,
    name: "Áo thun nam oversize cotton dày",
    price: 255000,
    shop: "Form Rộng Shop",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "oversize",
    label: "Oversize"
  },
  {
    id: 12,
    name: "Áo thun nam tennis thể thao",
    price: 279000,
    shop: "Move Fast",
    image: "https://images.unsplash.com/photo-1506629905607-d9d4b2a78a1c?auto=format&fit=crop&w=800&q=80",
    link: "https://shopee.vn",
    tag: "sport",
    label: "Thể thao"
  }
];

const productsEl = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "all";
let currentKeyword = "";

function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "đ";
}

function getFilteredProducts() {
  return products.filter(product => {
    const matchKeyword =
      product.name.toLowerCase().includes(currentKeyword) ||
      product.shop.toLowerCase().includes(currentKeyword) ||
      product.label.toLowerCase().includes(currentKeyword);

    const matchFilter =
      currentFilter === "all" ? true : product.tag === currentFilter;

    return matchKeyword && matchFilter;
  });
}

function renderProducts(list) {
  resultCount.textContent = list.length;

  if (!list.length) {
    productsEl.innerHTML = `<div class="no-result">Không tìm thấy sản phẩm phù hợp.</div>`;
    return;
  }

  productsEl.innerHTML = list.map(product => `
    <article class="product-card">
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <div class="product-body">
        <div class="product-tag">${product.label}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">${formatPrice(product.price)}</div>
        <div class="product-shop">Shop: ${product.shop}</div>
        <a class="btn-main" href="${product.link}" target="_blank" rel="noopener noreferrer">Mua ngay</a>
      </div>
    </article>
  `).join("");
}

function updateView() {
  renderProducts(getFilteredProducts());
}

searchInput.addEventListener("input", function () {
  currentKeyword = this.value.trim().toLowerCase();
  updateView();
});

filterButtons.forEach(button => {
  button.addEventListener("click", function () {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    currentFilter = this.dataset.filter;
    updateView();
  });
});

updateView();
