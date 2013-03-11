function Widget_quote_forms() {
	
	this.onReadyExtend = function() {
		var calcref = this.$widgetDiv.attr('calcref');
		var initialData;
		if (calcref != '') {
			initialData = '<quote><calcref>' + calcref + '</calcref></quote>';
		}
		rf.loadFlow('widgets/quote-forms/new-quote-flow.js', $('.rhinoforms-quote-formContainer', this.$widgetDiv), initialData);
	}
	
}