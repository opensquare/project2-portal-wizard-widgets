		$("div.field").first().addClass("on");

		$('form input, form select').focus(function() {
		  $("div.field").removeClass("on");
		   $(this).closest("div.field").addClass("on")
		});

		$('form input[type="radio"], form input[type="checkbox"]').change(function() {
		  $("div.field").removeClass("on");
		   $(this).closest("div.field").addClass("on")
		});

