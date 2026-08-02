(function () {
  "use strict";

  if (document.getElementById("mj-license-panel")) return;

  const panel = document.createElement("div");
  panel.id = "mj-license-panel";

  panel.innerHTML = `
    <div class="mj-header">
      <div id="mj-logo"></div>

      <div class="mj-title">
        <h2>MJ MIRAJ JUI BOT</h2>
        <small>LICENSE ACTIVATION</small>
      </div>

      <button id="closeLicense">✕</button>
    </div>

    <label>ENTER LICENSE KEY</label>

    <input
      id="licenseKey"
      type="text"
      placeholder="MJ-XXXX-XXXX-XXXX">

    <button id="activateBtn">
      ACTIVATE LICENSE
    </button>

    <div id="licenseMsg"></div>
  `;

  document.body.appendChild(panel);
// Logo
const logo = document.getElementById("mj-logo");
logo.style.backgroundImage = "url('background.jpg')";
logo.style.backgroundSize = "cover";
logo.style.backgroundPosition = "center";
logo.style.backgroundRepeat = "no-repeat";

// License List
const VALID_KEYS = [
  "MJ_TRADER_2026",
  "VIP_MEMBER_99",
  "PREMIUM_USER",
  "MJ: MIRAJ JUI BOT",
  "MJ: MIRAJ JUI 10219",
  "MD: BIPLOB2023",
  "MJ: JUI"
];

// Activate
document.getElementById("activateBtn").onclick = function () {

  const key = document.getElementById("licenseKey").value.trim();

  if (VALID_KEYS.includes(key)) {

    document.getElementById("licenseMsg").innerHTML =
      "<span style='color:#00ff66'>✔ License Activated</span>";

    localStorage.setItem("mj_license", key);

  } else {

    document.getElementById("licenseMsg").innerHTML =
      "<span style='color:red'>✖ Invalid License</span>";

  }

};
  document.getElementById("closeLicense").onclick = () => {
    panel.style.display = "none";
  };
})();
