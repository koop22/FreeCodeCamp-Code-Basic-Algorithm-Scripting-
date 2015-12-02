/*Bonfire: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push()*/

function chunk(arr, size) {
    var temp = [];
    for (var i = 0; i < arr.length; i += size) {

        temp.push(arr.slice(i, i + size));

    }

    return temp;
}

chunk(["a", "b", "c", "d"], 2, "");