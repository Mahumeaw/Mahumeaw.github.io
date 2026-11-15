const list = document.getElementById("product-list");

// ทำให้ path รูปใช้ได้ทั้งบน project site และ custom domain
// - ลิงก์เต็ม (http/https) ใช้ตามเดิม
// - "/product/images/a.png" -> "product/images/a.png"
// - "a.png"                 -> "product/images/a.png"
function imageSrc(value) {
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  const clean = value.replace(/^\/+/, "");
  return clean.startsWith("product/") ? clean : `product/images/${clean}`;
}

function render(products) {
  list.textContent = "";
  if (!products.length) {
    list.textContent = "ยังไม่มีสินค้า";
    return;
  }
  for (const p of products) {
    const card = document.createElement("article");
    const img = document.createElement("img");
    img.src = imageSrc(p.image);
    img.alt = p.product_title || "";
    img.loading = "lazy";
    const title = document.createElement("h3");
    title.textContent = p.product_title || "";
    card.append(img, title);
    list.append(card);
  }
}

try {
  const res = await fetch("product/products.json", { cache: "no-cache" });
  if (!res.ok) throw new Error(res.status);
  const data = await res.json();
  render(Array.isArray(data) ? data : data.items || []);
} catch (err) {
  console.error("โหลด product/products.json ไม่ได้:", err);
  list.textContent =
    "โหลดรายการสินค้าไม่ได้ (ถ้าเปิดไฟล์ในเครื่อง ต้องเปิดผ่านเซิร์ฟเวอร์ เช่น Live Server)";
}
