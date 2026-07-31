(function () {
  if (document.getElementById("mj-panel")) return;

  const panel = document.createElement("div");
  panel.id = "mj-panel";

  Object.assign(panel.style, {
    position: "fixed",
    top: "80px",
    right: "20px",
    width: "340px",
    background: "#111",
    color: "#fff",
    border: "2px solid #00C853",
    borderRadius: "12px",
    padding: "15px",
    zIndex: "999999",
    display: "none",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 0 15px rgba(0,0,0,.5)"
  });

  panel.innerHTML = `
    <div style="text-align:center;">
      <h2 style="margin:0;color:#00C853;">MJ MIRAJ JUI BOT</h2>
      <small>Premium Edition</small>
    </div>

    <hr>

    <p><b>License Status:</b> <span style="color:orange;">Not Activated</span></p>

    <input
      id="licenseInput"
      type="text"
      placeholder="Enter License Key"
      style="width:100%;padding:10px;border-radius:6px;border:none;box-sizing:border-box;">

    <br><br>

    <button id="activateBtn"
      style="width:100%;padding:10px;background:#00C853;color:white;border:none;border-radius:6px;">
      Activate License
    </button>

    <hr>

    <h3 style="text-align:center;">Pattern Preview</h3>

    <img
      id="patternImage"
      src=""
      style="width:100%;height:170px;background:#222;border-radius:8px;object-fit:contain;">

    <p><b>Pattern:</b> Waiting...</p>

    <p><b>Signal:</b> Waiting...</p>

    <button
      style="width:100%;padding:10px;background:#2196F3;color:white;border:none;border-radius:6px;">
      Read Pattern
    </button>

    <br><br>

    <button id="closePanel"
      style="width:100%;padding:10px;background:#F44336;color:white;border:none;border-radius:6px;">
      Close
    </button>

    <p style="text-align:center;margin-top:15px;font-size:12px;color:#aaa;">
      Developer: MJ MIRAJ JUI BOT
    </p>
  `;

  document.body.appendChild(panel);

  document.getElementById("closePanel").onclick = function () {
    panel.style.display = "none";
  };
})();
