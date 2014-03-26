function Widget_scp_serviceplan_canx_request(thisWidget) {
    
	this.initExtend = function() {
		
	}
    
    this.onReadyExtend = function(){
        var params = this.$widgetDiv.attr('params');
        var initialData = "<request>";
        if (typeof params != 'undefined') {
			params.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
                initialData = initialData + "<" + key + ">" + value + "</" + key + ">";
			});
		}
        initialData = initialData + "</request>";
        console.log(initialData);
        rf.loadFlow('widgets/scp-serviceplan-canx-request/scp-serviceplan-canxrequest-flow.js', $('.rhinoforms-formContainer'), initialData);
    }
	
}
