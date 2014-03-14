function Widget_scp_serviceplan_show() {
	this.channel = null;

	this.initExtend = function() {
		var url = document.URL;
		var uid = url.substring(url.lastIndexOf("/") + 1);
		//this.loadHTMLWithParams("uid=" + uid);
		this.parameterMap.agreementUid = uid;
	};

	this.onReadyExtend = function() {
		// Setup button handlers
        $this = this;
        $("#popupBackground, #popupClose").click(function(){
            $this.loadHTML();
        });
		$('.button-canx-request', this.$widgetDiv).on("click", {widgetName: "scp-serviceplan-canx-request"},popHandler);
		$('.button-canx-complete', this.$widgetDiv).on("click", {widgetName: "scp-serviceplan-canx-confirm"},popHandler);
		$('.button-owner-update', this.$widgetDiv).on("click", {widgetName: "common-nothing"},popHandler);
		$('.button-owner-transfer', this.$widgetDiv).on("click", {widgetName: "common-nothing"},popHandler);
		$('.button-service-book', this.$widgetDiv).on("click", {widgetName: "scp-serviceplan-service-book"},popHandler);
		$('.button-service-confirm', this.$widgetDiv).on("click", {widgetName: "scp-serviceplan-service-confirm"},popHandler);
		$('.button-service-complete', this.$widgetDiv).on("click", {widgetName: "scp-serviceplan-service-complete"},popHandler);
        $('.button-service-authorise', this.$widgetDiv).on("click", {widgetName: "scp-serviceplan-service-authorise"},popHandler);
	};

	function popHandler(event) {
        console.log(event);
        var params = $(event.currentTarget).attr("params");
        console.log($("#popupContent"));
		$("#popupContent").html("<div class='widget' name='"+event.data.widgetName+"' params='" + params + "' title='serviceplan'></div>");
		pw.mount($("#popupContent .widget:first"));
        console.log($("#popupContainer"));
		$("#popupContainer").show();
	};
}
