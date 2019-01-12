/*JavaScript*/


// create variables globally towards our application
var randomNumber = "";
var yourWins = 0;
var yourLosses = 0;
var yourScore = 0;

function initializeGame() {
    var yourScore = 0;

    console.log("your score: " + yourScore)
    // generate random target number
    randomNumber = Math.floor((Math.random() * 120) + 19);
    console.log(randomNumber);
    displayRandomNumber = $("#random-number").text(randomNumber);


    // generate random gem values
    $("#gem-one").val(Math.floor((Math.random() * 12) + 1));
    console.log("gem one value is: " + $("#gem-one").val());
    $("#gem-two").val(Math.floor((Math.random() * 12) + 1));
    console.log("gem two value is: " + $("#gem-two").val());
    $("#gem-three").val(Math.floor((Math.random() * 12) + 1));
    console.log("gem three value is: " + $("#gem-three").val());
    $("#gem-four").val(Math.floor((Math.random() * 12) + 1));
    console.log("gem four value is: " + $("#gem-four").val());


}

function playGame() {

    // add random gen values to your score
    $(".gem").on("click", function () {

        console.log(randomNumber);
        gemValue = parseInt($(this).val());
        yourScore = parseInt(yourScore + gemValue);
        $("#your-score").text(yourScore);
        console.log("your score in click: " + yourScore)

        // if your score equals the random number, you win and the game resets
        if (yourScore === randomNumber) {
            alert("you win!");
            yourWins++;
            $("#your-wins").text(yourWins);
            console.log("your wins: " + yourWins)
            yourScore = 0;
            // TODO: find a more efficient way of resetting the "yourScore." Why can't I get it to work in the gameSetup?
            $("#your-score").text(yourScore);
            initializeGame();
            console.log("your wins after initialize: " + yourWins)
        }

        // if your score exceeds the random number, you lose and the game resets
        if (yourScore > randomNumber) {
            alert("you lost");
            yourLosses++;
            $("#your-losses").text(yourLosses);
            console.log("your losses: " + yourLosses)
            yourScore = 0;
            $("#your-score").text(yourScore);
            initializeGame();
            console.log("your losses after intialize: " + yourLosses)

        }
    });

}

initializeGame();
playGame();