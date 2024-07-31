 

window.onload = () => {
    document.querySelector("#generador").innerHTML = generadorDominios();
    document.querySelector("#generador2").innerHTML = generadorDominios();
    document.querySelector("#generador3").innerHTML = generadorDominios();
    document.querySelector("#generador4").innerHTML = generadorDominios();
    document.querySelector("#generador5").innerHTML = generadorDominios();
    document.querySelector("#generador6").innerHTML = generadorDominios();
    document.querySelector("#generador7").innerHTML = generadorDominios();
    document.querySelector("#generador8").innerHTML = generadorDominios();
  };

function generadorDominios() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let extension = ['.com', '.es', '.mx',];

    let pronounConsola = Math.floor(Math.random() * pronoun.length);
    let adjConsola = Math.floor(Math.random() * adj.length);
    let nounConsola = Math.floor(Math.random() * noun.length);
    let extensionConsola = Math.floor(Math.random() * extension.length);

    return pronoun[pronounConsola] + adj[adjConsola] + noun[nounConsola] + extension[extensionConsola];

}
  for (let index = 0; index < 8; index++) {
    console.log(generadorDominios() + ".com");
  }
