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

    btn.style.display = "none";

    panel.style.display = "block";

    document.getElementById("activateBtn").style.display = "block";

    document.getElementById("msg").innerHTML = "";

    document.getElementById("licenseKey").value = "";

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
