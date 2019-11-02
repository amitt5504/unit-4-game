var wins = 0;
var losses = 0;
var gameOver = false;

$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 100) + 19;
    var userScore = 0;

    //Stone array inilialized to include the links to each of the stone images
    var stoneArray = ["https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/17/Soul_Stone_VFX.png/revision/latest?cb=20190427012633",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Power_Stone_VFX.png/revision/latest?cb=20190427012543",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f0/Time_Stone_VFX.png/revision/latest?cb=20190427012724",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e4/Mind_Stone_VFX.png/revision/latest?cb=20190427012504"
    ];

    for (var i = 0; i < stoneArray.length - 1; i++) {

        // For each iteration, we will create an imageStone
        var imageStone = $("<img>");

        // First each stone will be given the class ".stones".
        // This will allow the CSS to take effect.
        imageStone.addClass("stones");

        // Each imageStone will be given a src link to the stone
        imageStone.attr("src", stoneArray[i]);

        // Each imageStone will be given a data attribute called data-stoneValue.
        // This data attribute will be set equal to the array value.
        imageStone.attr("data-stoneValue", Math.floor(Math.random() * 12) + 1);
        imageStone.attr("height", "125px");
        imageStone.attr("width", "125px");


        // Lastly, each stone image (with all it classes and attributes) will get added to the page.
        $("#infinity-stones").append(imageStone);
    }
    //This section is for creating a new stone that will be added to a different div
    var mindStone = $("<img>");
    mindStone.addClass("stone");
    mindStone.attr("src", stoneArray[5]);
    mindStone.attr("data-stoneValue", Math.floor(Math.random() * 12) + 1);
    mindStone.attr("height", "150px");
    mindStone.attr("width", "150px");
    $("#mind-stone").append(mindStone);


    updateStats();
    //The onclick function for the stones. There are two classes since the stones are inside 2 divs at 2 different sizes
    $(".stone, .stones").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var stoneValue = ($(this).attr("data-stoneValue"));
        stoneValue = parseInt(stoneValue);
        // We then add the stoneValue to the user's "counter" which is a global variable.
        // Every click, from every stone adds to the global counter.
        userScore += stoneValue;

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        if (userScore === targetNumber) {
            wins++;
            displayWin();
            newGame();
        } else if (userScore >= targetNumber) {
            losses++;
            displayLoss();
            newGame();
        }
        updateStats();
    });
    //this functions updates the HTML after each stone clicl
    function updateStats() {
        $("#number-to-guess").text(targetNumber);
        $("#user-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    };
    //to create a new game resetting the score and setting a new target number
    function newGame() {
        userScore = 0;
        targetNumber = Math.floor(Math.random() * 100) + 19;
        updateStats();

    }
    //Displays that the user has won and shows a gif
    function displayWin() {
        $("#result-image").attr("src", "https://media.giphy.com/media/l3OAyWrV5CIjyiedmF/giphy.gif");
        $("#result-image").attr("height", "250px");
        $('#result').text("You Win!!");


    }

    //Displays that the user has lost and shows a gif
    function displayLoss() {
        $("#result-image").attr("src", "https://media.giphy.com/media/ie76dJeem4xBDcf83e/giphy.gif");
        $("#result-image").attr("height", "250px");
        $('#result').text("You Lose!!");

    }
});