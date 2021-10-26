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

const colocarOrden = (iceNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`se tomo la orden ${iceNumber}`);
      resolve(iceNumber);
    }, 2000);
  });
};

const cortarFruta = (iceNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`se corto la fruta ${stocks.fruits[0]}`)
      switch (iceNumber) {
        case 1:
          console.log(`se corto la fruta ${stocks.fruits[0]}`);
          resolve(iceNumber);
          break;
        case 2:
          console.log(`se corto la fruta ${stocks.fruits[1]}`);
          resolve(iceNumber);
          break;
        case 3:
          console.log(`se corto la fruta ${stocks.fruits[2]}`);
          resolve(iceNumber);
          break;
        case 4:
          console.log(`se corto la fruta ${stocks.fruits[3]}`);
          resolve(iceNumber);
          break;
      }
    }, 2000);
  });
};

const colocarHielosYAgua = (iceNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(iceNumber);
    }, 1000);
  });
};

const iniciarMaquina = (iceNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(iceNumber);
    }, 1000);
  });
};

const seleccionarContenedor = (iceNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`seleccionando contenedor para la bebida ${iceNumber}`);
      resolve(iceNumber);
    }, 1000);
  });
};

const seleccionarTopping = (iceNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`seleccionando topping para la bebida ${iceNumber}`);
      resolve(iceNumber);
    }, 1000);
  });
};

const servirFrappe = (iceNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`bebida ${iceNumber} servida`);
      resolve(iceNumber);
    }, 1000);
  });
};

colocarOrden(2)
  .then(cortarFruta)
  .then(colocarHielosYAgua)
  .then(iniciarMaquina)
  .then(seleccionarContenedor)
  .then(seleccionarTopping)
  .then(servirFrappe)
  .catch((error) => {
    console.error("error", error);
  })
  .finally(() => {
    console.log("Bebida terminada 😃");
  });
