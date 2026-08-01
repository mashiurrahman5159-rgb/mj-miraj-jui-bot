(function () {
  "use strict";

  if (document.getElementById("mj-float-btn")) return;

  // Floating Button
  const btn = document.createElement("div");
  btn.id = "mj-float-btn";
  btn.innerHTML = "MJ";

  btn.style.position = "fixed";
  btn.style.right = "20px";
  btn.style.bottom = "100px";
  btn.style.width = "60px";
  btn.style.height = "60px";
  btn.style.background = "#111";
  btn.style.color = "#00ff66";
  btn.style.border = "2px solid #00ff66";
  btn.style.borderRadius = "50%";
  btn.style.display = "flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.style.fontWeight = "bold";
  btn.style.fontSize = "22px";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "999999";

  document.body.appendChild(btn);

  // Panel
  const panel = document.createElement("div");
  panel.id = "mj-panel";

  panel.style.position = "fixed";
  panel.style.top = "50%";
  panel.style.left = "50%";
  panel.style.transform = "translate(-50%,-50%)";
  panel.style.width = "320px";
  panel.style.background = "#000";
  panel.style.border = "2px solid #00ff66";
  panel.style.borderRadius = "12px";
  panel.style.padding = "15px";
  panel.style.color = "#00ff66";
  panel.style.fontFamily = "Arial";
  panel.style.display = "none";
  panel.style.zIndex = "999999";

  panel.innerHTML = `
    <h2 style="text-align:center;">MJ MIRAJ JUI BOT</h2>
    <hr>
    <p><b>STATUS:</b> READY</p>
    <p><b>PATTERN:</b> --</p>
    <p><b>SIGNAL:</b> WAITING...</p>
    <div style="text-align:center;margin-top:15px;">
      <button id="mj-close">CLOSE</button>
    </div>
  `;

  document.body.appendChild(panel);

  btn.onclick = () => {
    panel.style.display = "block";
  };

  document.getElementById("mj-close").onclick = () => {
    panel.style.display = "none";
  };
})();
