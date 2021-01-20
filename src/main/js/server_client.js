export function getTableObj() {
	return Promise.resolve({
		actions: [{
			case: "<=1",
			action: "price = 100000"
		},
		{
			case: "1-3",
			action: "price = 200000"
		},
		{
			case: ">3",
			action: "price = 300000"
		}
		],
		field: "# bathrooms"
	})
}