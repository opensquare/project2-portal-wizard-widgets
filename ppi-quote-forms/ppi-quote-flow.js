{
	docBase: "/quote",
	defaultInitalData: "ppi-initial-data.xml",
	libraries: ["js/utils.js","js/custom-types.js"],
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
							postTransform: "",
							resultInsertPoint: "/"
						}
					}
				]
			},
			{ id: "customer", docBase: "/quote/customer", url: "customer.html", actions: ["next"]},
			{ id: "occupation", docBase: "/quote/occupation", url: "occupation.html", actions: ["back", "next"]},
			{ id: "cover", docBase: "/quote/cover", url: "cover.html", actions: [ "back" , "reload:customer"]}
		]
	}
}