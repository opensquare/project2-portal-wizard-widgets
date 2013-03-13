function Widget_namedDriver() {
	 
	 this.initExtend = function() {
		this.loadHTMLWithParams("policyUid=" +  window.location.hash.replace('#', ''));
	}

	
}



		

