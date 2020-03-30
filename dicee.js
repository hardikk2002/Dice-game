
var randomNumber1 = Math.floor(Math.random()*6)+1;  // random 1-6

var ramdomImage= "images/dice" + randomNumber1 + ".png";    // random

document.querySelectorAll("img")[0].setAttribute("src", ramdomImage);




var randomNumber2 = Math.floor(Math.random()*6)+1;  // random 1-6

var ramdomImage2= "images/dice" + randomNumber2 + ".png";    // random

document.querySelectorAll("img")[1].setAttribute("src", ramdomImage2);

if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 1 wins!!";
  }
else if(randomNumber2 > randomNumber1)
    {
      document.querySelector("h1").innerHTML="Player 2 wins!!";
    }
else
{
    document.querySelector("h1").innerHTML="Draw!!";
}
