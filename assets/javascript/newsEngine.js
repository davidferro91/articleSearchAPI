var userSearch = prompt("Search!");
var beginDate = prompt("Begin YYYYMMDD");
var endDate = prompt("End YYYYMMDD");
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
    'api-key': "016f93052c834258a4502b646a283b7b",
    'q': userSearch,
    'begin_date': beginDate,
    'end_date': endDate,
    'sort': "newest"
});

$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    console.log(result);
    for (var i = 0; i < result.response.docs.length; i++) {
        console.log(result.response.docs[i].snippet);
    }
                
}).fail(function(err) {
    throw err;
});