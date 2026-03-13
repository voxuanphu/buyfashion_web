 fetch("http://127.0.0.1:8000/products")
  .then((r) => r.json())
  .then((items) => {
    const list = document.getElementById("product-list");
    if (!list) return;

    list.innerHTML = items.map((p) => `
      <div class="product-card">
        <div class="product-image-wrap">
          <img class="product-image" src="${p.image}" alt="${p.name}">
          <span class="platform-badge">${p.platform || "Shopee"}</span>
        </div>

        <div class="product-body">
          <h3 class="product-title">${p.name}</h3>
          <p class="product-shop">Shop: ${p.shop || "Chưa có tên shop"}</p>
          <p class="product-category">${p.category || ""}</p>
          <p class="product-rating">⭐ ${p.rating ?? "N/A"}</p>
          <p class="product-review">${p.review || ""}</p>

          <div class="product-price-row">
            <span class="product-price">${Number(p.price).toLocaleString("vi-VN")}đ</span>
            ${p.old_price ? `<span class="product-old-price">${Number(p.old_price).toLocaleString("vi-VN")}đ</span>` : ""}
          </div>

          <a class="buy-btn" href="${p.affiliate_url}" target="_blank" rel="nofollow sponsored noopener">
            Mua ngay
          </a>
        </div>
      </div>
    `).join("");
  })
  .catch((err) => {
    console.error("Lỗi tải sản phẩm:", err);
    const list = document.getElementById("product-list");
    if (list) {
      list.innerHTML = "<p>Không tải được sản phẩm từ backend.</p>";
    }
  });
