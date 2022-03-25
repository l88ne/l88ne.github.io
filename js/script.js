const sleep = ms => new Promise(r => setTimeout(r, ms));
const menu = document.getElementById("menu");

var currMotd;
var discordVis = false;

fetch("https://api.github.com/users/l88ne").then(res => {
    res.json().then(json => {
        document.getElementById("av").src = json.avatar_url
    })
})

fetch("misc/motd.txt").then(res => {
    res.text().then(text => {
        let motds = text.split("\n")
        let motd = motds[Math.floor(Math.random() * motds.length)];

        currMotd = motd;

        document.getElementById("motd").innerText = "\"" + motd + "\"";
    })
})

window.addEventListener('resize', function(event) {
    menu_resize()
}, true);

function menu_resize() {
    menu.style.width = document.getElementById("av").width + "px";
    menu.style.height = document.getElementById("av").height + "px";
}

function menu_toggle() {
    if(menu.className.includes("loaded")) {
        menu_unshow()
    } else {
        menu_show()
    }
}

function menu_show() {
    menu.className += " loaded";
}

function menu_unshow() {
    menu.className = "menu fadein";
}

function social_click(t) {
    switch(t) {
        case 0:
            if(!discordVis) {
                discordVis = true;
                document.getElementById("motd").innerText = "lune#9119";
            } else {
                discordVis = false;
                document.getElementById("motd").innerText = "\"" + currMotd + "\"";
            }
            break;
    }
}
