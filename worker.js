let bannedStrings = ["reddit.com", "instagram.com","youtube.com"]
html = '<div style="text-align:center; font-size: 1.7vw; font-family:verdana"><br/><br/><b>CAUGHT YOU LACKING!! 🚨🚨🚨🚨 😠😠😠</b> <br/><br/><b>LOCK IN and get that academic comeback! 🗣🗣🗣🔥🔥🔥</b></div>'
function display() {
    document.body.innerHTML = html;
}

function Block(site, endDate, pass) {
    this.site = site;
    this.endDate = endDate;
    this.pass = pass;
}

console.log("Real");
if (!window.location.href.includes('chrome://')) {
    if (bannedStrings.some(site => window.location.href.includes(site))) {
        display();
    }
}