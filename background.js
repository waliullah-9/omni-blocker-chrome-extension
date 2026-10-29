chrome.runtime.onInstalled.addListener(() => {
    // Set default state to enabled
    chrome.storage.local.set({ adBlockerEnabled: true }, () => {
        console.log("OmniBlocker initialized and enabled.");
    });
});