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
							url: "{{appPath}}/calcRetrieval?calcRef=3464",
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
								source: "rhinoforms",
								calcType: "/Products/Motor/Lookups,/Products/Motor/Precalculation,/Products/Motor/Risk Premium,/Products/Motor/Excess,/Products/Motor/Underwriting,/Products/Motor/Gross Premium",
								calcData: "[dataDocument]"
							},
							method: "post",
							postTransform: "xslt/fromNapier.xsl",
							resultInsertPoint: "/quote/calc"
						}
					}
				]
			},
			{ id: "quote", url: "9-quote.html", actions: [ "back:vehicle", "finish", "sorry:sorry" ] },
			{ id: "sorry", url: "sorry.html"}
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
		]
	}
}
