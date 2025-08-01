chrome.runtime.onStartup.addListener(() => {
  createBackgroundAudioTab();
});

chrome.runtime.onInstalled.addListener(() => {
  createBackgroundAudioTab();
});

async function createBackgroundAudioTab() {
  const url = chrome.runtime.getURL("audio.html");

  // Check if it's already open
  chrome.tabs.query({}, (tabs) => {
    const alreadyOpen = tabs.some(tab => tab.url === url);
    if (!alreadyOpen) {
      chrome.tabs.create({
        url: url,
        active: false,
        pinned: true
      });
    }
  });
}
