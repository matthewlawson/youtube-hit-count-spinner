var countElement = document.getElementById("watch-actions-right").getElementsByTagName('strong')[0].childNodes[0];

var ytCount  = countElement.textContent;

ytCount = ytCount.replace(",", "")
//console.log(ytCount);
setInterval(function(){
    ytCount ++;
    countElement.textContent = ytCount;
}, 100);
