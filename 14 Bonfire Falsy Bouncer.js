/*Bonfire: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.filter()*/

function bouncer(arr) {
    return arr.filter(function (item) {
        return Boolean(item) === true;
    });
}

bouncer([7, "ate", "", false, 9]);