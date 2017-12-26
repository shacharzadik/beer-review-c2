var beers = [];

//changing data
function addBeer(name, category, rating) {
    var beerobject = { "name": name, "Category": category, "rating": rating };
    beers.push(beerobject);

}

// view
function postBeer() {
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
    var rating = $(".rating").val();

    addBeer(name, category, rating);
    console.log(name, category, rating);
    renderBeers();
}

function renderBeers() {
    $("li").remove();
    for (var i = 0; i < beers.length; i++) {
        var beerName = beers[i].name;
        var beerCategory = beers[i].Category;
        var beerRating = beers[i].rating;
        $('ul').append("<li>" + "Beer name is " + beerName + " and category name is: " + beerCategory + " rating is: " + beerRating + "</li>");
    }

}

// sort function


var sortClicked = 0;
function sortBeers() {
    if (sortClicked === 0) {
        beers.sort(function (a, b) { return a.rating - b.rating });
        beers.reverse();
        renderBeers();
    } else {
        beers.reverse();
        renderBeers();
    }
    sortClicked++;
}


// invoke getUserInput on click
$('.post-beer').click(postBeer);

// when the user clicks the sort.beer btn invoke a function that sorts order.
$('.sort-beer').click(sortBeers);

