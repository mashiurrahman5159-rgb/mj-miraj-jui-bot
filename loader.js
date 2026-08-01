(function () {
    if (window.MJ_LOADED) return;
    window.MJ_LOADED = true;

    const script = document.createElement("script");
    script.src = "panel.js?" + Date.now();
    document.head.appendChild(script);
})();
