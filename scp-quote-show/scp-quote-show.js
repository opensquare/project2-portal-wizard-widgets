function Widget_scp_quote_show() {
	
	this.onReadyBeforeChildImport = function() {
		var pageId = this.$widgetDiv.parents('article').attr('pageId');
		var calcId = pageId.split('/')[2];
		pw.notifyChannelOfEvent('scp-page.setPageTitles', { pageId: pageId, title: 'Quote Show', subTitle: 'Calc ' + calcId });
		
		$('.widget[name="quote-forms"]', this.$widgetDiv).attr('calcref', calcId);
	}
	
}