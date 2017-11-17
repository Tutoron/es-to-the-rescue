const methods = {
	queryLatex: queryLatex
}

function queryLatex(expression) {
	return new Promise((resolve, reject) => {
		Meteor.call('queryLatex', expression, (err, res) => {
			if (err) {
				reject(err)
			} else {
				resolve(res)
			}
		})
	})
}

export default methods