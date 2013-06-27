function Widget_cp_summary_ppi() {

	this.initExtend = function() {
		this.loadHTMLWithParams("policyUid=" +  window.location.hash.replace('#', ''));
	}

}
