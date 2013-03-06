function changeLanguage(element, language){
	if($(element).attr('class')==language){;
		$.getJSON('widgets/common-language-switcher/'+language+'.json', function(data) {
			$.each(data, function(key, val) {
				replaceString(document.body, key, val);
			});
		});

		// Improve - reach button text.
		//	$('#disabledNavigation input[type="button"]').val('Seuraava');
		//	$('#navigation input[type="submit"]').val('Seuraava');

		$(element).removeClass(language).addClass('english');
	} else {
		$.getJSON('widgets/common-language-switcher/'+language+'.json', function(data) {
			$.each(data, function(key, val) {
				replaceString(document.body, val, key);
			});
		});

		$(element).removeClass('english').addClass(language);
	}
}

function replaceString(node, replaceThis, replaceWith) {
    if (node.nodeType === 3) {
        node.nodeValue  = node.nodeValue.replace (replaceThis, replaceWith);
    }
    else if(node.nodeName == 'INPUT'){
    	if(node.type == 'button'){
    		node.value = node.value.replace (replaceThis, replaceWith);
   		 }
    }		    	
    else if (node.nodeType === 1) {
    	var numNodes = node.childNodes.length;
        for (var n = 0;  n < numNodes;  n++) {
            replaceString(node.childNodes[n], replaceThis, replaceWith);
        }
    }
}
