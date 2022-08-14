// ==UserScript==
// @match https://www.youtube.com/*
// ==/UserScript==
"use strict";

function main() {
  const { yt } = window;
  if (yt) yt.config_.EXPERIMENT_FLAGS.global_spacebar_pause = false;
}

const script = document.createElement("script");
script.textContent = `"use strict";${main.name}();${String(main)}`;
document.head.append(script);
