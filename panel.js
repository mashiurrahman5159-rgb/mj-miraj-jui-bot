(function () {
  if (document.getElementById("mj-float-btn")) return;

  // Floating Button
  const btn = document.createElement("div");
  btn.id = "mj-float-btn";
  btn.innerText = "MJ";

  Object.assign(btn.style, {
    position: "fixed",
    right: "20px",
    bottom: "100px",
    width: "60px",
    height: "60px",
    background: "#111",
    color: "#00ff66",
    border: "2px solid #00ff66",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "move",
    zIndex: "999999"
  });

  document.body.appendChild(btn);

  // Panel
  const panel = document.createElement("div");
  panel.id = "mj-panel";

  Object.assign(panel.style, {
    position: "fixed",
    top: "80px",
    left: "20px",
    width: "320px",
    background: "#111",
    color: "#fff",
    border: "2px solid #00ff66",
    borderRadius: "12px",
    padding: "15px",
    display: "none",
    zIndex: "999999"
  });

  panel.innerHTML = `
    <h2 style="text-align:center;color:#00ff66;">MJ MIRAJ JUI BOT</h2>

    <hr>

    <p><b>License:</b> Not Activated</p>

    <input
      type="text"
      placeholder="Enter License Key"
      style="width:100%;padding:8px;">

    <br><br>

    <button style="width:100%;padding:10px;">
      Activate
    </button>

    <hr>

    <p><b>Pattern:</b> Waiting...</p>

    <p><b>Signal:</b> WAIT</p>

    <div style="height:150px;border:1px dashed #00ff66;display:flex;justify-content:center;align-items:center;">
      Pattern Image
    </div>

    <br>

    <button id="mj-close" style="width:100%;padding:10px;">
      Close
    </button>
  `;

  document.body.appendChild(panel);

  btn.onclick = () => {
    panel.style.display = "block";
  };

  document.getElementById("mj-close").onclick = () => {
    panel.style.display = "none";
  };

  // Drag Button
  let move = false, x = 0, y = 0;

  btn.onpointerdown = e => {
    move = true;
    x = e.clientX - btn.offsetLeft;
    y = e.clientY - btn.offsetTop;
  };

  document.onpointermove = e => {
    if (!move) return;
    btn.style.left = (e.clientX - x) + "px";
    btn.style.top = (e.clientY - y) + "px";
    btn.style.right = "auto";
    btn.style.bottom = "auto";
  };

  document.onpointerup = () => move = false;

})();
