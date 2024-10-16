// ==UserScript==
//
// @name            RNG game mod
// @namespace       Violentmonkey Scripts
// @match           https://g.wildwest.gg/g/69ea5b13-c66a-4cfa-9714-f120ae6810b9*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     A script that adds useful features to RNG Game
// @downloadURL     https://github.com/GameRoMan/wildwest/raw/refs/heads/main/rng_game/mod/index.user.js
//
// ==/UserScript==


(function() {
    // DisableOfflineRollsAlerts
    window.alert = function() {};
    window.confirm = function() { return true; };
    window.prompt = function() { return ''; };

    // StopScreenBouncing
    const resultElement = document.getElementById('result');
    resultElement.style.height = '180px';// ==UserScript==

    // HideGlobalAnnouncements
    const globalAnnouncements = document.getElementById('global-announcements');
    globalAnnouncements.style.display = 'none';

    // HideOddsDisplay
    const oddsDisplay = document.getElementById('odds-display');
    oddsDisplay.style.display = 'none';

    // AddMoreColors
    const customColorSchemes = {
        white: {
            primary: '#ffffff',
            primaryTransparent: 'rgba(255, 255, 255, 0.3)',
            secondary: '#333333',
            background: '#222222',
            text: '#ffffff'
        }
    };

    const colorSchemeSelect = document.getElementById('color-scheme-select');

    function AddColor(text, value) {
        const option = document.createElement("option");
        option.textContent = text;
        option.value = value;
        colorSchemeSelect.appendChild(option);
    }

    AddColor('White', 'white');

    colorSchemeSelect.addEventListener('change', (e) => {
        const color = e.target.value;
        if (color in customColorSchemes) ApplyCustomColor(color);
    });

    function ApplyCustomColor(scheme) {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', customColorSchemes[scheme].primary);
      root.style.setProperty('--primary-color-transparent', customColorSchemes[scheme].primaryTransparent);
      root.style.setProperty('--secondary-color', customColorSchemes[scheme].secondary);
      root.style.setProperty('--background-color', customColorSchemes[scheme].background);
      root.style.setProperty('--text-color', customColorSchemes[scheme].text);
    }

    // AutoLowDetailMode
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
