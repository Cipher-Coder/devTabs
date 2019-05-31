var links = null;

fetch("https://dev.to/api/articles")
  .then(function(response) {
    response.json().then(function(data) {
      links = data;
      insertLinks(data);
    });
  })
  .catch(function(err) {
    console.log(err);
  });

setInterval(function() {
  if (links) {
    insertLinks(links);
  }
}, 30000);

function insertLinks(data) {
  let trendsBox = document.getElementsByClassName("Trends")[0];
  let devBox = document.getElementById("dev-to-trends");
  if (!trendsBox || devBox) return;
  let newItem = document.createElement("DIV");
  let parent = document.createElement("DIV");
  parent.className = "Trends module";
  let title = document.createElement("h3");
  title.className = "trend-location js-trend-location";
  title.textContent = "dev.to";

  insertAfter(newItem, trendsBox);
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
