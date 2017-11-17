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
		var req = Meteor.wrapAsync(HTTP.get)
		var res = req(queryLatexEndpoint, {params: params})
		// TODO: check if res status is success, throw exception if failed
		return res.data
	},
	indexNotation(id, expression, context, explaination) {
		// TODO: send notation to server API and check if success
		return null
	}
})