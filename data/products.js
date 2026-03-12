function svgPlaceholder(title, bg1, bg2, textColor = "#ffffff") {
  const safeTitle = encodeURIComponent(title);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bg1}" />
          <stop offset="100%" stop-color="${bg2}" />
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(#g)" />
      <circle cx="640" cy="140" r="120" fill="rgba(255,255,255,0.08)" />
      <circle cx="150" cy="650" r="150" fill="rgba(255,255,255,0.08)" />
      <rect x="180" y="150" rx="60" ry="60" width="440" height="500" fill="rgba(255,255,255,0.18)" />
      <text x="400" y="710" text-anchor="middle" fill="${textColor}" font-size="36" font-family="Arial" font-weight="700">${decodeURIComponent(safeTitle)}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const products = [
  {
    id: 1,
    name: "Áo thun nam basic cotton",
    category: "Áo thun",
    price: 129000,
    oldPrice: 169000,
    rating: 4.7,
    sold: "2.1k",
    discount: 24,
    shop: "Shopee Mall",
    badge: "Bán chạy",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Áo thun basic", "#1f2937", "#111827")
  },
  {
    id: 2,
    name: "Áo thun nam form rộng tối giản",
    category: "Áo thun",
    price: 159000,
    oldPrice: 199000,
    rating: 4.8,
    sold: "1.8k",
    discount: 20,
    shop: "Shopee",
    badge: "Phổ biến",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Form rộng", "#374151", "#0f172a")
  },
  {
    id: 3,
    name: "Áo polo nam phối cổ thanh lịch",
    category: "Áo polo",
    price: 219000,
    oldPrice: 289000,
    rating: 4.9,
    sold: "986",
    discount: 24,
    shop: "Lazada",
    badge: "Thanh lịch",
    link: "https://www.lazada.vn/",
    image: svgPlaceholder("Áo polo", "#1d4ed8", "#0f172a")
  },
  {
    id: 4,
    name: "Áo sơ mi nam trắng công sở",
    category: "Áo sơ mi",
    price: 249000,
    oldPrice: 329000,
    rating: 4.8,
    sold: "770",
    discount: 24,
    shop: "Tiki",
    badge: "Công sở",
    link: "https://tiki.vn/",
    image: svgPlaceholder("Sơ mi trắng", "#d1d5db", "#6b7280", "#111111")
  },
  {
    id: 5,
    name: "Áo sơ mi nam xanh nhạt dễ phối",
    category: "Áo sơ mi",
    price: 259000,
    oldPrice: 339000,
    rating: 4.7,
    sold: "540",
    discount: 23,
    shop: "Shopee Mall",
    badge: "Dễ phối",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Sơ mi xanh", "#93c5fd", "#1e3a8a")
  },
  {
    id: 6,
    name: "Áo hoodie nam nỉ mềm basic",
    category: "Hoodie",
    price: 279000,
    oldPrice: 369000,
    rating: 4.8,
    sold: "1.2k",
    discount: 24,
    shop: "Shopee",
    badge: "Mùa mát",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Hoodie basic", "#4b5563", "#111827")
  },
  {
    id: 7,
    name: "Áo khoác bomber nam trẻ trung",
    category: "Áo khoác",
    price: 319000,
    oldPrice: 419000,
    rating: 4.6,
    sold: "420",
    discount: 24,
    shop: "Lazada",
    badge: "Nổi bật",
    link: "https://www.lazada.vn/",
    image: svgPlaceholder("Bomber", "#78350f", "#1f2937")
  },
  {
    id: 8,
    name: "Áo thun nam premium dày dặn",
    category: "Áo thun",
    price: 189000,
    oldPrice: 239000,
    rating: 4.9,
    sold: "3.2k",
    discount: 21,
    shop: "Shopee Mall",
    badge: "Premium",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Premium", "#111827", "#475569")
  },
  {
    id: 9,
    name: "Áo polo nam màu kem tối giản",
    category: "Áo polo",
    price: 229000,
    oldPrice: 299000,
    rating: 4.8,
    sold: "690",
    discount: 23,
    shop: "Tiki",
    badge: "Tinh gọn",
    link: "https://tiki.vn/",
    image: svgPlaceholder("Polo kem", "#f3e8d0", "#c4a484", "#111111")
  },
  {
    id: 10,
    name: "Áo thun nam đen cổ tròn basic",
    category: "Áo thun",
    price: 119000,
    oldPrice: 149000,
    rating: 4.6,
    sold: "2.8k",
    discount: 20,
    shop: "Shopee",
    badge: "Giá tốt",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Đen basic", "#111111", "#374151")
  },
  {
    id: 11,
    name: "Áo sơ mi nam be phong cách Hàn",
    category: "Áo sơ mi",
    price: 269000,
    oldPrice: 359000,
    rating: 4.7,
    sold: "355",
    discount: 25,
    shop: "Lazada",
    badge: "Hàn Quốc",
    link: "https://www.lazada.vn/",
    image: svgPlaceholder("Sơ mi be", "#e5d3b3", "#8b6b4d", "#111111")
  },
  {
    id: 12,
    name: "Áo hoodie nam xám trẻ trung",
    category: "Hoodie",
    price: 289000,
    oldPrice: 389000,
    rating: 4.8,
    sold: "880",
    discount: 26,
    shop: "Shopee Mall",
    badge: "Ấm áp",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Hoodie xám", "#9ca3af", "#4b5563")
  },
  {
    id: 13,
    name: "Áo khoác jeans nam năng động",
    category: "Áo khoác",
    price: 359000,
    oldPrice: 459000,
    rating: 4.7,
    sold: "310",
    discount: 22,
    shop: "Shopee",
    badge: "Cá tính",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Jeans jacket", "#2563eb", "#1e293b")
  },
  {
    id: 14,
    name: "Áo polo nam xanh navy cao cấp",
    category: "Áo polo",
    price: 239000,
    oldPrice: 309000,
    rating: 4.9,
    sold: "1.1k",
    discount: 23,
    shop: "Shopee Mall",
    badge: "Đẹp mắt",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Polo navy", "#1e3a8a", "#0f172a")
  },
  {
    id: 15,
    name: "Áo thun nam trắng in chữ nhỏ",
    category: "Áo thun",
    price: 139000,
    oldPrice: 179000,
    rating: 4.5,
    sold: "1.4k",
    discount: 22,
    shop: "Tiki",
    badge: "Trẻ trung",
    link: "https://tiki.vn/",
    image: svgPlaceholder("Trắng basic", "#f8fafc", "#cbd5e1", "#111111")
  },
  {
    id: 16,
    name: "Áo sơ mi nam sọc mảnh hiện đại",
    category: "Áo sơ mi",
    price: 279000,
    oldPrice: 349000,
    rating: 4.8,
    sold: "460",
    discount: 20,
    shop: "Lazada",
    badge: "Hiện đại",
    link: "https://www.lazada.vn/",
    image: svgPlaceholder("Sơ mi sọc", "#cbd5e1", "#64748b", "#111111")
  },
  {
    id: 17,
    name: "Áo hoodie nam đen form rộng",
    category: "Hoodie",
    price: 299000,
    oldPrice: 399000,
    rating: 4.8,
    sold: "1.0k",
    discount: 25,
    shop: "Shopee",
    badge: "Form rộng",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Hoodie đen", "#0f172a", "#111827")
  },
  {
    id: 18,
    name: "Áo khoác gió nam chống nắng nhẹ",
    category: "Áo khoác",
    price: 219000,
    oldPrice: 289000,
    rating: 4.6,
    sold: "930",
    discount: 24,
    shop: "Shopee Mall",
    badge: "Tiện dụng",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Khoác gió", "#0ea5e9", "#1e293b")
  },
  {
    id: 19,
    name: "Áo polo nam nâu đất tối giản",
    category: "Áo polo",
    price: 209000,
    oldPrice: 279000,
    rating: 4.7,
    sold: "515",
    discount: 25,
    shop: "Tiki",
    badge: "Màu đẹp",
    link: "https://tiki.vn/",
    image: svgPlaceholder("Polo nâu", "#8b5e3c", "#3f2a1d")
  },
  {
    id: 20,
    name: "Áo thun nam xám tro trẻ trung",
    category: "Áo thun",
    price: 149000,
    oldPrice: 189000,
    rating: 4.7,
    sold: "1.6k",
    discount: 21,
    shop: "Shopee",
    badge: "Dễ mặc",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Xám tro", "#6b7280", "#374151")
  },
  {
    id: 21,
    name: "Áo sơ mi nam đen tối giản",
    category: "Áo sơ mi",
    price: 289000,
    oldPrice: 369000,
    rating: 4.8,
    sold: "350",
    discount: 22,
    shop: "Shopee Mall",
    badge: "Sang",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Sơ mi đen", "#111111", "#374151")
  },
  {
    id: 22,
    name: "Áo hoodie nam màu kem basic",
    category: "Hoodie",
    price: 309000,
    oldPrice: 399000,
    rating: 4.9,
    sold: "690",
    discount: 23,
    shop: "Lazada",
    badge: "Hot",
    link: "https://www.lazada.vn/",
    image: svgPlaceholder("Hoodie kem", "#ede9d5", "#b8a98f", "#111111")
  },
  {
    id: 23,
    name: "Áo khoác cardigan nam mỏng nhẹ",
    category: "Áo khoác",
    price: 269000,
    oldPrice: 339000,
    rating: 4.6,
    sold: "280",
    discount: 21,
    shop: "Tiki",
    badge: "Nhẹ nhàng",
    link: "https://tiki.vn/",
    image: svgPlaceholder("Cardigan", "#475569", "#1f2937")
  },
  {
    id: 24,
    name: "Áo thun nam premium màu be",
    category: "Áo thun",
    price: 199000,
    oldPrice: 249000,
    rating: 4.9,
    sold: "2.4k",
    discount: 20,
    shop: "Shopee Mall",
    badge: "Đáng mua",
    link: "https://shopee.vn/",
    image: svgPlaceholder("Premium be", "#e9dbc1", "#a98a64", "#111111")
  }
];
