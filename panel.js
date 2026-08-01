(function () {
  if (document.getElementById("mj-panel")) return;

  const panel = document.createElement("div");
  panel.id = "mj-panel";

  panel.innerHTML = `
    <div id="mj-header">MJ MIRAJ JUI BOT</div>

    <p><b>License:</b> Not Activated</p>

    <input id="licenseKey"
      type="text"
      placeholder="Enter License Key"
      style="width:100%;padding:8px;">

    <br><br>

    <button id="activateBtn"
      style="width:100%;padding:10px;">
      Activate License
    </button>

    <hr>

    <div id="mj-pattern">
      Pattern : Waiting...
    </div>

    <div id="mj-signal">
      WAIT
    </div>

    <img id="mj-image"
      src=""
      alt="Pattern Image">

    <div id="mj-status">
      MJ MIRAJ JUI BOT Ready
    </div>
  `;

  document.body.appendChild(panel);

  document.getElementById("activateBtn").onclick = function () {
    alert("License System will be added later.");
  };
})();
