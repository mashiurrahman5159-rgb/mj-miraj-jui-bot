(function () {
  if (document.getElementById("mj-panel")) return;

  const panel = document.createElement("div");
  panel.id = "mj-panel";

  panel.innerHTML = `
    <div id="mj-title">MJ MIRAJ JUI BOT</div>
    <hr>

    <p><b>License:</b> Not Activated</p>

    <input id="licenseKey"
      type="text"
      placeholder="Enter License Key"
      style="width:100%;padding:8px;border-radius:5px;">

    <button id="mj-btn">
      Activate License
    </button>

    <hr>

    <p>Status: Ready</p>

    <button id="readChart">
      Read Chart
    </button>
  `;

  document.body.appendChild(panel);
})();
