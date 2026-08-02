(function () {
    "use strict";

    if (document.getElementById("mj-license-panel")) return;

    // License Panel
    const panel = document.createElement("div");
    panel.id = "mj-license-panel";

    panel.innerHTML = `
        <div id="mj-logo"></div>

        <h2>MJ MIRAJ JUI BOT</h2>

        <input
            id="licenseKey"
            type="text"
            placeholder="ENTER LICENSE KEY">

        <button id="activateBtn">
            ACTIVATE
        </button>

        <p id="licenseMsg"></p>
    `;

    document.body.appendChild(panel);
const logo = document.getElementById("mj-logo");
logo.style.backgroundImage = "url('background.jpg')";
})();
