// Preparar un frappe
// 1. Colocar orden (2 seg)
// 2. Cortar fruta (2 seg)
// 3. Añadir agua y hielo (1 seg)
// 4. Iniciar la máquina (1 seg)
// 5. Seleccionar contenedor (1 seg)
// 6. Seleccionar toppings (3 seg)
// 7. Servir frappe (2 seg)

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// preparación del frappe
//

const colocarOrden = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const CortarFruta = (callback, stocks) => {
  setTimeout(() => {
    callback(stocks.fruits[1]);
  }, 2000);
};

const colocarHielosYAgua = (callback, stocks) => {
  setTimeout(() => {
    callback(stocks.liquid[0]);
  }, 1000);
};

const iniciarMaquina = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};

const seleccionarContenedor = (callback, stocks) => {
  setTimeout(() => {
    callback(stock.holder[0]);
  }, 1000);
};

const seleccionarTopping = (callback, stocks) => {
  setTimeout(() => {
    callback(stocks.toppings[0]);
  }, 1000);
};

const preparar = (fruits, liquid, holder, toppings) => {
  // 1. Colocar orden (2 seg)
  setTimeout(() => {
    console.log("Order placed");
    // 2. Cortar fruta (2 seg)
    setTimeout(() => {
      console.log(`${fruits} choped`);
      // 3. Añadir agua y hielo (1 seg)
      setTimeout(() => {
        console.log(`${liquid} added`);
        // 4. Iniciar la máquina (1 seg)
        setTimeout(() => {
          console.log(`machine started`);
          // 5. Seleccionar contenedor (1 seg)
          setTimeout(() => {
            console.log(`${holder} selected`);
            // 6. Seleccionar toppings (3 seg)
            setTimeout(() => {
              console.log(`${toppings} selected`);
              // 7. Servir frappe (2 seg)
              setTimeout(() => {
                console.log(`frappe served`);
              }, 2000);
            }, 3000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 2000);
};

preparar(
  stocks.fruits[0],
  stocks.liquid[0],
  stocks.holder[0],
  stocks.toppings[0]
);
preparar(
  stocks.fruits[1],
  stocks.liquid[1],
  stocks.holder[0],
  stocks.toppings[0]
);
preparar(
  stocks.fruits[0],
  stocks.liquid[2],
  stocks.holder[0],
  stocks.toppings[2]
);
preparar(
  stocks.fruits[3],
  stocks.liquid[1],
  stocks.holder[0],
  stocks.toppings[3]
);

const preparar = (fruits, liquid, holder, toppings) => {
  colocarOrden(() => {
    console.log("seleccionar orden");
    cortarFruta(() => {
      console.log("cortando fruta");
      colocarHielosYAgua(() => {
        console.log("agregando agua y hiel");
        seleccionarContenedor(() => {
          console.log("ladriallos puestsos");
          seleccionarTopping(() => {
            console.log("termine el aplanado");
          });
        });
      });
    });
  });
};
