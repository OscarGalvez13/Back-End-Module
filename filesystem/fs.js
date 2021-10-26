const fs = require("fs");
let file = `${__dirname}/archivo_nuevo.txt`;

/* fs.readFile("callbacks.js", (err, data) => {
  if (err) {
    console.log("No se pudo leer:", err);
  } else {
    console.log("El contenido es:", data.toString());
  }
});  */

/* (err, data) => {
  //si hay un error entonces haz esto...

  // si no, entonces esto otro
} */

/* fs.writeFile(
  `${__dirname}/archivo_nuevo.txt`,
  "Este es un nuevo archivo",
  (error) => {
    if (error) {
      console.error("No se pudo escribir el archivo", error);
    }
  }
); */

/* fs.unlink(`${__dirname}/archivo_nuevo`, (error) => {
  if (error) {
    console.log("No se pudo eliminar:", error);
  }
}); */

/* fs.mkdir(`${__dirname}/otro_directorio`, (error) => {
  if (error) {
    console.log("No se pudo crear:", error);
  }
}); */

const fileRead = (path, callback) => {
  fs.readFile(path, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data.toString());
    }

    if (callback) {
      callback();
    }
  });
};
fileRead(file, () => {
  console.log("Proceso terminado");
});

const fileWrite = (path, content, callback) => {
  fs.readFile(path, content, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data.toString());
      if (callback) {
        callback();
      }
    }
  });
};

const fileUnlink = async () => {};

const fileMakedir = async () => {};
