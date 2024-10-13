// ==UserScript==
//
// @name            HideOddsDisplay
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/69ea5b13-c66a-4cfa-9714-f120ae6810b9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Hides 'Current Rarities' in RNG Game
// @downloadURL     https://github.com/GameRoMan/wildwest/raw/refs/heads/main/rng_game/HideOddsDisplay/index.user.js
//
// ==/UserScript==


(function() {
    const oddsDisplay = document.getElementById('odds-display');
    oddsDisplay.style.display = 'none';
})();
