// ==UserScript==
//
// @name            DisableOfflineRollsAlerts
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/69ea5b13-c66a-4cfa-9714-f120ae6810b9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Disables alerts for offline rolls in RNG Game
// @downloadURL     https://github.com/GameRoMan/wildwest/raw/refs/heads/main/rng_game/DisableOfflineRollsAlerts/index.user.js
//
// ==/UserScript==


(function() {
    window.alert = function() {};
    window.confirm = function() { return true; };
    window.prompt = function() { return ''; };
})();
