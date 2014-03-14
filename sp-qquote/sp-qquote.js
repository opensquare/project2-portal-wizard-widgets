function Widget_sp_qquote() {
	
	this.onReadyExtend = function() {
		// Add a css file from host if within iframe
		if (window.top !== window.self) {
			var protocol = window.top.location.protocol;
			var host = window.top.location.host;
			var pwpath = '/widgets';
			var pathname = window.top.location.pathname;
			$('head').append('<link rel="stylesheet" href="'+protocol+'//'+host+pwpath+pathname+'/rq.css">');
		};

		var params = this.$widgetDiv.attr('params');
        var initialData = "<quote><phase>quote</phase>";
        if (typeof params != 'undefined') {
			params.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
                initialData = initialData + "<" + key + ">" + value + "</" + key + ">";
			});
		}
        initialData = initialData + "</quote>";
        console.log(initialData);
		rf.loadFlow('widgets/sp-qquote/new-quote-flow.js', $('.rhinoforms-quote-formContainer', this.$widgetDiv), initialData);

	}	
}

	