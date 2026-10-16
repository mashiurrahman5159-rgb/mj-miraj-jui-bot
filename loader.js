// loader.js — safe loader for MJ MIRAJ JUI BOT
(function () {
  'use strict';

  function showLoaderError(message) {
    try {
      var el = document.getElementById('mj-loader-error');
      if (!el) {
        el = document.createElement('div');
        el.id = 'mj-loader-error';
        el.style.position = 'fixed';
        el.style.left = '12px';
        el.style.bottom = '12px';
        el.style.maxWidth = '360px';
        el.style.padding = '10px';
        el.style.background = '#220';
        el.style.border = '1px solid #ff3b30';
        el.style.color = '#fff';
        el.style.zIndex = 2147483647;
        el.style.borderRadius = '8px';
        el.style.fontSize = '13px';
        document.body.appendChild(el);
      }
      el.textContent = 'MJ Loader error: ' + message;
    } catch (e) {
      // fallback
      try { console.error('MJ Loader error:', message); } catch (e2) {}
    }
  }

  function isHttpsHost(url) {
    try {
      var u = new URL(url, location.href);
      return u.protocol === 'https:';
    } catch (e) {
      return false;
    }
  }

  // Config: allow override by host page before including loader.js
  var assets = (window && window.MJ_ASSETS) || {
    panel: (location.origin + '/panel.js') // placeholder: override in production to hosted HTTPS asset
  };

  if (!assets || !assets.panel) {
    showLoaderError('No assets configured for MJ loader.');
    return;
  }

  // Safety: require HTTPS for hosted assets
  if (!isHttpsHost(assets.panel)) {
    showLoaderError('Asset host is not HTTPS or not configured. Loader will not load insecure scripts.');
    return;
  }

  function loadScript(src, onload, onerror, timeoutMs) {
    timeoutMs = timeoutMs || 10000;
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.referrerPolicy = 'no-referrer';
    var fired = false;
    var t = setTimeout(function () {
      if (fired) return;
      fired = true;
      onerror && onerror(new Error('timeout'));
    }, timeoutMs);
    s.onload = function () {
      if (fired) return;
      fired = true;
      clearTimeout(t);
      onload && onload();
    };
    s.onerror = function () {
      if (fired) return;
      fired = true;
      clearTimeout(t);
      onerror && onerror(new Error('failed to load script: ' + src));
    };
    document.head.appendChild(s);
  }

  try {
    loadScript(assets.panel, function () {
      try { console.info('MJ loader: panel script loaded.'); } catch (e) {}
    }, function (err) {
      try { console.error('MJ loader: failed to load panel.js', err); } catch (e) {}
      showLoaderError('Failed to load panel assets. Check hosting and HTTPS.');
    }, 12000);
  } catch (e) {
    showLoaderError('Unexpected loader exception.');
    try { console.error(e); } catch (e2) {}
  }
})();
