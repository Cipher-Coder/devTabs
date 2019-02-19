new GitHubCalendar(".calendar", "Cipher-Coder", { responsive: true });

GithubFeed.init({
  username: "Cipher-Coder",
  container: "#github-feeds",
  count: 8,
  order: "desc",
  onComplete: function() {
    console.log("Feed Loaded");
  }
});
