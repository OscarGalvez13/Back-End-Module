const asyncFcuntion = (myCallback) => {
  setTimeout(() => {
    console.log("Process finished");
    myCallback();
  }, 3000);
};

console.log("Inciando programa");
asyncFcuntion(() => {
  console.log("Terminando programa");
});
