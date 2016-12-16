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
	var text = "<ul id='listWithHandle'>";
for (var i = 0; i < arrayLength; i++) {
    chrome.tabs.executeScript({
    code: 'console.log("tab ' + i + ' has url ' + tabs[i].url + '")'
});
	text += "<li><span class='my-handle'>::</span><a href='" + tabs[i].url + "' target='_blank' >" + tabs[i].title + "</a></li>";
document.getElementById("tester").innerHTML = text;
}
	text += "</ul>";
	
	// List with handle
Sortable.create(listWithHandle, {
  handle: '.my-handle',
  animation: 150
,// Changed sorting within list 
	onEnd: function (/**Event*/evt) {
        evt.oldIndex;  // element's old index within parent
        evt.newIndex;  // element's new index within parent
        chrome.tabs.executeScript({
    code: 'console.log("tab is now ' +  evt.oldIndex + '")'
});
			//chrome.tabs.remove(222);
		}
    });
	
});


function hello() {
  chrome.tabs.executeScript(alert('hello ' + document.location.href)); 
}

document.getElementById('clickme').addEventListener('click', hello);