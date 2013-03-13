function Widget_insuredCommodity() {
	this.initExtend = function() {		
		this.loadHTMLWithParams("policyUid=" +  window.location.hash.replace('#', ''))
	}
}