let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

const numeroRandom = (valor) =>{
        return Math.floor(Math.random()*valor);
}
const string1= who[numeroRandom(who.length)] +" "+ action[numeroRandom(action.length)] +" "+ what[numeroRandom(what.length)] +" "+ when[numeroRandom(when.length)];
//console.log(string1);

const div = document.querySelector(".texto-inferior");
div.innerHTML = string1;
div.style.fontWeight = "bold";
