function Widget_cp_home() {
	
	this.onReadyExtend = function() {
		// Add a css file from host if within iframe
		if (window.top !== window.self) {
			var protocol = window.top.location.protocol;
			var host = window.top.location.host;
			var pwpath = '/widgets';
			var pathname = window.top.location.pathname;
			$('head').append('<link rel="stylesheet" href="'+protocol+'//'+host+pwpath+pathname+'/cp.css">');
		};
	}	
}