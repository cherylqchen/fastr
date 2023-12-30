chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "text") {
        let selected = window.getSelection().toString();
        sendResponse({ data: selected });
      }
    }
  );