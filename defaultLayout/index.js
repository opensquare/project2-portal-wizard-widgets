function Widget_defaultLayout() {
	
	this.onReadyExtend = function() {
		determinePositions();
			$(window).on('resize', determinePositions());

			// Set up top menu
			$('nav a').click(function(){
				$('nav').removeClass('static');
				$('nav a').removeClass('on');
				$(this).addClass('on');
				var currentPos = $(window).scrollTop();
				var target = $(this).attr('href');
				var pos = $(target).offset();
				var delay = Math.abs(pos.top-currentPos);
				$('body,html').animate({scrollTop:pos.top},delay,function(){$('nav').addClass('static');});
				return false;
			});

			// Highlight appropriate menu item
			setInterval(function(){
				var clickThis = '#one';
				var tolerance = 50;
				var currentPos = $(window).scrollTop()+tolerance;
				if (currentPos >= onePos-1) {clickThis = '#one'};
				if (currentPos >= twoPos-1) {clickThis = '#two'};
				if (currentPos >= threePos-1) {clickThis = '#three'};
				if (currentPos >= fourPos-1) {clickThis = '#four'};
				if (currentPos >= fivePos-1) {clickThis = '#five'};
				$('nav.static a').removeClass('on');
				$('nav.static a[href="'+clickThis+'"]').addClass('on');
			},1000);
	}

	function determinePositions(){
		onePos = $('#one').offset().top;
		twoPos = $('#two').offset().top;
		threePos = $('#three').offset().top;
		fourPos = $('#four').offset().top;
		fivePos = $('#five').offset().top;
		snapZone = 20;
	};
}