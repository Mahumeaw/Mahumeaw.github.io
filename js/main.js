// ปีใน footer (ทุกหน้า)
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ดูรูปขยาย (หน้าสินค้า) - ใช้ได้กับรูปที่สร้างทีหลังด้วย
const viewer = document.getElementById("viewer");
if (viewer) {
  const big = viewer.querySelector("img");
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".gallery img");
    if (!img) return;
    big.src = img.src;
    big.alt = img.alt;
    viewer.showModal();
  });
  viewer.addEventListener("click", () => viewer.close());
}

// ฟอร์มติดต่อ (หน้า contact) - ตัวอย่างฝั่งหน้าเว็บเท่านั้น
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-msg").textContent =
      "ได้รับข้อความแล้ว (ตัวอย่าง: ยังไม่ได้ส่งไปที่ไหน)";
    form.reset();
  });
}
