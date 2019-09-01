// player1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesSource = "images/" + randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImagesSource);

// player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImagesSource2 = "images/" + randomDiceImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImagesSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎈Player 1 win !";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 win !🎈";
} else {
  document.querySelector("h1").innerHTML = "Draw !";
}
