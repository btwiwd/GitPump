document.addEventListener("DOMContentLoaded", () => {
  // Обновление уровна
  function updateLevelDisplay() {
    chrome.storage.local.get("level", (data) => {
      levelDisplay.textContent = "Ваш уровень: " + (data.level || 1);
    });
  }
  // Начальное обновление
  updateLevelDisplay();
});
