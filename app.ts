#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// print display message
console.log(chalk.green("<=>".repeat(50)));
console.log(chalk.bold.bgCyanBright("\t\tCODE WITH SHAHZAIB - WORDS COUNTER"));
console.log(chalk.green("<=>".repeat(50)));


// inquirer
let answers = await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
        message: "Enter a Sentence",
    }
]);

//trim the sentence and split in into words based on sentence 
let words = answers.sentence.trim().split(" ");

//Analysis user input sentence
console.log(chalk.red("<=>".repeat(50)));
console.log(chalk.blue("Sentence Words:"));
console.log(words);
console.log(chalk.bold.blue(`Words Count: ${chalk.yellow(words.length)}`));
console.log(chalk.red("<=>".repeat(50)));


console.log(chalk.bold.grey("THANK.U"));


