document.getElementById('openChatGPT').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://chatgpt.com/' });
});