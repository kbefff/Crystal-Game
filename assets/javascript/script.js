/*JavaScript*/



// generate random number
var randomNumber = "";
var randomGemNumber = "";
var yourScore = "";
var yourWins = "";
var yourLosses = "";


// display random number

function initializeGame() {
    // generate random target number
    $("#random-number").text(Math.floor((Math.random() * 50) + 10));

    // generate random gem values
    $("#gem-one").val(Math.floor((Math.random() * 10) + 2));
    console.log("gem one value is: " + $("#gem-one").val());
    $("#gem-two").val(Math.floor((Math.random() * 10) + 2));
    console.log("gem two value is: " + $("#gem-two").val());
    $("#gem-three").val(Math.floor((Math.random() * 10) + 2));
    console.log("gem three value is: " + $("#gem-three").val());
    $("#gem-four").val(Math.floor((Math.random() * 10) + 2));
    console.log("gem four value is: " + $("#gem-four").val());


    $(".gem").on("click", function(){
        theValue = parseInt($(this).val());
        yourScore = parseInt(yourScore + theValue);
        $("#your-score").text(yourScore);
    });

}

initializeGame();



