/*chrome.history.getVisits({url: "facebook.com"}, function (visits) {
  console.log(visits)
});
*/
chrome.webNavigation.onDOMContentLoaded.addListener(function (data){
  if (data.frameId !== 0) 
    return;
  console.log(data);
});
