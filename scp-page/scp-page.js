function urlParse(){
	var hashtag = window.location.hash;
	if(hashtag!=''){;
		// check for existing page
		if($('#content aside[hash="'+hashtag+'"],#content article[hash="'+hashtag+'"]').length == 2 && $('#content aside[hash="'+hashtag+'"]').attr('uid') == $('#content article[hash="'+hashtag+'"]').attr('uid')){
			// switch to current page
			// hide current tab/page
			$('#content aside,#content article').removeClass('on');
			// select existing tab/page
			$('#content aside[hash="'+hashtag+'"],#content article[hash="'+hashtag+'"]').addClass('on');
		} else {
			try{
				var splithash = hashtag.split('?')
				var type = splithash[0].replace('#','');
				pageHandler[type]();
			} catch(error) {
				if(error.name == 'Error'){alert('Unknown page operation');} else {alert(error.message);};
				//window.history.back();
				window.location.hash = '';
                throw error;
			};
		};
	};
}

function addPage(uid, type, subtype, title, subtitle, payload, to) {
	//deselect all tabs & pages
	$('#content aside').removeClass('on');
	$('#content article').removeClass('on');
	//check if page already exists
	var pagecheck = $('#content aside[uid='+uid+'][type='+type+']');
	if(pagecheck.attr('uid') == uid) {
		//switch to tab
		pagecheck.addClass('on');
		//switch to page
		$('#content article[uid='+uid+'][type='+type+'][subtype='+subtype+']').addClass('on');
	} else {
		//create a new tab
		var hash = window.location.hash;
		$('<aside uid="'+uid+'" class="on" type="'+type+'" subtype="'+subtype+'" hash="'+hash+'"> \
				<div class="title">'+title+'</div> \
				<div class="subtitle">'+subtitle+'</div> \
			</aside>').appendTo('#content-asides');
		// create a new page container
		$('<article class="on" uid="'+uid+'" type="'+type+'" subtype="'+subtype+'" hash="'+hash+'"> \
				<section class="content-header"> \
                    <a href="#" class="action" onclick="removePage(\''+uid+'\');">close</a> \
                    <h2 class=\'title\'>'+title+'</h2> \
                    <h3 class=\'subtitle\'>'+subtitle+'</h3> \
                </section> \
                <section class="content-helper"></section> \
                <section class="content-body"> \
                    <div class="widget loading" name="'+payload+'" displayheader="false"></div> \
                </section> \
            </article>').appendTo('#content-articles');
		//simportWidgets('article[uid="'+uid+'"]');
		pw.mount('article[uid="'+uid+'"] div')
		$('div.widget[name='+payload+']').removeClass('loading');
	};
}

function removePage(uid) {
	// copy details to recently closed section
	// TODO - de-dupe and limit recently closed list 
	var oldPage = $('#content aside[uid="'+uid+'"]');
	var type = oldPage.attr('type');
	var subtype = oldPage.attr('subtype');
	var hash = oldPage.attr('hash');
	var title = oldPage.children('.title').text(); // TODO - limit to 40 characters
	$('#content #new-closed').append(' \
		<a class="new-square" href="'+hash+'" type="'+type+'" subtype="'+subtype+'")>'+title+'</a>');
	// remove tab/page
	$('#content aside[uid=' + uid +'],#content article[uid=' + uid +']').remove();
	// de-activate all tabs/pages and trigger showing existing page  
	$('#content aside,#content article').removeClass('on');
	setTimeout(function(){window.location.hash=$('#content-newpage-aside aside').first().attr('hash');},50);  // pause needed when removing large content

}

function updatePage(uid, title, subtitle, subtype) {
	// TODO - limit title to 40, subtitle to 25, uuencode url
	if(title != ''){$('#content aside[uid="'+uid+'"] .title,#content article[uid="'+uid+'"] .title').text(title);window.document.title=title;};
	if(subtitle != ''){$('#content aside[uid="'+uid+'"] .subtitle,#content article[uid="'+uid+'"] .subtitle').text(subtitle);};
	if(subtype != ''){$('#content aside[uid=' + uid + '],#content article[uid="'+uid+'"]').attr('subtype',subtype);};
}

//---------------------------------------------------------------------------------------------------------------------
// Internal

function internalHandler() {
	var hash = window.location.hash;
	var splithash = hash.split('?')

	if(splithash[1].toLowerCase() == 'batch') {
		internalBatch(splithash[2]);
		return true;
	};

	// Throw error if no operator handler for type supplied
	throw new Error();
}
function internalBatch(terms) {
	addPage('internalBatch', 'internal', 'batch', 'Batch Jobs', '', 'scp-scheduler', '#content article.on');
}


//---------------------------------------------------------------------------------------------------------------------
// Quotes/Napier

function napierHandler() {
	var hash = window.location.hash;
	var splithash = hash.split('?')

	if(splithash[1].toLowerCase() == 'search') {
		napierSearch(splithash[2]);
		return true;
	};
	if(splithash[1].toLowerCase() == 'show') {
		napierShow(splithash[2]);
		return true;
	};
	if(splithash[1].toLowerCase() == 'quote') {
		quoteNew(splithash[2]);
		return true;
	};

	// Throw error if no operator handler for type supplied
	throw new Error();
}

function napierSearch(terms) {
	addPage('napiersearch', 'quotes', 'search', 'Quotes search', '', 'scp-napier-search', '#content article.on');

	if(typeof(terms)!='undefined'){
		// quick check if just calcrefs
		var calcref = parseInt(terms,10);

		if(isNaN(calcref)){
			// Do a general quicksearch
			napierQuickSearch(terms);
		} else {
			var calcref = terms.split(',');
  			$('.napier-search-results').html('<ul></ul>');

			for (var i=0;i<calcref.length;i++){ 
				// Iterate through numbers
				var calc = +calcref[i];
				if(isNaN(calc)){
					var calc = calcref[i].split('-');
					if(calc.length == 2){
						if (Math.max(calc[0],calc[1]) - Math.min(calc[0],calc[1]) > 50) {alert(calcref[i] + ' number range is too large')} else {;
							for (var x=Math.min(calc[0],calc[1]);x<=Math.max(calc[0],calc[1]);x++){
								napierSearchCalc(x);
							}
						}
					};
				} else {
					// Get a single calc
					napierSearchCalc(calc);
		  		};
			};
		};
	} else {
		napierSearchClear();
	};
}
function napierQuickSearch(terms){
	var endpoint = '/proxy/napier/';
	$('.napier-search-results').html('<ul><span class="loading"></span></ul>');
	$('.napier-search-results ul').load(endpoint+'search/quickSearch='+terms+' calc', function(){
		// Turn xml into LIs
		var data = $(this).html();
		data = data.replace(/<calc><calcref>/g,'<li calcref="');
		data = data.replace(/<\/calcref>/g,'">');
		data = data.replace(/<source>/g,'<span>');
		data = data.replace(/<\/calc>/g,'<\/span><a class="button" href="#quotes?show?" onclick="$(this).attr(\'href\',\'#quotes?show?\'+$(this).parent().attr(\'calcref\'))">show<\/a><\/li>');
		$(this).html(data);
		// Find some interesting data and display it
		$(this).find('quickSearch').each(function(){
			var qsTerms = $(this).text();
			qsTerms = qsTerms.split(',');
			$(this).before('<span>'+qsTerms[0]+'</span><span>'+qsTerms[1]+'</span><span>'+qsTerms[2]+'</span><span>'+qsTerms[3]+'</span>');
		});
	});
}
function napierSearchCalc(calc){
	var endpoint = '/proxy/napier/'
	$('.napier-search-results ul').append('<li calcref="'+calc+'"><span class="loading"></span></li>');
	$('li[calcref="'+calc+'"]').load(endpoint+calc, function(){
		// Find some interesting data and display it
		var xml = $.parseXML($(this).find('calcdata').text());
		$(this).append('<span>'+$(xml).find('title').first().text()+' '+$(xml).find('firstName').first().text()+' '+$(xml).find('surname').first().text()+'</span>');
		$(this).append('<span>'+$(xml).find('postcode').first().text()+'</span>');
		$(this).append('<span>'+$(xml).find('vehDesc').first().text()+'</span>');
		$(this).append('<span class="reg">'+$(xml).find('reg').first().text()+'</span>');
		var xml = $.parseXML($(this).find('calcResponse').text());
		$(this).append('<span class="currency">'+$(xml).find('annualPremium').first().text()+'</span>');

		$(this).append('<a class="button" href="#quotes?show?'+calc+'">show</a>');}
	);
}
function napierSearchClear() {
	$('.napier-search-results').html('<section class="placeholder"><h2>Enter some search terms above and press Go</h2></section>');
}
function napierShow(terms) {
	addPage('napiershow', 'quotes', 'show', 'Quote', 'Show', 'scp-napier-show', '#content article.on');
}
function quoteNew(terms) {
	addPage('napiershow', 'quotes', 'quote', 'Quote', 'New', 'scp-napier-show', '#content article.on');
}

//---------------------------------------------------------------------------------------------------------------------
// Policies/Pact

function pactHandler() {
	var hash = window.location.hash;
	var splithash = hash.split('?')

	if(splithash[1].toLowerCase() == 'search') {
		pactSearch(splithash[2]);
		return true;
	};
	if(splithash[1].toLowerCase() == 'show') {
		pactShow(splithash[2]);
		return true;
	};

	// Throw error if no operator handler for type supplied
	throw new Error();
}
function pactSearch(terms) {
	addPage('policysearch', 'policy', 'search', 'Policies', 'Search', 'scp-policies', '#content article.on');
    if(typeof(terms)!='undefined'){
		pw.notifyChannelOfEvent('pactSearch', {searchValue: terms});
	}
}
function pactShow(terms) {
	addPage('policyshow', 'policy', 'show', 'Policies', 'Show', 'scp_policy_show', '#content article.on');
}

function trace(s){}

function debug(s){}

//---------------------------------------------------------------------------------------------------------------------
// Finance

function accounts(terms) {
	addPage('accounts', 'finance', 'accounts', 'Finance', 'Accounts', 'scp-accounts', '#content article.on');
}


//---------------------------------------------------------------------------------------------------------------------

// Setup handlers for registered page types (TODO:should read from config somewhere)
var pageHandler = {
	internal: function(obj) {internalHandler();},
	quotes: function(obj) {napierHandler();},
	policies: function(obj) {pactHandler();},
	renewals: function(obj) {pactHandler();},
	finance: function(obj) {accounts();},
	//claims: function(obj) {reportsHandler();}
	documents: function(obj) {mmHandler();}
};

// Bind the hash tag URL handler
window.onhashchange = urlParse;

