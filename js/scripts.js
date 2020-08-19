let word="apple";
let newWord = word + "way";
console.log(newWord);

const vowels = ["a", "i", "e", "o", "u"];
const word = "house";
let stringArray = word.split("");
for (let index=0; index < stringArray.length; index+=1) {
	if (vowels.includes(stringArray[0])) {
  	break;
  } else {
  	stringArray.push(stringArray[0]);
    stringArray.shift();
  }  
}
const newWord = stringArray.join("") + "ay";