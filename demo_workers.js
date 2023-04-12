var i=0;

function timedCount() {
    i=i+1;
    
    fetch("https://63ac1dfa34c46cd7ae77dabf.mockapi.io/api/news").
    then(y=>y.json())
    .then(y=> {
        postMessage(y.length);
    })
    setTimeout("timedCount()", 1500);
}

timedCount();