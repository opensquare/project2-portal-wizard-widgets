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

        var existingUser = false;
		var params = this.$widgetDiv.attr('params');
        var initialData = "<quote><phase>quote</phase>";
        if (typeof params != 'undefined') {
			params.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
                if(key == "accessToken" && value != ""){
                    existingUser = true;
                }
                initialData = initialData + "<" + key + ">" + value + "</" + key + ">";
			});
		}
        initialData = initialData + "</quote>";
        console.log(initialData);
        var flow = 'widgets/sp-qquote/new-quote-flow.js';
        if(existingUser){
            flow = 'widgets/sp-qquote/existing-user-quote-flow.js';
        }
		rf.loadFlow(flow, $('.rhinoforms-quote-formContainer', this.$widgetDiv), initialData);

	}	
}

	