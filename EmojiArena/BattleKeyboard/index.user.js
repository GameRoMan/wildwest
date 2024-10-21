// ==UserScript==
//
// @name            Battle Keyboard
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/beccb87f-c9ae-4cd6-bdc2-156e56a82da9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Use keyboard to fight in Emoji Arena
//
// ==/UserScript==


(function() {
    document.onkeypress = function(event) {
        if (event.charCode >= 49 && event.charCode <= 55) document.getElementById('action-buttons').children[event.charCode - 49].click();
    }
})();
