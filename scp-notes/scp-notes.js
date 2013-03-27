var totalNotes = 7 /* Change to REST/count end point */
var globOffset = 4;
var globLimit = 1;

function Widget_scp_notes() {

	this.onReadyExtend = function() {
		loadNotes(0, globOffset);
	}
}

function slide(direction) {

    var noteWidth = $('#notes_ul li').outerWidth() + 10; 

    if(direction == 'left'){ 
    	var ulOffset = parseInt($('#notes_ul').css('left')) + noteWidth;
	  	if(globOffset < totalNotes){
    	 	loadNotes(globOffset,1)
    		globOffset ++   
    		$('#notes_ul:not(:animated)').animate({'left' : ulOffset},500);
    	}else{$('#notes_ul:not(:animated)').animate({'left' : ulOffset},500);    	}        
    }else{  
        var ulOffset = parseInt($('#notes_ul').css('left')) - noteWidth;  
        $('#notes_ul:not(:animated)').animate({'left' : ulOffset},500);
    } 

}

function loadNotes(offset, limit){

	$.ajax('/proxy/scribe/notes?offset=' + offset + '&limit=' + limit).done(function(notesArray) {
		for (var i = 0; i < notesArray.length; i++) {
			var $noteHtml = $('<li>' + notesArray[i].message + '<br/>' + notesArray[i].id + '</li>');
			$('#notes_ul, this.$widgetDiv').prepend($noteHtml);
		}
	});

}

