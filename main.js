import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        name: "userinput",
        type: "input",
        message: "enter your sentence to be counted"
    }
]);
let wordswithoutwhitespaces = input.userinput.trim().split("");
console.log(wordswithoutwhitespaces);
console.log(`Your wordcount is ${wordswithoutwhitespaces.length}`);
