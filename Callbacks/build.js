// Medir espacio (1 seg)
// Comprar materiales (2 seg)
// Hacer esqueleto (2 seg)
// Hacer mezcla (3 seg)
// Poner ladrillos (3 seg)
// Aplanado (4 seg)
// Pintar (2 seg)

const medirEspacio = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (wallNumber == 1) {
        console.log(`Se midio el espacio para el muro ${wallNumber}`);
        resolve(wallNumber);
      } else {
        reject(`No se pudo medir el espacio para el muro ${wallNumber}`);
      }
    }, 1000);
  });
};

const comprarMateriales = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se compro el material para el material ${wallNumber}`);
      resolve(wallNumber);
    }, 2000);
  });
};

const hacerEsqueleto = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se construyo el esqueleto del muro ${wallNumber}`);
      resolve(wallNumber);
    }, 2000);
  });
};

const hacerMezcla = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se hizo la mezcla del muro ${wallNumber}`);
      resolve(wallNumber);
    }, 3000);
  });
};

const ponerLadrillos = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se colocaron los ladrillos del muro ${wallNumber}`);
      resolve(wallNumber);
    }, 3000);
  });
};

const aplanado = (callback) => {
  setTimeout(() => {
    callback();
  }, 4000);
};

const pintar = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const imprimirError = (mensaje) => {
  console.log("Error:", mensaje);
};
medirEspacio(1).then(comprarMateriales).then(hacerEsqueleto).then(hacerMezcla);

/* const construirMuro = (callback) => {
  medirEspacio(() => {
    console.log("El espacio fue medido");
    comprarMateriales(() => {
      console.log("Ya compre material");
      hacerEsqueleto(() => {
        console.log("Esqueleto terminado");
        hacerMezcla(() => {
          console.log("La mezcla esta lista");
          ponerLadrillos(() => {
            console.log("Ladrillos listos");
            aplanado(() => {
              console.log("Muro aplanado");
              pintar(() => {
                console.log("Muro terminado");
              });
            });
          });
        });
      });
    });
  });
};

console.log("Inciando obra!");
for (let i = 0; i < 4; i++) {
  construirMuro();
}
 */
