console.log("LockIN Website Block active!");
let bannedStrings = ["reddit.com", "instagram.com", "youtube.com"];

html = '<div style="text-align:center; background-color:#282928;height:99.9vh;font-size: 1.7vw; font-family:verdana "><br/><br/><h1 style="color:white">CAUGHT YOU LACKING!! 🚨🚨🚨🚨 😠😠😠 <br/> LOCK IN and get that academic comeback! 🗣🗣🗣🔥🔥🔥</h1></div>'
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