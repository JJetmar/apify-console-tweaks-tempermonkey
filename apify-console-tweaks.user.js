// ==UserScript==
// @name     Apify Console Tweaks
// @include  https://console.apify.com/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle(`
    .Sidebar-customContent.Nav-spacer { display: none; }
    .OneLineCode-ScrollableWrapper pre code { overflow: auto; }
`);
