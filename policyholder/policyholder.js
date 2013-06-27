function Widget_policyholder() {
	this.initExtend = function() {		
		this.loadHTMLWithParams("polUid=" +  window.location.hash.replace('#', ''))
	}
}