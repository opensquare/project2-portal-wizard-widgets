function Widget_cp_policy_agreements() {
	

	this.onReadyExtend = function() {

		var clientAgreements = $(".widget-content", this.$widgetDiv).children('article').length

		if(clientAgreements == 1){
			$(".widget-content article", this.$widgetDiv).click();
		}

	};

}
