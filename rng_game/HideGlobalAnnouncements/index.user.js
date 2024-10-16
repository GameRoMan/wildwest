// ==UserScript==
//
// @name            HideGlobalAnnouncements
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/69ea5b13-c66a-4cfa-9714-f120ae6810b9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Hides 'Global Announcements' in RNG Game
// @downloadURL     https://github.com/GameRoMan/wildwest/raw/refs/heads/main/rng_game/HideGlobalAnnouncements/index.user.js
//
// ==/UserScript==


(function() {
    const globalAnnouncements = document.getElementById('global-announcements');
    globalAnnouncements.style.display = 'none';
})();
