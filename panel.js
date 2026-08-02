(function () {

  if (document.getElementById("mj-float-btn")) return;

  const btn = document.createElement("div");
  btn.id = "mj-float-btn";
  btn.innerText = "MJ";

  document.body.appendChild(btn);

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  btn.addEventListener("pointerdown", function (e) {
    isDragging = true;

    offsetX = e.clientX - btn.getBoundingClientRect().left;
    offsetY = e.clientY - btn.getBoundingClientRect().top;

    btn.style.right = "auto";
    btn.style.bottom = "auto";

    e.preventDefault();
  });

  document.addEventListener("pointermove", function (e) {

    if (!isDragging) return;

    btn.style.left = (e.clientX - offsetX) + "px";
    btn.style.top = (e.clientY - offsetY) + "px";

  });

  document.addEventListener("pointerup", function () {
    isDragging = false;
  });

})();
