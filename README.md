# ES to the rescue

## Big picture

### High level structure

<img alt="High level structure" src="https://raw.githubusercontent.com/tianhaoz95/pics/master/Blank%20Diagram%20-%20Page%201%20(1).png"/>

### Demo app structure

<img alt="Demo app structure" src="https://raw.githubusercontent.com/tianhaoz95/pics/master/Blank%20Diagram%20-%20Page%201%20(3).png"/>

## Django server API

replace `{endpoint}` with your local port

* `GET http://{endpoint}/api/queryLocal` takes Latex expression as "expression" and optional array of "context", this api method will queries the local elasticsearch, it gives more flexibility in arranging the indexing, but take more time to develop.
* `GET http://{endpoint}/api/queryCloud` takes Latex expression as "expression" and optional array of "context", this api method queries the cloud hosted elasticsearch, which is less flexible but good for demo and rapid prototyping.
* `GET http://{endpoint}/api/indexNotation` takes Latex expressions as "expression", the unique name for the notation as "id", related context list as "context", explainations as "explaination"
* `GET http://{endpoint}/api/updateNotation` (under development)
* `GET http://{endpoint}/api/expandNotation` (under development)
* `GET http://{endpoint}/api/stripNotation` (under development)

## Indexing rule

```
{
  id: "unique name of the notation",
  context: ["array", "of", "related", "context"],
  expression: ["array", "of", "possible", "expressions"],
  explanation: [
    {
      type: "type of the explaination",
      payload: { ... }
    },
    ...
  ]
}
```

Current planned types of explaination:

* Definition

```
{
  type: "definition",
  payload: {
    symbolName: 'unique name of the notation',
    definition: 'definition of the notation',
    inText: true, //whether its definition is author defined in the paper
    position: [] //the position of in-text definition
  }
}
```

* Visualization

```
{
  type: "visualization",
  payload: {
    symbolName: 'unique name of the notation',
    equation: 'equation used to calculate and plot the graph',
    variable: [
      {id: "x", rule: "some rule"}, //if no rule required, then just put true. Assume first element is the x-variable used to plot the function
      {id: "y", rule:"true"}, //other variables in the equation
    ]
  }
}
```

* Partition

```
{
  type: "partition",
  payload: {
    ...
  }
}
```

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

### Start elastic search server (Optional, will fallback to Cloud option)

[Download](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html) and unzip the Elasticsearch official distribution.

Run `bin/elasticsearch` on unix, or `bin/elasticsearch.bat` on windows.

Run `curl -X GET http://localhost:9200/`

You can also use [dejavu](https://github.com/appbaseio/dejavu) as GUI to elasticsearch

### Start django server

`pip3 install -r requirements.txt` to install python dependencies

`python3 server/manage.py runserver` to start server

Do `python3 server/manage.py migrate` if necessary.

### Start demo app

`meteor npm install` to install npm modules

`meteor` to start app
