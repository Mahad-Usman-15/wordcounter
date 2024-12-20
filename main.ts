import inquirer from "inquirer"
let input:{
    userinput:string
}=await inquirer.prompt([
    {
        name:"userinput",
        type:"input",
        message:"Enter your sentence to be counted"
    }
])
let wordswithoutwhitespaces=input.userinput.trim().split(" ")
console.log(wordswithoutwhitespaces)
console.log(`Your wordcount is ${wordswithoutwhitespaces.length}`)