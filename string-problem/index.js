

const checkString = (string) => {

    const characters = ['(', '[', '{', ')', ']', '}']; //the characters we check
    const validCombinations = ['()', '[]', '{}']; // valid combinations
    const brackets = [];

    for (let i = 0; i < string.length; i++) {
        if (characters.includes(string[i])) brackets.push(string[i]); //extracting all the characters we need
    }
    debugger
    if (brackets.length % 2 !== 0) return false; // if it is odd then it's false
    for (let i = 0; i < brackets.length; i++) { //start checking
        if (validCombinations.includes(brackets[i] + brackets[i + 1])) { //if the two standing one mext to another items form a valid combination
            brackets.splice(i, 2);// delete them
            i = -1; //this is done so the loop could start from 0 if 
        }
    }
    if (brackets.length === 0) return true;
    return false;
}

const res = document.getElementById('result');
const button = document.getElementById('check');
const reset = document.getElementById('reset')
const input = document.getElementById('input');

button.onclick = () => {
    res.innerHTML = '';
    if (checkString(input.value)) res.innerHTML += 'The string is valid';
    else res.innerHTML += 'the string is invalid';
}

reset.onclick = () => {
    input.value = '';
    res.innerHTML = '';
}