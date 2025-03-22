// Апгрейд левела
function increaseLevel() {
  chrome.storage.local.get("level", (data) => {
    let currentLevel = Number(data.level) || 1;
    currentLevel++; //начисление балов для аппа лвла
    chrome.storage.local.set({ level: currentLevel }, () => {
      console.log("Новый уровень:", currentLevel);
    });
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "increaseLevel") {
    increaseLevel();
    sendResponse({ status: "success" });
  }
});