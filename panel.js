(function () {
  if (document.getElementById("mj-panel")) return;

  const panel = document.createElement("div");
  panel.id = "mj-panel";

  panel.style.position = "fixed";
  panel.style.top = "90px";
  panel.style.right = "20px";
  panel.style.width = "320px";
  panel.style.background = "#111";
  panel.style.color = "#fff";
  panel.style.border = "2px solid #00C853";
  panel.style.borderRadius = "12px";
  panel.style.padding = "15px";
  panel.style.display = "none";
  panel.style.zIndex = "999999";

  panel.innerHTML = `
    <h2 style="margin:0;text-align:center;color:#00C853;">
      MJ MIRAJ JUI BOT
    </h2>

    <hr>

    <p><b>License Status:</b> Not Activated</p>

    <input
      type="text"
      placeholder="Enter License Key"
      style="width:100%;padding:10px;border-radius:6px;border:none;">

    <br><br>

    <button style="width:100%;padding:10px;background:#00C853;color:white;border:none;border-radius:6px;">
      Activate License
    </button>

    <hr>

    <h3 style="text-align:center;">Pattern Preview</h3>

    <img
      src=""
      id="patternImage"
      style="width:100%;height:160px;background:#222;border-radius:8px;object-fit:contain;">

    <p><b>Pattern:</b> None</p>

    <p><b>Signal:</b> Waiting...</p>

    <button style="width:100%;padding:10px;background:#2196F3;color:white;border:none;border-radius:6px;">
      Read Pattern
    </button>
  `;

  document.body.appendChild(panel);
})();
