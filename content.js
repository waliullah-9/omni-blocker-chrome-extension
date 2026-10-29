const cleanYouTubeAds = () => {
    chrome.storage.local.get(['adBlockerEnabled'], (result) => {
        if (result.adBlockerEnabled === false) return;

        // 1. Remove ad banners, overlays, and sidebar ads
        const adSelectors = [
            '.video-ads',
            '.ytp-ad-module',
            'ytd-ad-slot-renderer',
            'ytd-display-ad-renderer',
            '.ytp-ad-player-overlay',
            '#masthead-ad'
        ];

        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.remove();
            });
        });

        // 2. Automatically click the Skip button when it appears
        const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button');
        if (skipButton) {
            skipButton.click();
        }

        // 3. Jump past and speed up video ads instantly if playing
        const video = document.querySelector('video');
        const adOverlay = document.querySelector('.ad-showing, .ytp-ad-player-overlay');
        
        if (video && adOverlay) {
            video.currentTime = video.duration || video.currentTime + 10;
            video.playbackRate = 16.0;
        }
    });
};

// Run observer continuously to catch dynamically injected ads
const observer = new MutationObserver(() => {
    cleanYouTubeAds();
});

if (document.body) {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Backup interval check for stubborn ad frames
setInterval(cleanYouTubeAds, 500);