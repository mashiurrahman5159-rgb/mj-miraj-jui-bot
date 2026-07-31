(function () {
  if (document.getElementById("mj-float-btn")) return;

  const btn = document.createElement("div");
  btn.id = "mj-float-btn";
  btn.innerHTML = "MJ";

  Object.assign(btn.style, {
    position: "fixed",
    left: "20px",
    top: "120px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#00C853",
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
    userSelect: "none",
    zIndex: "999999"
  });

  document.body.appendChild(btn);

  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  btn.addEventListener("pointerdown", (e) => {
    dragging = true;
    offsetX = e.clientX - btn.offsetLeft;
    offsetY = e.clientY - btn.offsetTop;
    btn.style.cursor = "grabbing";
  });

  document.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    btn.style.left = (e.clientX - offsetX) + "px";
    btn.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("pointerup", () => {
    dragging = false;
    btn.style.cursor = "grab";
  });

  btn.addEventListener("click", () => {
    const panel = document.getElementById("mj-panel");
    if (panel) {
      panel.style.display =
        panel.style.display === "block" ? "none" : "block";
    } else {
      alert("MJ MIRAJ JUI BOT");
    }
  });
})();
