var level = 1;
var i = 0;
var teclaArray = ["#green", "#red", "#yellow", "#blue"];
var teclasPress = [];

//Seleciona um dos botões aleatórios, é pressionado e adicionado ao Array
function teclaAtivar() {
  var teclaAle = teclaArray[Math.floor(Math.random() * 4)];

  //Animação botão
  $(teclaAle).addClass("pressed");

  setTimeout(function () {
    $(teclaAle).removeClass("pressed");
  }, 200);

  //Levar o id da tecla pressionada ao array de teclas ja pressionadas
  teclasPress.push(teclaAle);

  //Som certo pelo botão certo
  switch (teclaAle) {
    case "#green":
      var greenAudio = new Audio("./sounds/green.mp3");
      greenAudio.play();
      break;

    case "#blue":
      var blueAudio = new Audio("./sounds/blue.mp3");
      blueAudio.play();
      break;

    case "#red":
      var redAudio = new Audio("./sounds/red.mp3");
      redAudio.play();
      break;

    case "#yellow":
      var yellowAudio = new Audio("./sounds/yellow.mp3");
      yellowAudio.play();
      break;

    default:
      break;
  }
}

//Mostrar o level assim que uma tecla é apertada e adicionar um level

$(document).keydown(function () {
  if (level === 1 && teclasPress.length === 0) {
    $("#level-title").text("Level " + level);
    teclaAtivar();
  }
});

$(document).click(function () {
  if (level === 1 && teclasPress.length === 0) {
    $("#level-title").text("Level " + level);
    teclaAtivar();
  }
});

$(".btn").click(function () {
  var buttonId = "#" + $(this).attr("id");

  if (buttonId !== teclasPress[i]) {
    $("#level-title").text("Perdeu Parça");
    level = 0;
    teclasPress = [];
  }

  if (level === i + 1) {
    level++;
    i = 0;
    $("#level-title").text("Level " + level);
    teclaAtivar().delay(400);
  }

  if (buttonId === teclasPress[i]) {
    i++;
  }
});


