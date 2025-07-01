// ==UserScript==
// @name     Apify Console Tweaks
// @include  https://console.apify.com/*
// @require  https://code.jquery.com/jquery-3.7.1.min.js
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle(`
    .Sidebar-customContent.Nav-spacer { display: none; }
    .OneLineCode-ScrollableWrapper pre code { overflow: auto; }
`);

$(document).ready(() => {
    // Proper Admin titles
    new MutationObserver(function() {
        if (/Admin\s*\|\s*[^|]*\|\s*\S+/i.test(document.title)) {
            const titleParts = document.title.split('|');
            const user = titleParts[1]?.trim();
            const page = document.title
                .split('|')
                .slice(2)
                .map(part => part?.trim() || '')
                .join('|');

            document.title = `${page} [${user}]`;
        }
    }).observe(
        document.querySelector('title'),
        { subtree: true, characterData: true, childList: true }
    );
});
