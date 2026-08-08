(function () {
"use strict";

const VALID_KEYS = [
"MJ_TRADER_2026",
"VIP_MEMBER_99",
"PREMIUM_USER",
"MJ: MIRAJ JUI BOT",
"MJ: MIRAJ JUI 10219",
"MD: BIPLOB2023",
"MJ: JUI"
];

const panel = document.createElement("div");

panel.id = "mj-license-panel";

panel.innerHTML = `
<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:230px;
padding:12px;
background:#111;
border:2px solid #00ff66;
border-radius:15px;
text-align:center;
box-shadow:0 0 20px rgba(0,255,100,.5);
z-index:999999;
">

<div id="mjLogo"
style="
width:80px;
height:80px;
margin:0 auto 10px;
border-radius:50%;
background:url('background.jpg') center/cover no-repeat;
border:2px solid #00ff66;
">
</div>

<h3 style="color:#fff;margin:5px 0;">
MJ MIRAJ JUI BOT
</h3>

<input
id="licenseKey"
type="text"
placeholder="MJ-XXXX-XXXX-XXXX"
maxlength="19"
autocomplete="off"
style="
width:100%;
padding:8px;
border:none;
border-radius:8px;
box-sizing:border-box;
text-transform:uppercase;
color:#ffffff;
">

<button
id="activateBtn"
style="
width:100%;
margin-top:10px;
padding:10px;
background:#00c853;
color:#fff;
border:none;
border-radius:8px;
font-weight:bold;
">
ACTIVATE
</button>

<p id="msg"
style="
margin-top:10px;
font-size:13px;
">
</p>

</div>
`;

document.body.appendChild(panel);
document.getElementById("activateBtn").onclick = function () {

    const key = document.getElementById("licenseKey").value.trim();
    const msg = document.getElementById("msg");

    if (VALID_KEYS.includes(key)) {

        msg.style.color = "#00ff66";
        msg.innerHTML = "✔ License verified successfully.";
        document.getElementById("activateBtn").style.display = "none";
        localStorage.setItem("mj_license", "true");
        
    setTimeout(function () {

    panel.style.display = "none";

    document.getElementById("activateBtn").style.display = "none";

    showMJButton();

}, 1000);

    } else {

        msg.style.color = "#ff3b30";
        msg.innerHTML = "❌ License verification failed or expired.";

    }

};
// Check saved license
if (localStorage.getItem("mj_license") === "true") {
    panel.style.display = "none";
    showMJButton();
}
      
function showMJButton() {

    if (document.getElementById("mj-btn")) return;

    const btn = document.createElement("div");

    btn.id = "mj-btn";
    btn.innerHTML = "";

    btn.style.position = "fixed";
    btn.style.right = "20px";
    btn.style.bottom = "20px";
    btn.style.width = "60px";
    btn.style.height = "60px";
    btn.style.borderRadius = "50%";
    btn.style.background = "url('background.jpg') center/cover no-repeat";
    btn.style.border = "2px solid #00ff66";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "999999";

    document.body.appendChild(btn);
    // Button click → Show license panel again
    btn.onclick = function () {

        // MJ MIRAJ Panel
let mjPanel = document.getElementById("mj-panel");

if (mjPanel) {
    mjPanel.remove();
    return;
}

mjPanel = document.createElement("div");
mjPanel.id = "mj-panel";

mjPanel.style.position = "fixed";
mjPanel.style.top = "50%";
mjPanel.style.left = "50%";
mjPanel.style.transform = "translate(-50%, -50%)";
mjPanel.style.width = "280px";
mjPanel.style.padding = "15px";
mjPanel.style.background = "#111";
mjPanel.style.border = "2px solid #00ff66";
mjPanel.style.borderRadius = "15px";
mjPanel.style.boxShadow = "0 0 25px rgba(0,255,102,.5)";
mjPanel.style.zIndex = "1000000";
mjPanel.style.color = "#fff";
mjPanel.style.textAlign = "center";

mjPanel.innerHTML = `
    <button id="mjClose" style="
        position:absolute;
        right:8px;
        top:6px;
        background:none;
        border:none;
        color:#fff;
        font-size:20px;
        cursor:pointer;
    ">×</button>

    <h2 style="margin:5px 0 12px;">MJ MIRAJ</h2>

    <div id="mjStatus" style="
        color:#ff3b30;
        font-weight:bold;
        margin:10px 0;
    ">● STOPPED</div>

    <div style="margin:12px 0;">
        Status: <b style="color:#00ff66;">Licensed</b>
    </div>

    <button id="mjStart" style="
        width:48%;
        padding:10px;
        background:#00c853;
        color:#fff;
        border:none;
        border-radius:8px;
        font-weight:bold;
    ">START BOT</button>

    <button id="mjStop" style="
        width:48%;
        padding:10px;
        background:#d50000;
        color:#fff;
        border:none;
        border-radius:8px;
        font-weight:bold;
    ">STOP BOT</button>
`;

document.body.appendChild(mjPanel);

document.getElementById("mjClose").onclick = function () {
    mjPanel.remove();
};

document.getElementById("mjStart").onclick = function () {
    document.getElementById("mjStatus").innerHTML = "● RUNNING";
    document.getElementById("mjStatus").style.color = "#00ff66";
};

document.getElementById("mjStop").onclick = function () {
    document.getElementById("mjStatus").innerHTML = "● STOPPED";
    document.getElementById("mjStatus").style.color = "#ff3b30";
};
    
    // Drag button
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    btn.addEventListener("pointerdown", function (e) {
        dragging = true;
        offsetX = e.clientX - btn.offsetLeft;
        offsetY = e.clientY - btn.offsetTop;
    });

    document.addEventListener("pointermove", function (e) {
        if (!dragging) return;

        btn.style.left = (e.clientX - offsetX) + "px";
        btn.style.top = (e.clientY - offsetY) + "px";
        btn.style.right = "auto";
        btn.style.bottom = "auto";
    });

    document.addEventListener("pointerup", function () {
        dragging = false;
    });

}

})();
