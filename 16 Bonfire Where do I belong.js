/*Bonfire: Where do I belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.sort()*/

function where(arr, num) {
    function compareNumeric(a, b) {
        return a - b;
    }
    return (arr.concat(num).sort(compareNumeric)).indexOf(num);
}


where([40, 60], 50, "");