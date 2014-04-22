function Widget_cp_service_plans() {
	

	this.onReadyExtend = function() {

		pw.addListenerToChannel(this, "service-plans-updated");

	};
    
    this.handleEvent = function(event){
        this.loadHTML();
    }

}
