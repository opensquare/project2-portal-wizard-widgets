{
	docBase: "/quote",
	defaultInitalData: "new-quote-initial-data.xml",
	libraries: ["js/utils.js"],
	formLists: {
		main: [
            { id: "user-check", docBase: "/quote/customer", url: "user-check.html", actions: ["next"]},
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
            { id: "confirm-service-plan", url: "confirm-service-plan.html", docBase: "/quote/cover", actions: ["back", "next:calculating3", "search:searching3"]},
            {
				id : "searching3",
				url : "searching.html",
				actions : [{
						name : "next",
                        target: "confirm-service-plan",
						submission : {
							url : "{{$esb-url}}/ccp/setServicePlanProperty",
							data : {
                                vehicleKey: "xpath://vehicleLookup/vehicle/key",
								propertyName : "xpath://getServicePlanResponse//*[name()='CurrentQuestion']/*[name()='Name']",
                                propertyValue : "xpath://cover/queryAnswer",
                                setBy: "DriverOrOwner"
							},
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
            { id: "registerAndSave", docBase: "/quote/customer", url: "registration-quick.html", actions: ["back", "next", {name: "alreadyRegistered", type: "cancel", target: "alreadyRegistered1"}]},
            { id: "save", url: "saving.html", 
				actions: [
					{
						name: "next",
						submission: {
							url: "{{$esb-url}}/ccp/quickRegisterAndSave",
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
            { id: "alreadyRegistered1", docBase: "/quote/customer", url:"already-registered.html", actions:["back:registerAndSave", {
                name: "next",
                target: "saveComplete",
                submission: {
                    url: "{{$esb-url}}/ccp/loginAndSave",
                    data: {
                        data: "[dataDocument]"
                    },
                    method: "post",
                    resultInsertPoint: "/quote/saveQuoteResponse"
                }
            }]},
            { id: "registerAndBuy", docBase: "/quote/customer", url: "registration.html", actions: ["back", "next", {name: "alreadyRegistered", type: "cancel", target: "alreadyRegistered2"}]},
            { id: "saveAndBuy", url: "saving.html", 
				actions: [
					{
						name: "next",
                        target: "payment",
						submission: {
							url: "{{$esb-url}}/ccp/registerAndSave",
							data: {
                                data: "[dataDocument]"
							},
							method: "post",
							resultInsertPoint: "/quote/saveQuoteResponse"
						}
					}
				]
			},
            { id: "alreadyRegistered2", docBase: "/quote/customer", url:"already-registered.html", actions:["back:registerAndBuy", {
                name: "next",
                target: "payment",
                submission: {
                    url: "{{$esb-url}}/ccp/loginAndSave",
                    data: {
                        data: "[dataDocument]"
                    },
                    method: "post",
                    resultInsertPoint: "/quote/saveQuoteResponse"
                }
            }]},
            { id: "payment", url:"loading.html", actions:[
                {
						name: "next",
						dataDocTransform: "xslt/purchase.xsl"
                }
            ]},
            { id: "payment-details", docBase: "/quote/payment", url:"../sp-buy-quote/payment.html", actions:["next"]},
            { id: "purchasing", url:"../sp-buy-quote/purchasing.html", actions: [{
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
			{ id: "buyComplete", url:"../sp-buy-quote/complete.html"},
            { id: "redirect", url: "redirect.html"},
			{ id: "sorry", url: "sorry.html" , actions: [ "restart:vehicle" ]}
		]
	}
}
