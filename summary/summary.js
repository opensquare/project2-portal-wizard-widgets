function Widget_summary() {

	this.initExtend = function() {
		this.loadHTMLWithParams("policyUid=" +  window.location.hash.replace('#', ''));
	}

}
