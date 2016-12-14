/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */



chrome.tabs.executeScript({
    code: 'console.log("hi")'
});

chrome.tabs.query({}, function(tabs) {
	var arrayLength = tabs.length;
	var text = "<ul>";
for (var i = 0; i < arrayLength; i++) {
    chrome.tabs.executeScript({
    code: 'console.log("tab ' + i + ' has url ' + tabs[i].url + '")'
});
	text += "<li><a href='" + tabs[i].url + "'>" + tabs[i].title + "</a></li>";
document.getElementById("tester").innerHTML = text;
}
	text += "</ul>";
	
});