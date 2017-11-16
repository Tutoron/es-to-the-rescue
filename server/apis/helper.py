import json
from . import const
import requests

def gen_err(description):
	err = {}
	err["status"] = "error"
	err["description"] = description
	return err

def gen_success(description):
	res = {}
	res["status"] = "success"
	res["description"] = description
	return res

def gen_notation(req):
	data = req.GET
	if not data.get("id"):
		raise ValueError("required field id missing")
	if not data.get("context"):
		raise ValueError("required field context missing")
	if not data.get("expression"):
		raise ValueError("required field expression missing")
	if not data.get("explaination"):
		raise ValueError("required field explaination missing")
	notationID = data.get("id")
	notationExpression = json.loads(data.get("expression"))
	notationContext = json.loads(data.get("context"))
	notationExplainations = json.loads(data.get("explaination"))
	notation = {}
	notation["id"] = notationID
	notation["context"] = notationContext
	notation["explainations"] = notationExplainations
	notation["expression"] = notationExpression
	return notation

def check_elastic_server():
	res = requests.get(const.elastic_api)
	if res.status_code != 200:
		raise ValueError("elastic search server not available")

def index_elastic(notation):
	check_elastic_server()
	headers = {'content-type': 'application/json'}
	endpoint = const.elastic_api + "/notation/doc/" + notation["id"] + "?pretty"
	data = json.dumps(notation)
	res = requests.put(endpoint, headers=headers, data=data)
	if res.status_code == 201:
		return "successfully indexed notation"
	else:
		raise ValueError("elastic search server cannot index notation")

def gen_expression_query(req):
	data = req.GET
	if not data.get("expression"):
		raise ValueError("required field expression missing")
	query = {}
	conditions = {}
	conditions["expression"] = data.get("expression")
	query["fuzzy"] = conditions
	query_req = {}
	query_req["query"] = query
	return query_req

def query_elastic(query):
	check_elastic_server()
	headers = {'content-type': 'application/json'}
	endpoint = const.elastic_api + "/_search"
	data = json.dumps(query)
	res = requests.get(endpoint, headers=headers, data=data)
	if res.status_code == 200:
		return res.json()
	else:
		raise ValueError("elastic search server cannot process query request " + res.text)
