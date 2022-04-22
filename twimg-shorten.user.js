// ==UserScript==
// @match https://pbs.twimg.com/media/*
// ==/UserScript==
"use strict";

const { pathname, search } = window.location;
const params = new URLSearchParams(search);
const name = params.get("name");
const format = params.get("format");
const to = format && `${pathname}.${format}${name === "large" ? ":orig" : ""}`;
if (to && pathname !== to) window.history.replaceState(null, "", to);
