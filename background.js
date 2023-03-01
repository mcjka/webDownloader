/* BACKGROUND SCRIPT

Clicking on browser toolbar button saves the webpage in the
current tab to the browser's default downloads path with a
filename of "samplePage.html". The "tabs" and "downloads" 
permissions are required.

*/


browser.browserAction.onClicked.addListener((tab) => {
  var currentUrl = tab.url;

  function onStartedDownload(id) {
    console.log(`Started to download: ${id}`);
  }

  function onFailed(error) {
    console.log(`Something stinks: ${error}`);
  } 

  var startDownload = browser.downloads.download({
    url : currentUrl,
    filename: 'samplePage.html'
  });

  startDownload.then(onStartedDownload, onFailed);
});
