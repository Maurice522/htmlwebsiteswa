console.log("Script running!");

// ----------------------------
// Pagehide listener
// ----------------------------
window.addEventListener("pagehide", function(e) { 
    console.log("pagehide fired");
});


// ----------------------------
// Safe digitalData setup
// ----------------------------
window.digitalData = window.digitalData || {};
window.digitalData.page = {
    name: "Home Page",
    url: window.location.href,
    title: document.title,
    server: "github",
    list: "Example value 1,Example value 2,Example value 3"
};

console.log("List evar set");


// ----------------------------
// UUID generator (no crypto)
// ----------------------------
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


// ----------------------------
// Cookie expiration generator
// ----------------------------
function getCookieExpiration(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    return date.toUTCString();
}


// ----------------------------
// OPTIONAL: Delete Adobe ECID cookies (for testing)
// ----------------------------
function deleteKndctrCookies() {

    document.cookie.split(";").forEach(function(cookie) {

        var cookieName = cookie.split("=")[0].trim();

        if (cookieName.indexOf("kndctr_") === 0) {

            document.cookie = cookieName +
                "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;" +
                "path=/;" +
                "domain=" + window.location.hostname.replace(/^www\./, '') + ";";

            console.log("Deleted cookie:", cookieName);
        }
    });

}

// 👉 Uncomment only if you want to simulate new visitor
// deleteKndctrCookies();


// ----------------------------
// FPID creation logic
// ----------------------------
var fpidCookie = document.cookie.match(/(^|;\s*)FPID=([^;]*)/);

if (!fpidCookie) {

    var fpid = generateUUID();

    document.cookie = "FPID=" + fpid +
        ";expires=" + getCookieExpiration(365) +
        ";path=/;SameSite=Lax";

    console.log("FPID Cookie created!");

} else {

    console.log("FPID Cookie exists!");
}
