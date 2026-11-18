const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".article .content img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    img.style.setProperty("cursor", "not-allowed");
    lightbox.appendChild(img);
    lightbox.style.setProperty("cursor", "zoom-out");
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

document.querySelectorAll(".article .content pre").forEach((pre) => {
  pre.style.position = "relative";
  const btn = document.createElement("button");
  btn.className = "copy-code-btn";
  btn.type = "button";
  btn.innerText = "Copiar";
  btn.addEventListener("click", () => {
    const code = pre.querySelector("code");
    const text = code ? code.innerText : pre.innerText;
    navigator.clipboard.writeText(text.trim()).then(() => {
      btn.innerText = "Copiado!";
      setTimeout(() => {
        btn.innerText = "Copiar";
      }, 1800);
    });
  });
  pre.appendChild(btn);
});

