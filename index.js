 

window.onload = () => {
    document.querySelector("#generador").innerHTML = generadorDominios();
  };

function generadorDominios() {
   //declaracion de variables
   let direccion = {
      world: "www."
   }
   let pronoun = ['the', 'our'];
   let adj = ['great', 'big'];
   let noun = ['jogger', 'racoon']
   let extension = ['.com', '.es','.us', '.io']
   let container = [];

      for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
          for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extension.length; l++) {
              container.push(direccion.world + pronoun[i] + adj[j] + noun[k] + extension[l]);
           }    
        }
      }
   }
   return container.join("<br>")
}
