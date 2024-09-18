let campoIdade;

let campoFantasia;

let campoAventura;

function setup() {
  createCanvas(800, 400);

  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");

  campoIdade = createInput("14");
  campoFantasia = createCheckbox("Gosta de fantasia?");

  campoAventura = createCheckbox("Gosta de aventura?");

}


function draw() {

  background("orange");

  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();

  let gostaDeAventura = campoAventura.checked();

  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);


  fill(color(252, 0, 125));
  textAlign(CENTER, CENTER);

  textSize(38);

  text(recomendacao, width / 2, height / 2);

}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {

  if (idade >= 10) {

    if (idade >= 14) {

      return "Genious";

    } else {

      if (idade >= 12) {

        if(gostaDeFantasia || gostaDeAventura) {

          return "Sonda- me se for capaz";          

        } else{
         return "O sorriso do Lagarto";

        }

      } else {

        if (gostaDeFantasia) {

          return "Sorria: o sol brilha";

        } else {

          return "Após a guerra";

        }

      }

    }

  } else {

    if (gostaDeFantasia) {

      return "As aventuras do Coala";

    } else {

      return "O grande mestre";

    }

  }

}


