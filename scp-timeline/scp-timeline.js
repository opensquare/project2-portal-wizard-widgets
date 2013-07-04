function Widget_scp_timeline() {

	this.onReadyExtend = function(){
        
    }
}
var timeline_data;
var tl;
function onLoad() {
    
    Timeline.OriginalEventPainter.prototype._showBubble = function(x, y, evt) {
        type = evt.getProperty('type');
        if(type == "note"){
            alert("This is a note: " + evt.getDescription());
        }else if(type=='version'){
            alert("This is a version: loading version...");
        }else if(type=='event'){
            alert("This is an event: " + evt.getProperty('title'));
        }
    }

    var tl_el = document.getElementById("tl");
    var eventSource1 = new Timeline.DefaultEventSource();
    
    var theme1 = Timeline.ClassicTheme.create();
    theme1.autoWidth = true; // Set the Timeline's "width" automatically.
                             // Set autoWidth on the Timeline's first band's theme,
                             // will affect all bands.
    theme1.timeline_start = new Date(Date.UTC(2003, 0, 1));
    theme1.timeline_stop  = new Date(Date.UTC(2023, 0, 1));
    
    var d = Timeline.DateTime.parseGregorianDateTime("2013")
    var bandInfos = [
        Timeline.createBandInfo({
            width:          45, // set to a minimum, autoWidth will then adjust
            intervalUnit:   Timeline.DateTime.YEAR, 
            intervalPixels: 200,
            eventSource:    eventSource1,
            date:           d,
            theme:          theme1,
            layout:         'original'  // original, overview, detailed
        })
    ];
                                                    
    // create the Timeline
    tl = Timeline.create(tl_el, bandInfos, Timeline.HORIZONTAL);
    
    var url = '.'; // The base url for image, icon and background image
                   // references in the data
    eventSource1.loadJSON(timeline_data, url); // The data was stored into the 
                                               // timeline_data variable.
    tl.layout(); // display the Timeline
}

var resizeTimerID = null;
function onResize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}

var timelineLoaded = false;

function loadTimeline(){
    if(!timelineLoaded){
        $.getJSON('proxy/script-runner/executeScript/Util/getTimeline/output.json', function(data){
            timeline_data = data;
            onLoad();
       });
    }
}
