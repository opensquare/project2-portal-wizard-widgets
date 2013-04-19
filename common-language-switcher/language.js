function changeLanguage(element){

	var language = $(element).attr('class')
	var nextLanguage = (language == 'finnish') ? 'english' : 'finnish';

	$.getJSON('widgets/common-language-switcher/finnish.json', function(data) {
			$.each(data, function(key, val) {
				if(language == 'finnish'){replaceString(document.body, key, val);}
				else {replaceString(document.body, val, key);}	
			});
		});
  
    document.getElementById('currentLocale').innerHTML = '▼ ' + $(element).attr('local')
}

function replaceString(node, replaceThis, replaceWith) {
	//Target text nodes
    if (node.nodeType === 3) {
        node.nodeValue  = node.nodeValue.replace (replaceThis, replaceWith);
    }
    //Target input nodes
    else if(node.nodeName == 'INPUT'){
    	//Text held in 'value' attribute
    	if(node.type == 'button' | node.type =='submit'){
    		node.value = node.value.replace (replaceThis, replaceWith);
   		 } 
   		 //Text held in 'placeholder' attribute
   		 else if (node.placeholder != "") {
   		 	node.placeholder = node.placeholder.replace (replaceThis, replaceWith);
   		 }
    }	
  	    	
    else if (node.nodeType === 1) {
    	var numNodes = node.childNodes.length;
        for (var n = 0;  n < numNodes;  n++) {
            replaceString(node.childNodes[n], replaceThis, replaceWith);
        }
    }
}

function newLanguage () {

  languageStrings = [];
  parseHTML(document.body)
  languageJSON = languageStrings.join(": 'Insert Translation', <br/>");

  languageWindow=window.open('','_blank','width=550,height=650'+',menubar=0'+',toolbar=1'+',status=0'+',scrollbars=1'+',resizable=1')
  languageWindow.document.writeln(
                                '<html><head><title>Language Switcher</title></head>'
                                 +'<body bgcolor=white onLoad="self.focus()">'
                                 +'<h2> Please insert your local translations in the space indicated </h2><br/>'
                                 +'{<br/>'
                                 + languageJSON
                                 + '<br/>}'
                                 +'</body></html>'
                               )
}


function parseHTML(node) {

  if (node.nodeType === 3) {
    if(node.nodeValue.replace(/\s/g,"") != "")
       languageStrings.push("'" + node.nodeValue + "'");
  }

  else if(node.nodeName == 'INPUT'){
    if(node.type == 'button' | node.type =='submit'){
     languageStrings.push(node.nodeValue);
     } 
     else if (node.placeholder != "") {
      languageStrings.push(node.placeholder);
     }
  } 

  else if (node.nodeType === 1) {
        var numNodes = node.childNodes.length;
          for (var n = 0;  n < numNodes;  n++) {
              parseHTML(node.childNodes[n]);
          }
  }

}
