// ==UserScript==
// @match https://atmarkit.itmedia.co.jp/*
// ==/UserScript==
"use strict";

const el = window.document.querySelector(".subscription");
if (el) el.removeAttribute("style");
