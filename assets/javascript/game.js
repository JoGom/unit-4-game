
var targetNum = 0;
var counter = 0;
var gameRun = false;
var crystalValue = [];
var wins = 0;
var losses = 0;

function assignValue(){
    targetNum = Math.floor(Math.random()* 100)+20;
    counter=0;
    for(var i = 0; i < 4; i++){
        crystalValue[i] = Math.floor(Math.random() * 12)+1;
        $("#crystal" + i).attr("crystalData", crystalValue[i]);
    }
    $("#gameNum").text(targetNum);
    $("#playerNum").text(counter);
    return crystalValue, targetNum;
}

function winLose(){
    if(targetNum === counter){
        wins++;
        $("#wins").text("wins: "+wins);
        gameRun= false;
    }
    else if(targetNum < counter){
        losses++;
        $("#losses").text("losses: "+losses);
        gameRun = false;
    }
}


$(".crystal").on("click", function(){
    if(gameRun==false){
        assignValue();
        gameRun=true;
    }
    else{
        var crystalNum = ($(this).attr("crystalData"));
        crystalNum = parseInt(crystalNum);
        counter += crystalNum;
        $("#playerNum").text(counter);
        winLose();
    }
});