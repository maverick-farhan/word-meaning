#!/usr/bin/env node
import chalk from 'chalk';
//Fetch Location:  https://api.dictionaryapi.dev/api/v2/entries/en/<word>
const input = process.argv;
const currentVersion = "1.1.1"
const printMeaning = async(word)=>{
try{
if(input[2]=="-h"){
console.log(".......Help Doc.......");
console.log("Possible commands:")
console.log("word-meaning -h : To show the package help page")
console.log("word-meaning -v : To show the package current version")
console.log("word-meaning <word>: To show the meaning of the <word>")
    }
else if(input[2]==='-v'){
        console.log(`v${currentVersion}`)
  }
else if(input[2]!=='-v'){
    console.log("Fetching please wait......")
    const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();

        data[0].meanings.map((meaning)=>{
        console.log(chalk.blue(meaning.definitions[0].definition));
        });
}
else{
    console.log(chalk.red("Please enter a word to know the meaning"));
}
}catch(error){
console.log(chalk.red("Meaning Not Found, \n(1)Kindly check spelling and Try again\n(2)Don't Enter empty words"));
}
}
printMeaning(input[2]);
export default printMeaning;
