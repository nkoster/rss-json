A very simple RSS to JSON convertion API.

### Install

~~~bash
git clone git@github.com:nkoster/feed-to-json
cd feed-to-json
npm install
node server.js
~~~

In a browser: http://localhost:3000/json/?rss=http://feeds.bbci.co.uk/news/rss.xml

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
