export default defineBackground({
  type: 'module',
  persistent: false,
  // Executed when background is loaded, CANNOT BE ASYNC
  main() {
    console.log('Hello background!', { id: browser.runtime.id });

    // Open the welcome page when the extension is first installed
    browser.runtime.onInstalled.addListener((details) => {
      console.log('onInstalled', details);

      if (details.reason === 'install') {
        browser.tabs.create({
          url: 'welcome-page.html',
        });
      }
    });
  },
});
