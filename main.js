alert("hello nerd");
chrome.history.getVisits({url: "facebook.com"}, function (visits) {
  console.log(visits)
});

alert("gg");
