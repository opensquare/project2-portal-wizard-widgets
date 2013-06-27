{
	docBase: "/quote",
	defaultInitalData: "ppi-initial-data.xml",
	libraries: ["../quote-forms-common/js/utils.js","js/custom-types.js"],
	formLists: {
		main: [
			{ id: "initialisation", url: "../quote-forms-common/initialisation.html",
				actions: [
					"next",
					{
						name: "calc",
						target: "calculating",
						submission: {
							url: "{{$appPath}}/calcRetrieval",
							data: {
								calcRef: "xpath://calcref"
							},
							method: "get",
							postTransform: "",
							resultInsertPoint: "/"
						}
					}
				]
			},
			{ id: "customer", docBase: "/quote/customer", url: "customer.html", actions: ["next"]},
			{ id: "occupation", docBase: "/quote/occupation", url: "occupation.html", actions: ["back", "next"]},
			{ id: "cover", docBase: "/quote/cover", url: "cover.html", actions: [ "back" , "next"]},
			{ id: "calculating", url: "calculating.html", 
				actions: [
					{
						name: "next",
						submission: {
							preTransform: "xslt/toNapier.xsl",
							url: "{{$napier-loadbalancer-url}}/REST/calcs",
							data: {
								source: "ppi-new-business",
								quickSearch1: "xpath://customer/surname",
								quickSearch2: "xpath://customer/address/postcode",
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
			{ id: "quote", url: "quote.html", actions: ["back:customer", "sorry:sorry", "single:buy.singlePayment"]},
			{ id: "sorry", url: "sorry.html" , actions: [ "restart:customer" ]}
		],
		buy: [
			{ id: "singlePayment", url:"../quote-forms-common/10-single-payment.html", actions:["next:payment", "back:main.quote"]},
			{ id: "payment", docBase: "/quote/payment", url:"../quote-forms-common/11-payment.html", actions:["next"]},
			{ id: "saving", url:"../quote-forms-common/12-saving.html", actions:[
					{
						name: "next",
						submission: {
							url: "{{$script-runner-url}}",
							data: {
								script: "NewBusiness/script/importNBCaseFromForms.py",
								data: "[dataDocument]"
							},
							method: "post",
							resultInsertPoint: "/quote/pact"
						}
					}
				]},
			{ id: "complete", url:"../quote-forms-common/complete.html"}
		]
	}
}
