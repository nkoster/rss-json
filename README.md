A very simple RSS to JSON conversion API.

### Install

Quick.

~~~bash
mkdir rss-json-api
cd rss-json-api
npm init -y
npm install --save rss-json
node node_modules/rss-json/server.js
~~~

In a browser:
http://localhost:3000/json/?rss=http://feeds.bbci.co.uk/news/rss.xml

This will return an object:

~~~javascript
{
    title: String,
    items: Array [
        {
            title: String,
            content: String,
            href: String
        },
        ...
    ]
}
~~~
