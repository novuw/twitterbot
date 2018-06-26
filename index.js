var twitter = require('twitter');
var config = require('./config');
var Twit = new twitter(config);
var params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'en'
};

Twit.get('/search/tweets', params, function(err, data, response){
    if (!err){
        for (var i = 0; i < data.statuses.length; i++){
            console.log(data.statuses[i].user.name + '\n' + data.statuses[i].text);
        }
    } else{
        console.log(err);
    }
});
