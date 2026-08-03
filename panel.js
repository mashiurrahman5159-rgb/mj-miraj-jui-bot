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
    document.getElementById("msg").innerHTML = "Button Working";
};

})();
