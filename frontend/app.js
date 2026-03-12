 fetch("http://127.0.0.1:8000/products")
  .then(r => r.json())
  .then(items => {
    const el = document.getElementById("product-list");
    if (!el) return;

    el.innerHTML = items.map(p => `
      <div class="product">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>Giá: ${p.price}đ</p>
        <p>Shop: ${p.shop}</p>
        <p>Rating: ${p.rating}</p>
        <p>${p.review || ""}</p>
        <a class="buy-btn" href="${p.affiliate_url}" target="_blank" rel="nofollow sponsored noopener">Mua ngay</a>
      </div>
    `).join("");
  });
