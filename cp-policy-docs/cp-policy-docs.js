function Widget_cp_policy_docs() {
	

	this.onReadyExtend = function() {

			var url = document.URL;
     		var policyId = url.substring(url.lastIndexOf("/") + 1);
			var url = 'proxy/mailmerger/jobs/search/' + encodeURIComponent('%'+ policyId +'%');
		
			$.ajax(url).done(function(searchResultsArray) {

				$('.mm-documents').html('<ul name="docSearchResultsLists"></ul>');

				for (var i = 0; i < searchResultsArray.length; i++) {
					var $searchItemHtml = $('<a class="pdf" target="_blank" href=' + 'proxy/mailmerger/output/document/'+searchResultsArray[i].id+'/0' + '>'
							+ searchResultsArray[i].template + searchResultsArray[i].description +  moment(new Date(searchResultsArray[i].date)).format("DD/MM/YYYY") + '</a>');
					$('.mm-documents').append($searchItemHtml);
				}
			});
			
	};

}

