function Widget_cp_policy_agreements() {
	

	this.onReadyExtend = function() {

		var clientAgreements = $(".widget-content", this.$widgetDiv).children('article').length

		if(clientAgreements == 1){
			$(".widget-content article", this.$widgetDiv).click();
		}

	};

}

function popWidget(widgetName, params){
	$("#popupContent").html("<div class='widget' name='" + widgetName + "' params='" + params + "'></div>");
	pw.mount($("#popupContent .widget:first"));
	$("#popupContainer").show();
	return false;
};
