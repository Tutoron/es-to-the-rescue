import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

var baseEndpoint = "http://127.0.0.1:8000/api/"
var queryLocalEndpoint = baseEndpoint + "queryLocal"
var queryCloudEndpoint = baseEndpoint + "queryCloud"

Meteor.startup(() => {
  // code to run on server at startup
})

Meteor.methods({
	queryLatex(expression) {
		var params = {expression: expression}
		var req = Meteor.wrapAsync(HTTP.get)
		var res = null
		res = req(queryLocalEndpoint, {params: params})
		if (res.data["status"] === "error") {
			console.log("fallback to cloud")
			res = req(queryCloudEndpoint, {params: params})
			res = res.data["hits"][0]["explaination"]
		} else {
			res = res.data
		}
		if (res === null) {
			return null
		} else {
			return res
		}
	}
})
