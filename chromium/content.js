console.log("GitPump activated!");
function showLevel(level) {
    let levelBox = document.getElementById("gitpump-level");

    if (!levelBox) {
        levelBox = document.createElement("div");
        levelBox.id = "gitpump-level";
        document.body.appendChild(levelBox);
    }

    levelBox.innerText = "Ваш уровень: " + level;
}

chrome.storage.local.get(["level"], (result) => {
    let level = result.level || 1;
    showLevel(level);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "increaseLevel") {
        chrome.storage.local.get(["level"], (result) => {
            let level = (result.level || 1) + 1;
            chrome.storage.local.set({ level }, () => {
                showLevel(level);
                sendResponse({ level });
            });
        });
        return true;
    }
});
