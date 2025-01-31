console.log("Script running!");

var false_val = false;
var true_val = true;

window.addEventListener("pagehide", function(e) { 
    console.log("pagehide :====");
});

window.digitalData = {
    "page":{
        "name":"Home Page",
        "url":"https://maurice522.github.io/htmlwebsiteswa/",
        "title": "Welcome to Swalalala life , Maurice Rana",
        "server": "github",
        "list": "Example value 1,Example value 2,Example value 3"
    }
}
console.log("List evar set");
