function Widget_scp_policy_telematics_display() {

	this.channel = null;

	this.initExtend = function() {
		if (this.parameterMap.agreementUid == undefined) {
			// If no uid passed as parameter, look for uid attribute up through the dom
                var parentNode = this.$widgetDiv.parentsUntil('[uid]').parent();
				this.parameterMap.agreementUid = parentNode.attr('uid');
                this.parameterMap.effectiveTime = parentNode.attr('effectiveTime');
				//this.parameterMap.agreementUid = this.$widgetDiv.parents('article').attr('pageid').split('/')[2];
		};
	};
}
