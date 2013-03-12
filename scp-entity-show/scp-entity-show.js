function Widget_scp_entity_show() {

	this.channel = null;

	this.initExtend = function() {
		var url = document.URL;
        var uid = url.substring(url.lastIndexOf("/") + 1);
        this.loadHTMLWithParams("uid=" + uid);
	}
	
}
