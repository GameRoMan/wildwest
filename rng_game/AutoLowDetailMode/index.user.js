// ==UserScript==
//
// @name            AutoLowDetailMode
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/69ea5b13-c66a-4cfa-9714-f120ae6810b9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     Automatically enables Low Detail Mode in RNG Game
// @downloadURL     https://github.com/GameRoMan/wildwest/raw/refs/heads/main/rng_game/AutoLowDetailMode/index.user.js
//
// ==/UserScript==


(function() {
    const lowDetailModeCheckbox = document.getElementById('low-detail-mode-checkbox');
    lowDetailModeCheckbox.checked = true;
    document.body.classList.add('low-detail-mode');

    function saveLowDetailMode(save_data) {
        const saveLowDetailModeEvent = {
            type: 'RESPONSE_LOAD_GAME_EVENT',
            save_data: {
                ...save_data,
                lowDetailMode: true,
            }
        };

        window.postMessage(saveLowDetailModeEvent, '*');
    }

    window.addEventListener('message', (event) => {
        if (event.origin.includes('g.')) return;
        if (event.data.type !== 'RESPONSE_LOAD_GAME_EVENT') return;

        saveLowDetailMode(event.data.save_data);
    });
})();
