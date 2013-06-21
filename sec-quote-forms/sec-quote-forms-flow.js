{
	docBase: "/quote",
    defaultInitalData: "sec-initial-data.xml",
	formLists: {
		main: [
			{ id: "personal", url: "personal-details.html", actions: ["next"]},
            { id: "calculating", url: "calculating.html", 
				actions: [
					{
						name: "next",
						submission: {
							preTransform: "xslt/toNapier.xsl",
							url: "{{$napier-loadbalancer-url}}/REST/calcs",
							data: {
								source: "sec-new-business",
								quickSearch1: "xpath://customer/surname",
								calcType: "xpath://product/calc",
								calcData: "[dataDocument]"
							},
							method: "post",
							postTransform: "xslt/fromNapier.xsl",
							resultInsertPoint: "/quote/calc"
						}
					}
				]
			},
			{ id: "quote", url: "quote.html", actions: ["back:customer", "sorry:sorry", "buy:complete"]},
			{ id: "sorry", url: "sorry.html" , actions: [ "restart:customer" ]},
			{ id: "complete", url:"../quote-forms-common/complete.html"}
		]
	}
}
