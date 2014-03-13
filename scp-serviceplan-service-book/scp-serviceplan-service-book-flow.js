{
	docBase: "/request",
    defaultInitalData: "scp-serviceplan-service-book-initial-data.xml",
	formLists: {
		main: [
            { id: "request", url: "request.html", actions: ["next"]},
            { id: "loading", url: "../scp-forms-common/loading.html", actions: [
                {
                    name: "next",
                    submission : {
                        url : "{{$esb-url}}/ccp/service/request",
                        data : {
                            planNumber: "xpath://planNumber",
                            garage1: "xpath://garage1",
                            preferredDate1: "xpath://preferredDate1",
                            garage2: "xpath://garage2",
                            preferredDate2: "xpath://preferredDate2",
                        },
                        resultInsertPoint: "/request"
                    }
                }
            ]},
            { id: "complete", url:"../scp-forms-common/complete.html"},
			{ id: "sorry", url: "../scp-forms-common/sorry.html" , actions: [ "restart:request" ]},
		]
	}
}
