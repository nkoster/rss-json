'use strict';

const
    Feed = require('rss-to-json'),
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
        Feed.load(req.query.rss, function (err, rss) {
            res.send(rss);
        })
    } else {
        res.send('Please use ?rss= format')
    }
});

app.listen(port);
