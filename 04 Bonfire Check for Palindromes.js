/*Bonfire: Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.replace()
String.toLowerCase()*/

function palindrome(str) {
    var nakedStr = str.toLowerCase().replace(/\W|_/g, '');
    var reversStr = nakedStr.split('').reverse().join('');
    if (nakedStr === reversStr) {
        return true;
    } else {
        return false;
    }
}
palindrome("eye");