const someArray = []

const someDelayedFunction = () => {
  return new Promise((res,rej) => {
    setTimeout(() => {
      if(Math.random() > 0.5){
        return res("YAY!")
      }
      return rej("NAY!")
    }, 1000)
  })
}

someDelayedFunction()
  .then(res => console.log("Success", res))
  .catch(rej => console.log("Fail!", rej))

const processAsyncStuff = async () => {
  try{
    const res = await someDelayedFunction()
    console.log("Success", res)
  } catch(rej){
    console.log("Fail!", rej)
  }
}


processAsyncStuff()

await Promise.all([prom1,prom2])
