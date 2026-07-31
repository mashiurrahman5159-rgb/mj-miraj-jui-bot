(function () {
  if (document.getElementById("mj-float-btn")) return;

  const btn = document.createElement("div");
  btn.id = "mj-float-btn";
  btn.innerHTML = "MJ";

  btn.style.position = "fixed";
  btn.style.top = "120px";
  btn.style.left = "20px";
  btn.style.width = "60px";
  btn.style.height = "60px";
  btn.style.borderRadius = "50%";
  btn.style.background = "#00d4aa";
  btn.style.color = "#fff";
  btn.style.fontSize = "20px";
  btn.style.fontWeight = "bold";
  btn.style.display = "flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.style.zIndex = "999999";

  btn.onclick = function () {
    alert("MJ MIRAJ JUI BOT");
  };

  document.body.appendChild(btn);
})();
