function Widget_scp_quote_show() {
	
	this.onReadyBeforeChildImport = function() {
		var pageId = this.$widgetDiv.parents('article').attr('pageId');
		var calcId = pageId.split('/')[2];
		pw.notifyChannelOfEvent('scp-page.setPageTitles', { pageId: pageId, title: 'Quote Show', subTitle: 'Calc ' + calcId });
		
		$('.widget[name="quote-forms"]', this.$widgetDiv).attr('calcref', calcId);
	}
	
}

function pulldownToggle(element, selector) {
	var onAlready = $(element).hasClass('on')
	$(element).parent().children().removeClass('on').parentsUntil('div.widget[name]').find('.content-header-pulldown>div.widget[name]').slideUp('fast');

	if(onAlready != true){
		$(element).addClass('on').parentsUntil('div.widget[name]').find('.content-header-pulldown>div.widget[name='+selector+']').slideDown('fast');
	}
}