function Widget_displayAgreement() {

	this.channel = null;

	this.initExtend = function() {
		if (this.parameterMap.agreementUid == undefined) {
			// If no uid passed as parameter, look for uid attribute up through the dom
				this.parameterMap.agreementUid = this.$widgetDiv.parentsUntil('[uid]').parent().attr('uid');
				//this.parameterMap.agreementUid = this.$widgetDiv.parents('article').attr('pageid').split('/')[2];
		};
	};
}
