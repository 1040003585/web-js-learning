console.log("background")
chrome.tabs.onUpdated.addListener(function(tabId , info) {
    if (info.status == "complete") {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tabs[0].url;
            console.log(url)
            if(url=="https://www.baidu.com/"){ 
                chrome.tabs.executeScript(null,{code:'\
            var oBtn = document.getElementById("su");  setInterval(function(){ var oBtn = document.getElementById("su"); oBtn.click(); }, 100); oBtn.click();'});
            }
        });
    }
});


