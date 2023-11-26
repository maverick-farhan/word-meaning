#!/usr/bin/env node
import chalk from 'chalk';
//Fetch Location:  https://api.dictionaryapi.dev/api/v2/entries/en/<word>
const input = process.argv;
const printMeaning = async(word)=>{
try{
    if(input[2]){
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
