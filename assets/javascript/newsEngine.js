$("#searchBtn").on("click", function() {
    event.preventDefault();
    var userSearch = $("#searchTerm").val().trim();
    var beginDate = $("#startYear").val().trim();;
    var endDate = $("#endYear").val().trim();
    var numArt = 10;


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
    for (var i = 0; i < numArt; i++) {
    var articleDiv = $("<div>");
    var artHead = $("<h2>");
    artHead.append(result.response.docs[i].headline.main);
    articleDiv.append(artHead);
    var artSnip = $("<p>");
    artSnip.append(result.response.docs[i].snippet);
    articleDiv.append(artSnip);
    var artURL = $("<a>");
    artURL.attr("href", result.response.docs[i].web_url);
    artURL.text(result.response.docs[i].web_url);
    articleDiv.append(artURL);
    $("#articleHolder").append(articleDiv);
    }
                
}).fail(function(err) {
    throw err;
});
});

