let word="apple";
let newWord = word + "way";
console.log(newWord);

let vowels = ["u", "a", "i", "e", "o"];
const word = "house";
let stringArray = word.split("");
if (vowels.includes(stringArray[0])) {
  stringArray.push("w")
} else {
  if (stringArray[0] !== "y") {
    vowels.push("y")
  }
  if (stringArray[0] === "q" && stringArray[1] === "u") {
    vowels.shift();
  }
  for (let index=0; index < stringArray.length; index+=1) {
    if (vowels.includes(stringArray[0])) {
      break;
    } else {
      stringArray.push(stringArray[0]);
      stringArray.shift();
    }  
  }
}
const newWord = stringArray.join("") + "ay";