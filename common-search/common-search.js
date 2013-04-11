function commonSearchSubmission(channel,terms) {
	var $searchResultsContainer = $('[channel="'+channel+'"]').parent().find('.search-results');
	$searchResultsContainer.empty();

	if(terms!=''){
		$searchResultsContainer.addClass('loading');
		pw.notifyChannelOfEvent(channel, { searchValue: terms });
		$searchResultsContainer.removeClass('loading');
	};

	// Prevent possible page refresh
	return false;
}
