(function () {
"use strict";

const panel = document.createElement("div");

panel.style.position = "fixed";
panel.style.top = "50%";
panel.style.left = "50%";
panel.style.transform = "translate(-50%,-50%)";
panel.style.width = "320px";
panel.style.background = "#1b1b1b";
panel.style.border = "2px solid #00ff66";
panel.style.borderRadius = "15px";
panel.style.padding = "20px";
panel.style.textAlign = "center";
panel.style.color = "#fff";
panel.style.zIndex = "999999";

panel.innerHTML = `
<h2>MJ MIRAJ JUI BOT</h2>

<input id="licenseKey" type="text" placeholder="ENTER LICENSE KEY"
style="width:100%;padding:10px;margin:10px 0;box-sizing:border-box;">

<button id="activateBtn"
style="width:100%;padding:10px;background:#00c853;color:#fff;border:none;border-radius:8px;">
ACTIVATE
</button>

<p id="msg"></p>
`;

document.body.appendChild(panel);

document.getElementById("activateBtn").onclick = function () {

const key = document.getElementById("licenseKey").value.trim();

if (key === "MJ_TRADER_2026") {

document.getElementById("msg").innerHTML = "License Activated";

} else {

document.getElementById("msg").innerHTML = "Invalid License";

}

};

})();
