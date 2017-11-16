from django.http import JsonResponse, HttpResponse
from django.template import loader
from . import helper
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def indexNotation(request):
	try:
		notation = helper.gen_notation(request)
	except ValueError as err:
		err = helper.gen_err(err.args[0])
		return JsonResponse(err)
	try:
		msg = helper.index_elastic(notation)
	except ValueError as err:
		err = helper.gen_err(err.args[0])
		return JsonResponse(err)
	except:
		err = helper.gen_err("unknown error")
		return JsonResponse(err)
	res = helper.gen_success(msg)
	return JsonResponse(res)

@csrf_exempt
def queryLatex(request):
	try:
		query = helper.gen_expression_query(request)
	except ValueError as err:
		err = helper.gen_err(err.args[0])
		return JsonResponse(err)
	print(query)
	try:
		msg = helper.query_elastic(query)
	except ValueError as err:
		err = helper.gen_err(err.args[0])
		return JsonResponse(err)
	except:
		err = helper.gen_err("unknown error")
		return JsonResponse(err)
	res = helper.gen_success(msg)
	return JsonResponse(res)