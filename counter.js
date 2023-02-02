let counter = 0

const setCounter = (element, custom) => {
  if (custom == null && custom == undefined){
    counter++
    element.innerHTML = `count is ${counter}`
  } else {
    element.innerHTML = `count is ${custom+counter}`
    counter = counter+custom
  }
}

const RestartClick = (element, element2, callback) => {
  const interval = setInterval(() => {
    if (1 > counter){
       clearInterval(interval)
       return callback("aa")
    } else {
      element.innerHTML = `count is ${counter--}`
      return
    }
  }, 100);
}

const myModule = {
  setCounter: function(data, callback) {
    const {element, element2, customna, type} = data;

      if (type == "increment"){
      if (element){ 
        setCounter(element, customna)
      }
      } else {
        RestartClick(element, element2, () => {
          return callback("done")
        });
      }
  }
  };

  export { myModule };