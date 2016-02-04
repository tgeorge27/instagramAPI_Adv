// YOUR CODE GOES HERE
var clientID = "36aa5c6b3029e11d9b4daeea8da6276e";

$(document).ready(function() {

    $("#search-btn").click(function() {
        var userInput = $("#search-query").val();
        searchFlickr(clientID, userInput, 10, function(photos) {
                 $('#search-results').empty();
                  for (var i = 0; i < photos.photo.length; i++) {
                $('#search-results').append('<img src=' + photos.photo[i].url_m + ' >');
            };
        });
    });
    $("#reset-btn").click(function() {
        $('#search-results').empty();
    });
});
