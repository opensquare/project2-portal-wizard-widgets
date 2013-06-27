function Widget_cp_policy_payments() {
	this.initExtend = function() {		
		this.loadHTMLWithParams("polUid=" +  window.location.hash.replace('#', ''))
	}
}