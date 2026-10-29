# 🛡️ OmniBlocker - Custom Chrome Ad Blocker

A lightweight, high-performance browser extension built from scratch using **Manifest V3**, designed to block network trackers, clean up web page elements, and automatically skip video ads on YouTube.

## 🚀 Features

* **Manifest V3 Compliant:** Built using modern Chrome extension standards for better security and performance.
* **Network-Level Interception:** Utilizes Chrome's `declarativeNetRequest` API to block ad-serving domains (like DoubleClick and Google Syndication) before content even loads.
* **YouTube Ad Handling & Cosmetic Filtering:** 
  * Automatically detects and hides blank ad containers, side banners, and overlays.
  * Instantly clicks the "Skip Ad" button when it appears.
  * Uses a robust `MutationObserver` to handle YouTube's dynamic Single Page Application (SPA) routing.
* **Interactive Popup UI:** Clean user interface with a real-time toggle switch to enable or disable the blocker instantly.

## 🛠️ Tech Stack

* **JavaScript (ES6+)** - Background service workers, content script logic, and popup controls.
* **HTML5 & CSS3** - Extension popup interface design.
* **Chrome Extension APIs** - `declarativeNetRequest`, `storage`, and `content_scripts`.

---

## 📂 Project Structure

```text
my-ad-blocker/
├── manifest.json       # Extension configuration and permissions
├── rules.json          # Network-level blocking rules
├── background.js       # Service worker for extension lifecycle and storage
├── content.js          # DOM manipulation and YouTube ad cleaner
├── popup.html          # Extension popup UI layout
├── popup.css           # Styling for the popup interface
└── popup.js            # Popup interaction logic