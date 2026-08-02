(function () {
"use strict";

// Prevent duplicate loading
if (document.getElementById("mj-license-panel")) return;

// ===== VALID LICENSES =====
const VALID_KEYS = [
"MJ_TRADER_2026",
"VIP_MEMBER_99",
"PREMIUM_USER",
"MJ: MIRAJ JUI BOT",
"MJ: MIRAJ JUI 10219",
"MD: BIPLOB2023",
"MJ: JUI"
];

// ===== CREATE LICENSE PANEL =====
const panel = document.createElement("div");
panel.id = "mj-license-panel";

panel.innerHTML = `
<div class="mj-box">

<div class="mj-logo"></div>

<h2>MJ MIRAJ JUI BOT</h2>

<input
id="licenseKey"
type="text"
placeholder="ENTER LICENSE KEY">

<button id="activateBtn">
ACTIVATE
</button>

<p id="licenseMsg"></p>

</div>
`;

document.body.appendChild(panel);
