 const btn = document.getElementById("askBtn");
const reply = document.getElementById("reply");

btn.onclick = async () => {
  const q = document.getElementById("question").value.trim().toLowerCase();
  const products = await fetch("products.json").then(r => r.json());

  let filtered = products;

  if (q.includes("dưới 250")) {
    filtered = filtered.filter(p => Number(p.price) <= 250000);
  }

  if (q.includes("áo thun")) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes("áo"));
  }

  if (!filtered.length) {
    reply.innerHTML = "<p>Chưa có sản phẩm phù hợp trong dữ liệu hiện tại.</p>";
    return;
  }

  const top = filtered.slice(0, 3);

  reply.innerHTML = `
    <p>Gợi ý nhanh:</p>
    <ul>
      ${top.map(x => `<li>${x.title} - ${x.price}đ</li>`).join("")}
    </ul>
  `;
};
