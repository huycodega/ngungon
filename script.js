// Hiệu ứng tạo sao lấp lánh
function createStars() {
  const stars = document.querySelector(".stars");
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.position = "absolute";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.opacity = Math.random();
    star.style.boxShadow = `0 0 ${Math.random() * 8 + 2}px #fff`;
    star.style.animation = `twinkle ${
      Math.random() * 2 + 1
    }s infinite alternate`;
    stars.appendChild(star);
  }
}

// Hiệu ứng trái tim bay
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = x - 12 + "px";
  heart.style.top = y - 12 + "px";
  heart.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff69b4" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21s-6.2-5.3-8.5-8.1C1.1 10.2 2.2 6.6 5.6 5.4c2.1-.7 4.1.3 5.4 2 1.3-1.7 3.3-2.7 5.4-2 3.4 1.2 4.5 4.8 2.1 7.5C18.2 15.7 12 21 12 21z"/>
        </svg>
    `;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  createStars();
  // Hiệu ứng trái tim khi click
  document.body.addEventListener("click", (e) => {
    createHeart(e.clientX, e.clientY);
  });

  // Lời chúc đặc biệt
  const loveBtn = document.getElementById("loveBtn");
  const specialWish = document.getElementById("specialWish");
  loveBtn.addEventListener("click", () => {
    specialWish.classList.remove("hidden");
    specialWish.innerHTML = `💌 Em là giấc mơ ngọt ngào nhất của anh. Chúc em ngủ thật ngon, luôn cảm thấy bình yên và hạnh phúc bên anh. Yêu em nhiều lắm! <br><span style='font-size:2rem;'>💖🌙💤</span>`;
    // Hiệu ứng rung nhẹ cho nút
    loveBtn.style.animation = "shake 0.4s";
    setTimeout(() => (loveBtn.style.animation = ""), 400);
  });
});

// Hiệu ứng rung cho nút
const style = document.createElement("style");
style.innerHTML = `@keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } } @keyframes twinkle { from { opacity: 0.5; } to { opacity: 1; } }`;
document.head.appendChild(style);
