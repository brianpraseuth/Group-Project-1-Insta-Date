$(document).ready(function(){
    $(".sidenav").sidenav();
    $(".modal").modal();
});

function callAjax()
{
    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php"
    $.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
$("#cocktail").text(response.meals[0].strMeal);
});

"mark added something here"

