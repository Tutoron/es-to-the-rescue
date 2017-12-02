import getDummy from './dummyList'

const methods = {
	queryLatex: queryLatex,
	queryDummy: queryDummy
}

function queryDummy(expression) {
	return new Promise(function(resolve, reject) {
		setTimeout(function () {
			resolve(getDummy())
		}, 1000);
	});
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
