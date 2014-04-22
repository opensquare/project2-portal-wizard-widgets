function Widget_cp_new_quote() {
	

	this.onReadyExtend = function() {

		pw.addListenerToChannel(this, "new-quote-requested");

	};
    
    this.handleEvent = function(event){
        this.loadHTML();
    }

}
