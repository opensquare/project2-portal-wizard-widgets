{
	docBase: "/quote",
	defaultInitalData: "new-quote-initial-data.xml",
	libraries: ["js/utils.js"],
	formLists: {
		main: [
            { id: "initialisation", url: "initialisation.html",
                actions: [
                    "next",
                    {
                        name: "calc",
                        target: "calculating",
                        submission: {
							url: "{{appPath}}/calcRetrieval",
                            data: {
								calcRef: "xpath://calcref"
							},
							method: "get",
							postTransform: "xslt/retrieveCalc.xsl",
							resultInsertPoint: "/"
						}
                    }
                ]},
	       	{ id: "vehicle", docBase: "/quote/vehicle", url: "1-car.html", actions: [ "next"] },
			{ id: "customer", docBase: "/quote/customer", url: "1-customer.html", actions: [ "back", "next" ] },
			{ id: "driver", docBase: "/quote/customer", url: "2-driver.html",
				actions: [
					"back",
					
					"addConviction:conviction.editConviction(index=next)",
					"editConviction:conviction.editConviction(index=?)",
					"deleteConviction:delete(xpath=convictions/conviction[index], index=?)",
					
					"addClaim:claim.editClaim(index=next)",
					"editClaim:claim.editClaim(index=?)",
					"deleteClaim:delete(xpath=claims/claim[index], index=?)",
					
					"next"
				]
			},
			{ id: "drivers", url: "5-drivers.html", 
				actions: [
					"back", 

					"addAdditionalDriver:additionalDriver.editAdditionalDriver(index=next)",
					"editAdditionalDriver:additionalDriver.editAdditionalDriver(index=?)",
					"deleteAdditionalDriver:delete(xpath=additionalDrivers/driver[index], index=?)",

					"next"
				]
			},
			{ id: "calculating", url: "8-calculating.html", 
				actions: [
					{
						name: "next",
						submission: {
							preTransform: "xslt/toNapier.xsl", 
							url: "{{napier-loadbalancer-url}}/REST/calcs",
							data: {
								source: "motor-new-business",
                                quickSearch1: "xpath://customer/surname",
                                quickSearch2: "xpath://customer/address/postcode",
                                quickSearch3: "xpath://customer/email",
                                quickSearch4: "xpath://vehicle/reg",
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
			{ id: "quote", url: "9-quote.html", actions: [ "back:vehicle", "finish", "sorry:sorry", "single:buy.singlePayment", "multiple:buy.multiplePayment" ] },
			{ id: "sorry", url: "sorry.html" , actions: [ "restart:vehicle" ]}
		],
		conviction: [
			{ id: "editConviction", docBase: "convictions/conviction[index]", url: "3-edit-conviction.html", actions: [ "cancel", "next" ] }
		],
		claim: [
			{ id: "editClaim", docBase: "claims/claim[index]", url: "4-edit-claim.html", actions: [ "cancel", "next" ] }
		],
		additionalDriver: [
			{ id: "editAdditionalDriver", docBase: "/quote/additionalDrivers/driver[index]", url: "6-edit-additional-driver.html", 
				actions: [
				    "cancel",
					"back",
					
					"addConviction:conviction.editConviction(index=next)",
					"editConviction:conviction.editConviction(index=?)",
					"deleteConviction:delete(xpath=convictions/conviction[index], index=?)",
					
					"addClaim:claim.editClaim(index=next)",
					"editClaim:claim.editClaim(index=?)",
					"deleteClaim:delete(xpath=claims/claim[index], index=?)",
					
					"next"
				]
			},
		],
		buy: [
			{ id: "singlePayment", url:"10-single-payment.html", actions:["next:payment", "back:main.quote"]},
			{ id: "multiplePayment", url:"10-multiple-payment.html", actions:["next:payment", "back:main.quote"]},
			{ id: "payment", docBase: "/quote/payment", url:"11-payment.html", actions:["next"]},
            { id: "saving", url:"12-saving.html", actions: [
					{
						name: "next",
						submission: {
							url: "{{script-runner-url}}",
							data: {
								script: "NewBusiness/script/createApplicationFromFormData.py",
								data: "[dataDocument]"
							},
							method: "post",
							resultInsertPoint: "/quote/pact"
						}
					}
				]},
			{ id: "complete", url:"complete.html"}
		]
	}
}
