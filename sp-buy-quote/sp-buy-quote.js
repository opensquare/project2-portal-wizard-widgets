function Widget_sp_buy_quote() {
	
	this.onReadyExtend = function() {
		var quoteRef = this.$widgetDiv.attr('quoteRef');
		var params = this.$widgetDiv.attr('params');
		
        var accessToken = $("#accessToken", this.$widgetDiv).val();
        
		var qr;
		
		// SCP
		if (typeof quoteRef != 'undefined') {
			qr = quoteRef;
		}
		
		// CP
		if (typeof params != 'undefined') {
			var paramsObj = {};
			params.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
				paramsObj[key] = value;
			});
			if (typeof paramsObj.ref != 'undefined' && paramsObj.ref != null && paramsObj.ref.indexOf("{") == -1) {
				qr = paramsObj.ref;
			}
		}
		
		var initialData;
		if (typeof qr != 'undefined') {
			initialData = '<quote><accessToken>' + accessToken + '</accessToken><quoteRef>' + qr + '</quoteRef></quote>';
		}
		rf.loadFlow('widgets/sp-buy-quote/buy-quote-flow.js', $('.rhinoforms-quote-formContainer', this.$widgetDiv), initialData);

	}	
}

	