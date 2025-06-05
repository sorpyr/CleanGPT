// Inject CSS to hide the Create button by attribute and class
const style = document.createElement('style');
style.textContent = `
  button.yt-spec-button-shape-next[aria-label="Create"] {
    display: none !important;
  }

  ytd-guide-entry-renderer[title="More from YouTube"] {
    display: none !important;
  }
`;
document.head.appendChild(style);

// Backup: remove Create button container with JS after a short delay to catch dynamic loads
setTimeout(() => {
  const createBtn = document.querySelector('button.yt-spec-button-shape-next[aria-label="Create"]');
  if (createBtn) {
    // Remove its closest visible container (could be button itself or parent wrapper)
    const container = createBtn.closest('button.yt-spec-button-shape-next') || createBtn;
    container.remove();
    console.log('Create button removed by JS fallback');
  }
  
  const moreFromYT = document.querySelector('ytd-guide-entry-renderer[title="More from YouTube"]');
  if (moreFromYT) {
    moreFromYT.remove();
    console.log('"More from YouTube" section removed');
  }
}, 1000);