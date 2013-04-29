function Widget_sec_quote_forms(thisWidget) {
    
	this.initExtend = function() {
		
	}
    
    this.onReadyExtend = function(){
        rf.loadFlow('widgets/sec-quote-forms/sec-quote-forms-flow.js', $('.rhinoforms-formContainer'), "");
    }
	
}
