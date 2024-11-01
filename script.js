chrome.webRequest.onHeadersReceived.addListener(
  function(info) {
    const headers = info.responseHeaders;
    for (let i = headers.length - 1; i >= 0; --i) {
      if (headers[i].name.toLowerCase() === "x-frame-options") {
        headers.splice(i, 1); // Remove the header
      }
    }
    return { responseHeaders: headers };
  },
  { urls: ["<all_urls>"], types: ["sub_frame"] },
  ["blocking", "responseHeaders"]
);
