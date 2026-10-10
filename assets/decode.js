// Scramble the site name with random glyphs, then resolve it left to right. Once per session.
(function () {
  var el = document.querySelector('.decode');
  if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try { if (sessionStorage.decoded) return; sessionStorage.decoded = 1; } catch (e) {}
  var text = el.textContent, glyphs = '!<>-_/[]{}=+*^?#%&@$:;~0123456789', frame = 0;
  (function tick() {
    el.textContent = text.replace(/\S/g, function (c, i) {
      return frame > 6 + i * 2 ? c : glyphs[Math.random() * glyphs.length | 0];
    });
    if (frame++ < 6 + text.length * 2) setTimeout(tick, 35);
  })();
})();
