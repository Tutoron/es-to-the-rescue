# ES to the rescue

## Django server API

replace `{endpoint}` with your local port

* `GET http://{endpoint}/api/queryLatex` takes Latex expression as "expression" and optional array of "context"
* `GET http://{endpoint}/api/indexNotation` takes Latex expressions as "expression", the unique name for the notation as "id", related context list as "context", explainations as "explaination"

## Prerequisites

* Recent version of java environment [JDK download](http://www.oracle.com/technetwork/java/javase/downloads/jdk6-jsp-136632.html)
* [Python3](https://www.python.org/)
* elastic search is excluded from the repo, but it is required. [Download elastic search](https://www.elastic.co/)
* Meteor [Download](https://www.meteor.com/)

## Tech stack

* [Django](https://www.djangoproject.com/)
* [Meteor](https://www.meteor.com/)
* [elastic search](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [SASS](http://sass-lang.com/)

## Test locally

### Start elastic search server

`./bin/elasticsearch`

### Start django server

`pip3 install -r requirements.txt` to install python dependencies

`python3 server/manage.py runserver` to start server

Do `python3 server/manage.py migrate` if necessary.

### Start demo app

`meteor npm install` to install npm modules

`meteor` to start app
