import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

var baseEndpoint = "http://127.0.0.1:8000/api/"
var queryLatexEndpoint = baseEndpoint + "queryLatex"

Meteor.startup(() => {
  // code to run on server at startup
})

Meteor.methods({
	queryLatex(expression) {
		var params = {expression: expression}
		try {
			const res = HTTP.call('GET', queryLatexEndpoint, {params: params})
		} catch (e) {
			return null
		}
		return res
	}
})