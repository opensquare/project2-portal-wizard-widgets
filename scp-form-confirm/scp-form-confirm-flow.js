{
	docBase: "/root",
	formLists: {
		main: [
			{ id: "confirm", url: "confirm.html", 
                actions: [{
						name: "next",
						submission: {
							url: "proxy/script-runner",
							data: {
                                script: "shared/script/invokeAction.py",
								actionUid: "xpath://actionUid",
							},
							method: "post",
						}
					}]
            },
			{ id: "complete", url:"complete.html"}
		]
	}
}
