# ES to the rescue

## API

replace `{endpoint}` with your local port

* `GET http://{endpoint}/api/queryLatex` takes Latex expression as "expression" and optional array of "context"
* `GET http://{endpoint}/api/indexNotation` takes Latex expressions as "expression", the unique name for the notation as "id", related context list as "context", explainations as "explaination"

## Prerequisites

* Recent version of java environment
* Python3
* elastic search is excluded from the repo, but it is required.

## Test Locally

`pip3 install -r requirements.txt`

start elasticsearch server

`python3 server/manage.py runserver`

Do `python3 server/manage.py migrate` if necessary.
