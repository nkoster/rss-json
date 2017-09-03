'use strict';

const
    Feed = require('get-rss-atom'),
    express = require('express'),
    app = express(),
    port = 3000;

app.set('x-powered-by', false);

app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    next()
});

app.get('/json', function (req, res) {
    if (req.query.rss) {

        Feed.getRssAtom(req.query.rss, function (rss) {
            res.send(rss)
        })
    }
});

app.listen(port);
