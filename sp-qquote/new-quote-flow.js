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
            { id: "confirm-vehicle", url: "confirm-vehicle.html", actions: ["back", "next"]},
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
                                startDate: "xpath://cover/startDate",
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
			{ id: "quote", url: "quote.html", actions: [ "back:cover", "sorry:sorry", "save:registration"] },
            { id: "registration", docBase: "/quote/customer", url: "registration.html", actions: ["back", "next"]},
            { id: "saving", url: "saving.html", 
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
            { id: "redirect", url: "redirect.html"},
			{ id: "sorry", url: "sorry.html" , actions: [ "restart:vehicle" ]}
		]
	}
}
