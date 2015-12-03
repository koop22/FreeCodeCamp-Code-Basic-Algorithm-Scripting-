/*Bonfire: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()*/

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0, 1);
    return arr.filter(function (item) {
        return args.indexOf(item) === -1;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);