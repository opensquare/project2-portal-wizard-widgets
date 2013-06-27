function Widget_cp_policy_claims() {
	this.initExtend = function() {		
		this.loadHTMLWithParams("polUid=" +  window.location.hash.replace('#', ''))
	}
}