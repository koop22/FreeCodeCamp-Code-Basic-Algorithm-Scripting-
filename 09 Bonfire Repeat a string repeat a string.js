/*Bonfire: Repeat a string repeat a string
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object*/

function repeat(str, num) {
    return num > 0 ? str.repeat(num) : "";
}

repeat("abc", 3, "");