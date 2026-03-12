 const output = document.getElementById("output");

document.getElementById("refreshBtn").onclick = async () => {
  try {
    const res = await fetch("http://localhost:8000/export-frontend", { method: "POST" });
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = "Chưa kết nối backend hoặc backend chưa chạy.";
  }
};

document.getElementById("toggleAiBtn").onclick = async () => {
  try {
    const res = await fetch("http://localhost:8000/health");
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = "Không lấy được trạng thái AI.";
  }
};
