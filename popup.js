const toggleCheckbox = document.getElementById('toggleBlocker');
const statusText = document.getElementById('status');

// Load initial state
chrome.storage.local.get(['adBlockerEnabled'], (result) => {
    const isEnabled = result.adBlockerEnabled !== false;
    toggleCheckbox.checked = isEnabled;
    updateStatusUI(isEnabled);
});

// Handle toggle click
toggleCheckbox.addEventListener('change', () => {
    const isEnabled = toggleCheckbox.checked;
    chrome.storage.local.set({ adBlockerEnabled: isEnabled }, () => {
        updateStatusUI(isEnabled);
        
        // Dynamically enable/disable declarativeNetRequest ruleset
        chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: isEnabled ? ["ruleset_1"] : [],
            disableRulesetIds: isEnabled ? [] : ["ruleset_1"]
        });
    });
});

function updateStatusUI(isEnabled) {
    statusText.textContent = isEnabled ? "Enabled" : "Disabled";
    statusText.style.color = isEnabled ? "#34a853" : "#ea4335";
}