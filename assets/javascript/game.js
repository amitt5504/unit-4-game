var wins = 0;
var losses = 0;

$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 100) + 19;
    var userScore = 0;

    
    var stoneArray = ["https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f0/Time_Stone_VFX.png/revision/latest?cb=20190427012724",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e4/Mind_Stone_VFX.png/revision/latest?cb=20190427012504",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Power_Stone_VFX.png/revision/latest?cb=20190427012543",
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/17/Soul_Stone_VFX.png/revision/latest?cb=20190427012633"
    ];

    for (var i = 0; i < stoneArray.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageStone = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageStone.addClass("infinity-stone");

        // Each imageCrystal will be given a src link to the crystal image
        imageStone.attr("src", stoneArray[i]);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageStone.attr("data-stoneValue", Math.floor(Math.random() * 12) + 1);
        imageStone.attr("height", "150px");
        imageStone.attr("width", "150px");


        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#infinity-stones").append(imageStone);
    }

    updateStats();

    $(".infinity-stone").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var stoneValue = ($(this).attr("data-stoneValue"));
        stoneValue = parseInt(stoneValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        userScore += stoneValue;

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        alert("New score: " + userScore);

        if (userScore === targetNumber) {
            alert("You win!");
            wins++;
            displayWin();
            newGame();
        } else if (userScore >= targetNumber) {
            alert("You lose!!");
            losses++;
            displayLoss();
            newGame();
        }
        updateStats();
    });

    function updateStats() {
        $("#number-to-guess").text(targetNumber);
        $("#user-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    };
    function newGame() {
        userScore = 0;
        targetNumber = Math.floor(Math.random() * 100) + 19;
        updateStats();
    }

    function displayWin() {
       
        $('#result').text("You Win!!");
    }

    function displayLoss() {
        $('#result').text("You Lose!!");
    }
});