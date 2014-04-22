function Widget_cp_quotes() {
	

	this.onReadyExtend = function() {

		pw.addListenerToChannel(this, "quotes-updated");

	};
    
    this.handleEvent = function(event){
        this.loadHTML();
    }

}

function popWidget(widgetName, params){
	$("#popupContent").html("<div class='widget' name='" + widgetName + "' params='" + params + "'></div>");
	pw.mount($("#popupContent .widget:first"));
	$("#popupContainer").show();
	return false;
};
