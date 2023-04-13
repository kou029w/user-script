// ==UserScript==
// @match https://www.amazon.co.jp/*
// ==/UserScript==
"use strict";

const { pathname } = window.location;
const dp = pathname.match(/(?<=\/dp\/|\/gp\/product\/)\w*/)?.[0];
if (dp) window.history.replaceState(null, "", `/dp/${dp}`);
