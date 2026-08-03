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
// ===== Activate License =====
document.getElementById("activateBtn").onclick = function () {

    const key = document.getElementById("licenseKey").value.trim();
    const msg = document.getElementById("licenseMsg");

    if (VALID_KEYS.includes(key)) {

        localStorage.setItem("mj_license", "true");

        msg.style.color = "#00ff66";
        msg.innerHTML = "✔ License Activated";

        setTimeout(() => {

            setTimeout(() => {

            alert("License OK");

        }, 800);

    } else {

        msg.style.color = "red";
        msg.innerHTML = "✖ Invalid License";

    }

};

// ===== Floating MJ Button =====
function showMJButton() {

    if (document.getElementById("mj-btn")) return;

    const btn = document.createElement("div");

    btn.id = "mj-btn";

    btn.innerHTML = "MJ";
btn.style.position = "fixed";
btn.style.right = "20px";
btn.style.bottom = "20px";
btn.style.width = "60px";
btn.style.height = "60px";
btn.style.borderRadius = "50%";
btn.style.background = "#00c853";
btn.style.color = "#fff";
btn.style.display = "flex";
btn.style.alignItems = "center";
btn.style.justifyContent = "center";
btn.style.zIndex = "999999";
btn.style.cursor = "pointer";
    document.body.appendChild(btn);

    btn.onclick = function () {

        panel.style.display = "block";

    };

}
// if (localStorage.getItem("mj_license") === "true") {
//     panel.style.display = "none";
//     showMJButton();
// }

})();
