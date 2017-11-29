const methods = {
	queryLatex: queryLatex,
	dummyQuery: dummyQuery
}

const dummy = [
{
	type: 'definition',
	payload: null
},
{
	type: 'visualization',
	payload: null
},
{
	type: 'partition',
	payload: null
},
{
	type: 'visualization',
	payload: null
}]

function dummyQuery(expression) {
	return new Promise(function(resolve, reject) {
		setTimeout(function () {
			resolve(dummy)
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
