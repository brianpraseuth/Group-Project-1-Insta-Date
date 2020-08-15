$(document).ready(function(){
    $(“.sidenav”).sidenav();
    $(“.modal”).modal();
});
var entreeQueryURL = “https://www.themealdb.com/api/json/v1/1/random.php”
$.ajax({
    url: entreeQueryURL,
    method: “GET”
}).then(function(response) {
    console.log(response);
    $(“#entreeName”).text(response.meals[0].strMeal);
    $(“#entreeImage”).attr(“src”, response.meals[0].strMealThumb);
    $(“#entreeRecipe”).text(response.meals[0].strInstructions);
    $(“#entreeLink”).attr(“href”, response.meals[0].strYoutube);
});
var cocktailQueryURL = “https://www.thecocktaildb.com/api/json/v1/1/random.php”
$.ajax({
    url: cocktailQueryURL,
    method: “GET”
}).then(function(response) {
    console.log(response);
    $(“#cocktailName”).text(response.drinks[0].strDrink);
    $(“#cocktailImage”).attr(“src”, response.drinks[0].strDrinkThumb);
    $(“#cocktailRecipe”).text(response.drinks[0].strInstructions);
    $(“#cocktailLink”).attr(“href”, response.drinks[0].strYoutube);
});
