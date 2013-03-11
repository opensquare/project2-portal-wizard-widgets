function Widget_scp_policies_search() {
	
	this.onReadyExtend = function() {
		$('form', this.$widgetDiv).submit(function() {
			pw.notifyChannelOfEvent('pactSearch', { searchValue: $('input[name="searchValue"]', this).val() });
			return false;
		});
	}
	
}