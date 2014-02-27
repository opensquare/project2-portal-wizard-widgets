{
	docBase: "/quote",
	defaultInitalData: "buy-quote-initial-data.xml",
	libraries: ["js/utils.js"],
	formLists: {
		main: [
            {
				id : "loading",
				url : "loading.html",
				actions : [{
						name : "next",
						submission : {
							url : "{{$esb-url}}/ccp/retrieveQuote",
							data : {
                                accessToken: "xpath://accessToken",
								bundleID : "xpath://quoteRef"
							},
                            postTransform: "../sp-qquote/xslt/getQuoteResponse.xsl",
                            resultInsertPoint: "/quote/getQuoteResponse"
						}
					}
				]
			},
            { id: "quote", url:"../sp-qquote/quote.html", actions:[{name: "buy", target:"payment"}]},
			{ id: "payment", docBase: "/quote/payment", url:"payment.html", actions:["next"]},
            { id: "purchasing", url:"purchasing.html", actions: [{
                name:"next",
                submission: {
                    url: "{{$esb-url}}/ccp/purchaseQuote",
                    data: {
                        data: "[dataDocument]"
                    },
                    method: "post",
                    resultInsertPoint: "/quote/purchaseQuoteResponse"
                }
            }]},
			{ id: "complete", url:"complete.html"}
		]
	}
}
