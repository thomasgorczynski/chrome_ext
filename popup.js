/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */




// Do NOT forget that the method is ASYNCHRONOUS
chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(array_of_Tabs) {
    // Since there can only be one active tab in one active window, 
    //  the array has only one element
    var tab = array_of_Tabs[0];
    // Example:
    var url = tab.url;
    // ... do something with url variable
	
	
});

chrome.tabs.executeScript({
    code: 'console.log("hi")'
});

chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
	chrome.tabs.executeScript({
    code: 'console.log("hi there' + tabURL + '")'
});
});