function Widget_scp_policy_search() {
	
	this.onReadyExtend = function() {
		$('form', this.$widgetDiv).submit(function() {
			pw.notifyChannelOfEvent('pactSearch', { searchValue: $('input[name="searchValue"]', this).val() });
			return false;
		});
	}
	
}