console.log("LockIN Website Block active!");
let bannedStrings = ["reddit.com", "instagram.com", "youtube.com"];

html = '<div style="text-align:center; height:99.9vh;font-size: 1.7vw; font-family:verdana "><br/><br/><b style="color:white">CAUGHT YOU LACKING!! 🚨🚨🚨🚨 😠😠😠</b> <br/><br/><b style="color:white">LOCK IN and get that academic comeback! 🗣🗣🗣🔥🔥🔥</b></div>'
function display() {
    document.body.style.background = '#282928';
    document.body.innerHTML = html;
}

function Block(site, endDate, pass) {
    this.site = site;
    this.endDate = endDate;
    this.pass = pass;
}
window.addEventListener("load", function () {
    if (!window.location.href.includes('chrome://')) {
        if (bannedStrings.some(site => window.location.href.includes(site))) {
            display();
        }
    }
});