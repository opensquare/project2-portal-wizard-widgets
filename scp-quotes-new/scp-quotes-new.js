function Widget_scp_quotes_new() {
	
	this.onReadyBeforeChildImport = function() {
		pw.notifyChannelOfEvent('scp-page.setPageTitles', { pageId: 'quotes/new', title: 'New Quote'});
	}
	
}