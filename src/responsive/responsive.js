window.onload = function getURL() {
  chrome.storage.local.get(["resURL"], function(result) {
    let url = result.resURL;
    if (url === undefined) {
      let pageStart = document.getElementById("frame-start");
      pageStart.setAttribute("style", "color: red; font-size: 1.5rem;");
      pageStart.textContent =
        "No URL detected. Go back to the Dev Tabs Popup and enter URL!";
    } else {
      function createIframe(height, width) {
        let pageStart = document.getElementById("frame-start");
        let iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.setAttribute(
          "sandbox",
          "allow-scripts allow-forms allow-same-origin"
        );
        iframe.setAttribute("height", `${height}`);
        iframe.setAttribute("width", `${width}`);
        iframe.setAttribute("style", "margin: 65px 45px; border-radius: 6px;");

        pageStart.appendChild(iframe);
      }
      createIframe("846px", "412px");
      createIframe("786px", "393px");
      createIframe("812px", "375px");
      createIframe("800px", "1024px");
      createIframe("800px", "1280px");
    }
  });
};
