let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let title = document.getElementById("title");

let num1 = Math.floor(Math.random() * 6) + 1
let num2 = Math.floor(Math.random() * 6) + 1

image1.src = "diesImages/dice" + num1 + ".png"
image2.src = "diesImages/dice" + num2 + ".png"

let bigger = num1 === num2 ? null : num1 > num2 ? image1 : image2

let string = bigger === null ? "It's a Tie!" : bigger === image1 ? "Player1 Wins!" : "Player2 Wins!"

title.innerHTML = `<h1 class="title" id="title">` + string + `</h1>`