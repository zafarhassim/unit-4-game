$( document ).ready(function(){
var requiredScore = Math.floor(Math.random()*102+19);
var currentScore = 0;
var wins = 0;
var loses = 0;
$('#goal').text(requiredScore);
var crystalOne = Math.floor(Math.random()*12+1);
var crystalTwo= Math.floor(Math.random()*12+1);
var crystalThree= Math.floor(Math.random()*12+1);
var crystalFour = Math.floor(Math.random()*12+1);

$('#wins').text(wins);
$('#losses').text(loses);

var outputs = {
  reset : function () {
      var requiredScore = Math.floor(Math.random()*102+19);
      $('#goal').text(requiredScore);
      var crystalOne = Math.floor(Math.random()*12+1);
      var crystalTwo= Math.floor(Math.random()*12+1);
      var crystalThree= Math.floor(Math.random()*12+1);
      var crystalFour = Math.floor(Math.random()*12+1);
      currentScore= 0;
      $('#currentScore').text(currentScore);
  },
  win : function () {
      wins++;
      $('#wins').text(wins);
      outputs.reset();
  },
  loss : function () {
      loses++;
      $('#losses').text(loses);
      outputs.reset();
  }
}


$('.one').on ('click', function(){
    currentScore = currentScore + crystalOne;
    $('#currentScore').text(currentScore); 
        if (currentScore == requiredScore){
          outputs.win();
        }
        else if ( currentScore > requiredScore){
          outputs.loss();
        }   
})  
  $('.two').on ('click', function(){
    currentScore = currentScore + crystalTwo;
    $('#currentScore').text(currentScore); 
        if (currentScore == requiredScore){
          outputs.win();
        }
        else if ( currentScore > requiredScore){
          outputs.loss();
        } 
})  
  $('.three').on ('click', function(){
    currentScore = currentScore + crystalThree;
    $('#currentScore').text(currentScore);
        if (currentScore == requiredScore){
            outputs.win();
        }
        else if ( currentScore > requiredScore){
            outputs.loss();
        } 
})  
  $('.four').on ('click', function(){
    currentScore = currentScore + crystalFour;
    $('#currentScore').text(currentScore); 
        if (currentScore == requiredScore){
                outputs.win();
        }
        else if ( currentScore > requiredScore){
              outputs.loss();
        }
})
})

