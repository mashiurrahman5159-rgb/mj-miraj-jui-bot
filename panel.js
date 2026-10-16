(function () {
"use strict";

// MJ MIRAJ JUI BOT — Panel
// Security: Removed any hardcoded license keys from client-side code.
// License verification must be performed server-side. The client will attempt
// to call a configured license API (window.MJ_LICENSE_API) if provided.
// If no server is configured or validation fails, the UI offers a DEMO mode
// where signal/trading functionality is explicitly disabled.

console.log("MJ BOT SCRIPT LOADED (safe)");

const panel = document.createElement("div");
panel.id = "mj-license-panel";

panel.innerHTML = `
<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:90%;
max-width:360px;
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
maxlength="36"
autocomplete="off"
style="
width:100%;
padding:10px;
border:none;
border-radius:8px;
box-sizing:border-box;
text-transform:uppercase;
color:#ffffff;
font-size:16px;">

<button
id="activateBtn"
style="
width:100%;
margin-top:10px;
padding:12px;
background:#00c853;
color:#fff;
border:none;
border-radius:8px;
font-weight:bold;">
ACTIVATE
</button>

<p id="msg" style="margin-top:10px;font-size:13px;color:#fff"></p>

<div id="demoArea" style="margin-top:8px;display:none">
  <button id="demoBtn" style="width:100%;padding:10px;border-radius:8px;background:#444;color:#fff;border:none">Continue in DEMO mode (UI-only)</button>
</div>

</div>
`;

document.body.appendChild(panel);

function showMessage(text, color) {
  const msg = document.getElementById('msg');
  msg.style.color = color || '#fff';
  msg.textContent = text;
}

async function validateLicenseServer(key, timeoutMs = 8000) {
  // Expect a server-side endpoint provided via window.MJ_LICENSE_API, e.g. '/api/validate-license'
  const endpoint = (window && window.MJ_LICENSE_API) || null;
  if (!endpoint) throw new Error('NO_LICENSE_API');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: key }),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error('SERVER_ERROR:' + res.status + ' ' + text);
    }

    const data = await res.json().catch(() => null);
    // Server must not echo secret keys. Expect shape: { ok: boolean, token?: string, expires?: string }
    if (data && data.ok && data.token) return data;
    throw new Error('INVALID_RESPONSE');
  } finally {
    clearTimeout(timeout);
  }
}

function licenseSuccess(token) {
  // Store a token that was issued by the server (if any). Do NOT store raw license keys.
  try { localStorage.setItem('mj_license_token', token); } catch (e) {}
  panel.style.display = 'none';
  showMJButton();
}

function enableDemoMode() {
  // Demo mode is UI-only and must never enable signals/trading logic.
  try { localStorage.setItem('mj_license_demo', 'true'); } catch (e) {}
  panel.style.display = 'none';
  showMJButton();
  console.warn('MJ MIRAJ running in DEMO mode: signal/trading functionality is disabled.');
}

async function handleActivate() {
  const key = document.getElementById('licenseKey').value.trim();
  if (!key) { showMessage('Please enter a license key or continue in DEMO mode.', '#ff3b30');
    document.getElementById('demoArea').style.display = 'block';
    return;
  }

  showMessage('Verifying license...', '#ffd54f');

  // If there's a server configured, attempt server-side validation
  if (window && window.MJ_LICENSE_API) {
    try {
      const data = await validateLicenseServer(key);
      showMessage('✔ License verified by server.', '#00ff66');
      // store token if provided
      licenseSuccess(data.token || '');
      return;
    } catch (err) {
      console.error('License validation error:', err);
      showMessage('License server error or invalid key.', '#ff3b30');
      document.getElementById('demoArea').style.display = 'block';
      return;
    }
  }

  // No server configured: do not accept client-side keys. Offer demo mode.
  showMessage('License server not configured. You may continue in DEMO (UI-only).', '#ff3b30');
  document.getElementById('demoArea').style.display = 'block';
}

// Wire up activation
document.getElementById('activateBtn').addEventListener('click', function () {
  handleActivate();
});

document.getElementById('demoBtn').addEventListener('click', function () {
  enableDemoMode();
});

// Check saved license or demo
(function checkSaved() {
  try {
    const token = localStorage.getItem('mj_license_token');
    const demo = localStorage.getItem('mj_license_demo');
    if (token || demo === 'true') {
      panel.style.display = 'none';
      showMJButton();
    }
  } catch (e) {}
})();

function showMJButton() {
  if (document.getElementById('mj-btn')) return;

  const btn = document.createElement('div');
  btn.id = 'mj-btn';
  btn.innerHTML = '';

  // Initial placement: compute left/top to avoid jump when dragging starts.
  btn.style.position = 'fixed';
  btn.style.right = '20px';
  btn.style.bottom = '20px';
  btn.style.width = '60px';
  btn.style.height = '60px';
  btn.style.borderRadius = '50%';
  btn.style.background = "url('background.jpg') center/cover no-repeat";
  btn.style.border = '2px solid #00ff66';
  btn.style.cursor = 'pointer';
  btn.style.zIndex = '999999';
  btn.style.boxShadow = '0 0 10px rgba(0,255,100,.3)';

  document.body.appendChild(btn);

  // Ensure left/top coordinates exist to avoid jump on first pointerdown
  requestAnimationFrame(() => {
    try {
      const rect = btn.getBoundingClientRect();
      // If right/bottom are used, convert to left/top
      if (!btn.style.left) {
        btn.style.left = rect.left + 'px';
        btn.style.top = rect.top + 'px';
        btn.style.right = 'auto';
        btn.style.bottom = 'auto';
      }
    } catch (e) {}
  });

  // Button click → Show license panel again or open MJ panel
  btn.addEventListener('click', function (e) {
    // If panel exists, toggle; otherwise open mj-panel
    const existing = document.getElementById('mj-panel');
    if (existing) { existing.remove(); return; }
    openMJPanel();
  });

  // Drag support (pointer events) with viewport clamp
  let dragging = false;
  let offsetX = 0, offsetY = 0;

  btn.addEventListener('pointerdown', function (e) {
    dragging = true;
    btn.setPointerCapture && btn.setPointerCapture(e.pointerId);
    const rect = btn.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });

  document.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let left = e.clientX - offsetX;
    let top = e.clientY - offsetY;
    // clamp
    left = Math.max(8, Math.min(vw - btn.offsetWidth - 8, left));
    top = Math.max(8, Math.min(vh - btn.offsetHeight - 8, top));
    btn.style.left = left + 'px';
    btn.style.top = top + 'px';
    btn.style.right = 'auto';
    btn.style.bottom = 'auto';
  });

  document.addEventListener('pointerup', function (e) {
    if (!dragging) return;
    dragging = false;
    try { btn.releasePointerCapture && btn.releasePointerCapture(e.pointerId); } catch (e) {}
  });
}

function openMJPanel() {
  let mjPanel = document.getElementById('mj-panel');
  if (mjPanel) { mjPanel.remove(); return; }
  mjPanel = document.createElement('div');
  mjPanel.id = 'mj-panel';

  mjPanel.style.position = 'fixed';
  mjPanel.style.top = '50%';
  mjPanel.style.left = '50%';
  mjPanel.style.transform = 'translate(-50%, -50%)';
  mjPanel.style.width = '90%';
  mjPanel.style.maxWidth = '420px';
  mjPanel.style.padding = '15px';
  mjPanel.style.background = '#111';
  mjPanel.style.border = '2px solid #00ff66';
  mjPanel.style.borderRadius = '15px';
  mjPanel.style.boxShadow = '0 0 25px rgba(0,255,102,.5)';
  mjPanel.style.zIndex = '1000000';
  mjPanel.style.color = '#fff';
  mjPanel.style.textAlign = 'center';

  mjPanel.innerHTML = `
    <button id="mjClose" style="position:absolute;right:8px;top:6px;background:none;border:none;color:#fff;font-size:20px;cursor:pointer">×</button>
    <h2 style="margin:5px 0 12px;">MJ MIRAJ</h2>
    <div id="mjStatus" style="color:#ff3b30;font-weight:bold;margin:10px 0;">● STOPPED</div>
    <div style="margin:12px 0;">Status: <b style="color:#00ff66;">Licensed</b></div>
    <div style="display:flex;gap:8px;justify-content:space-between;">
      <button id="mjStart" style="flex:1;padding:10px;background:#00c853;color:#fff;border:none;border-radius:8px;font-weight:bold">START BOT</button>
      <button id="mjStop" style="flex:1;padding:10px;background:#d50000;color:#fff;border:none;border-radius:8px;font-weight:bold">STOP BOT</button>
    </div>
  `;

  document.body.appendChild(mjPanel);

  document.getElementById('mjClose').onclick = function () { mjPanel.remove(); };

  // START/STOP should be UI-only unless a validated server-side license token exists
  document.getElementById('mjStart').onclick = function () {
    const token = localStorage.getItem('mj_license_token');
    const demo = localStorage.getItem('mj_license_demo');
    if (!token && demo !== 'true') {
      document.getElementById('mjStatus').innerHTML = '● STOPPED';
      document.getElementById('mjStatus').style.color = '#ff3b30';
      alert('Protected functionality disabled: license validation required.');
      return;
    }
    // In demo mode, don't enable any signals — UI-only state
    if (demo === 'true') {
      document.getElementById('mjStatus').innerHTML = '● RUNNING (DEMO)';
      document.getElementById('mjStatus').style.color = '#00ff66';
      return;
    }
    document.getElementById('mjStatus').innerHTML = '● RUNNING';
    document.getElementById('mjStatus').style.color = '#00ff66';
  };

  document.getElementById('mjStop').onclick = function () {
    document.getElementById('mjStatus').innerHTML = '● STOPPED';
    document.getElementById('mjStatus').style.color = '#ff3b30';
  };
}

})();
