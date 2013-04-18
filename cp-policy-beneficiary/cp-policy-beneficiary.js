function Widget_cp_policy_beneficiary() {
	 
	 this.initExtend = function() {
		this.loadHTMLWithParams("policyUid=" +  window.location.hash.replace('#', ''));
	}

	
}



		

