/*Bonfire: Confirm the Ending
Check if a string (first argument) ends with the given target string (second argument).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.substr()*/

function end(str, target) {
    if (str.substr((str.length - target.length), (str.length)) == target) {
        return true;
    } else {
        return false;
    }
}

end("Bastian", "n", "");