import readline from "readline/promises";
import {stdin as input, stdout as output} from "process";

const rl = readline.createInterface({input, output});

// using async function to wait for input 
async function main() {
    let name = await rl.question("enter your name: ");
    console.log(`My name is ${name}`);
}