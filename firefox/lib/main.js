var tag = "p";
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var widget = require("widget");

widget.Widget({
    id: "widgetID1",
    label: "My Mozilla Widget",
    contentURL: "http://www.mozilla.org/favicon.ico"
});
 
pageMod.PageMod({
    include: "http://de.jimdo.com/%C3%BCber-jimdo/jimdo-team/",
    contentScriptFile:  [data.url("jquery-2.0.3.min.js"), data.url("team-flip.js")],
    onAttach: function(worker) {
        worker.port.emit("start", tag);
    }
});
