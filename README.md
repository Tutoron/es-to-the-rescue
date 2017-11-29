# ES to the rescue

## Big picture

### High level structure

<img alt="High level structure" src="https://raw.githubusercontent.com/tianhaoz95/pics/master/Blank%20Diagram%20-%20Page%201%20(1).png"/>

### Demo app structure

<img alt="Demo app structure" src="https://raw.githubusercontent.com/tianhaoz95/pics/master/Blank%20Diagram%20-%20Page%201%20(3).png"/>

## Django server API

replace `{endpoint}` with your local port

* `GET http://{endpoint}/api/queryLatex` takes Latex expression as "expression" and optional array of "context"
* `GET http://{endpoint}/api/indexNotation` takes Latex expressions as "expression", the unique name for the notation as "id", related context list as "context", explainations as "explaination"
* `GET http://{endpoint}/api/updateNotation` (under development)
* `GET http://{endpoint}/api/expandNotation` (under development)
* `GET http://{endpoint}/api/stripNotation` (under development)

## Prerequisites

* Recent version of java environment [JDK download](http://www.oracle.com/technetwork/java/javase/downloads/jdk6-jsp-136632.html)
* [Python3](https://www.python.org/)
* elastic search is excluded from the repo, but it is required. [Download elastic search](https://www.elastic.co/)
* Meteor [Download](https://www.meteor.com/)
* Node.js [Download](https://nodejs.org/en/)

## Tech stack

* [Django](https://www.djangoproject.com/)
* [Meteor](https://www.meteor.com/)
* [elastic search](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [SASS](http://sass-lang.com/)

## Test locally

### Start elastic search server

[Download](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html) and unzip the Elasticsearch official distribution.

Run `bin/elasticsearch` on unix, or `bin\elasticsearch.bat` on windows.

Run `curl -X GET http://localhost:9200/`

You can also use [dejavu](https://github.com/appbaseio/dejavu) as GUI to elasticsearch

### Start django server

`pip3 install -r requirements.txt` to install python dependencies

`python3 server/manage.py runserver` to start server

Do `python3 server/manage.py migrate` if necessary.

### Start demo app

`meteor npm install` to install npm modules

`meteor` to start app
