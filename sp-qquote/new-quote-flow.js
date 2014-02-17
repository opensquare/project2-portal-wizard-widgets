{
	docBase: "/quote",
	defaultInitalData: "new-quote-initial-data.xml",
	libraries: ["js/utils.js"],
	formLists: {
		main: [
	       	{ id: "vehicle", docBase: "/quote/vehicle", url: "vehicle.html", actions: ["next"] },
            {
				id : "searching",
				url : "searching.html",
				actions : [{
						name : "next",
						submission : {
							url : "{{$esb-url}}/ccp/vehicleLookup",
							data : {
								vrm : "xpath://vehicle/reg"
							},
                            postTransform: "xslt/vehicleLookupResponse.xsl",
                            resultInsertPoint: "/quote/vehicleLookup"
						}
					}
				]
			},
            { id: "confirm-vehicle", docBase: "/quote/vehicle", url: "confirm-vehicle.html", actions: ["back:vehicle", "next:cover", "search:searching2"]},
            {
				id : "searching2",
				url : "searching.html",
				actions : [{
						name : "next",
                        target: "confirm-vehicle",
						submission : {
							url : "{{$esb-url}}/ccp/setVehicleProperty",
							data : {
                                vehicleKey: "xpath://vehicleLookup/vehicle/key",
								propertyName : "xpath://vehicleLookup/vehicle/question/name",
                                propertyValue : "xpath://vehicle/queryAnswer",
                                setBy: "DriverOrOwner"
							},
                            postTransform: "xslt/vehicleLookupResponse.xsl",
                            resultInsertPoint: "/quote/vehicleLookup"
						}
					}
				]
			},
            { id: "cover", url: "cover.html", docBase: "/quote/cover", actions: ["back", "next"]},
            { id: "calculating1", url: "calculating.html", 
				actions: [
					{
						name: "next",
						submission: {
							url: "{{$esb-url}}/ccp/setVehicleUserParameters",
							data: {
                                vehicleKey: "xpath://vehicleLookup/vehicle/key",
                                annualMileage: "xpath://cover/annualMileage",
                                currentMileage: "xpath://cover/currentMileage",
                                startDate: "xpath://cover/startDateISO",
                                startMileage: "xpath://cover/startMileage",
							},
							method: "post",
							resultInsertPoint: "/quote/setVehicleUserParametersResponse"
						}
					}
				]
			},
            { id: "calculating2", url: "calculating.html", 
				actions: [
					{
						name: "next",
						submission: {
							url: "{{$esb-url}}/ccp/getServicePlan",
							data: {
                                vehicleKey: "xpath://vehicleLookup/vehicle/key",
							},
							method: "post",
							resultInsertPoint: "/quote/getServicePlanResponse"
						}
					}
				]
			},
            { id: "calculating3", url: "calculating.html", 
				actions: [
					{
						name: "next",
						submission: {
							url: "{{$esb-url}}/ccp/getQuote",
							data: {
                                vehicleKey: "xpath://vehicleLookup/vehicle/key",
							},
							method: "post",
                            postTransform: "xslt/getQuoteResponse.xsl",
							resultInsertPoint: "/quote/getQuoteResponse"
						}
					}
				]
			},
			{ id: "quote", url: "quote.html", actions: [ "back:cover", "sorry:sorry", "save:registerAndSave", "buy:registerAndBuy"] },
            { id: "registerAndSave", docBase: "/quote/customer", url: "registration.html", actions: ["back", "next"]},
            { id: "save", url: "saving.html", 
				actions: [
					{
						name: "next",
						submission: {
							url: "{{$esb-url}}/ccp/saveQuote",
							data: {
                                data: "[dataDocument]"
							},
							method: "post",
							resultInsertPoint: "/quote/saveQuoteResponse"
						}
					}
				]
			},
            { id: "saveComplete", url:"complete.html"},
            { id: "registerAndBuy", docBase: "/quote/customer", url: "registration.html", actions: ["back", "next"]},
            { id: "saveAndBuy", url: "saving.html", 
				actions: [
					{
						name: "next",
						submission: {
							url: "{{$esb-url}}/ccp/saveQuote",
							data: {
                                data: "[dataDocument]"
							},
							method: "post",
							resultInsertPoint: "/quote/saveQuoteResponse"
						}
					}
				]
			},
            { id: "payment", docBase: "/quote/payment", url:"../sp-buy-quote/payment.html", actions:["next"]},
            { id: "purchasing", url:"../sp-buy-quote/purchasing.html", actions: [{
                name:"next",
                submission: {
                    url: "{{$esb-url}}/ccp/purchaseQuote",
                    data: {
                        vehicleKey: "xpath//vehicleKey",
                        quoteRef: "xpath//selectedQuoteRef"
                    },
                    resultInsertPoint: "/quote/purchaseQuoteResponse"
                }
            }]},
			{ id: "buyComplete", url:"../sp-buy-quote/complete.html"},
            { id: "redirect", url: "redirect.html"},
			{ id: "sorry", url: "sorry.html" , actions: [ "restart:vehicle" ]}
		]
	}
}
