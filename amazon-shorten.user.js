// ==UserScript==
// @match https://www.amazon.co.jp/*
// ==/UserScript==
"use strict";

const { pathname } = window.location;
const dp = pathname.match(/(?<=\/(?:dp|gp\/product)\/)\w*/)?.[0];
const to = dp && `/dp/${dp}`;
if (to && pathname !== to) window.history.replaceState(null, "", to);
