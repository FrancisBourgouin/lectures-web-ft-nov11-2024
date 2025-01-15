// What is hard in react?


// Classes!

const someArray = new Array()
const someDate = new Date("2025-01-01")
const someErr = new Error("SOME RANDOM ERROR")


class Potato {
  constructor(type, size){
    this.type = type
    this.size = size.toLowerCase()
  }

  getInfo(){
    console.log(`This potato is of type ${this.type} and is ${this.size}.`)
  }

  greet(){
    console.log("I can't talk, I'm a potato")
  }
}

class Component{
  // React component as a class to avoid repeating the methods / actions that we need to do
}

const russett = new Potato("Russett", "Big")
const yukonGold = new Potato("Yukon Gold", "Average")

russett.getInfo()
yukonGold.getInfo()

class HumanizedPotato extends Potato{
  constructor(type, name){
    super(type, "It doesn't matter")
    this.name = name
  }

  greet(){
    console.log(`Hi my name is ${this.name}, you killed my father, prepare to die`)
  }
}

const patator = new HumanizedPotato("Irish Cobbler", "Paultato Montoya")

console.log(patator)
patator.greet()


// class Header extends Component


const someObj = {
  name:"bob",
  greet: function(){ console.log(this.name) }
}