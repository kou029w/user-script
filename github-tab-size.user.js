// ==UserScript==
// @match https://github.com/*
// ==/UserScript==
"use strict";

const { body } = window.document;

function main() {
  const el = body.querySelector(".tab-size");
  if (el) el.dataset.tabSize = "2";
}

new MutationObserver(main).observe(body, { childList: true });
main();
