function Widget_sp_qquote() {
	
	this.onReadyExtend = function() {
		// Add a css file from host
		var host = window.top.location.host;
		$('head').append('<link rel="stylesheet" href="'+host+'/rq.css">');

		// Look for calc ref to load
		var calcref = this.$widgetDiv.attr('calcref');
		var params = this.$widgetDiv.attr('params');
		
		var cr;
		
		// SCP
		if (typeof calcref != 'undefined') {
			cr = calcref;
		}
		
		// CP
		if (typeof params != 'undefined') {
			var paramsObj = {};
			params.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
				paramsObj[key] = value;
			});
			if (typeof paramsObj.ref != 'undefined' && paramsObj.ref != null && paramsObj.ref.indexOf("{") == -1) {
				cr = paramsObj.ref;
			}
		}
		
		var initialData;
		if (typeof cr != 'undefined') {
			initialData = '<quote><calcref>' + cr + '</calcref></quote>';
		}
		rf.loadFlow('widgets/sp-qquote/new-quote-flow.js', $('.rhinoforms-quote-formContainer', this.$widgetDiv), initialData);

	}	
}

	