(function () {
"use strict";

const panel = document.createElement("div");

panel.innerHTML = `
<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:300px;
padding:20px;
background:#1b1b1b;
color:#fff;
border:2px solid #00ff66;
border-radius:12px;
text-align:center;
z-index:999999;
">
<h2>MJ MIRAJ JUI BOT</h2>

<input id="licenseKey" placeholder="ENTER LICENSE KEY"
style="width:100%;padding:10px;margin:10px 0;box-sizing:border-box;">

<button id="activateBtn"
style="width:100%;padding:10px;">
ACTIVATE
</button>

<p id="msg"></p>
</div>
`;

document.body.appendChild(panel);

document.getElementById("activateBtn").onclick = function () {

    const key = document.getElementById("licenseKey").value.trim();

    if (key === "MJ_TRADER_2026") {

        panel.remove();

        const btn = document.createElement("div");

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
        btn.style.justifyContent = "center";
        btn.style.alignItems = "center";
        btn.style.fontWeight = "bold";
        btn.style.zIndex = "999999";

        document.body.appendChild(btn);

    } else {

        document.getElementById("msg").innerHTML = "Invalid License";

    }

};

})();
