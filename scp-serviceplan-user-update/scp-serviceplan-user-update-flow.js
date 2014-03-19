{
	docBase: "/request",
    defaultInitalData: "scp-serviceplan-canxrequest-initial-data.xml",
	formLists: {
		main: [
            { id: "request", url: "request.html", actions: ["next"]},
            { id: "loading", url: "../scp-forms-common/loading.html", actions: [
                {
                    name: "next",
                    submission : {
                        url : "{{$esb-url}}/ccp/cancellation/request",
                        data : {
                            planNumber: "xpath://planNumber",
                            effectiveTime: "xpath://cancellationTime"
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
