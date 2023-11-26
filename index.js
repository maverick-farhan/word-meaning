#!/usr/bin/env node
//Fetch Location:  https://api.dictionaryapi.dev/api/v2/entries/en/<word>
const input = process.argv;
const printMeaning = async(word)=>{
try{
    if(input[2]){
    const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();

        const meaning = data[0].meanings.map((meaning)=>{
        console.log(meaning.definitions[0].definition);
        });
}
else{
    console.log("Please Enter the Keyword to know the meaning")
}
}catch(error){
console.log("Meaning Not Found, \n(1)Kindly check spelling and Try again\n(2)Don't Enter empty words")
}
}
printMeaning(input[2])
