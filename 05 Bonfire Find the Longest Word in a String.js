/*Bonfire: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
String.length*/

function findLongestWord(str) {
    var splits = str.split(' ');
    var arrLength = splits.map(function (item) {
        return item.length;
    });
    return Math.max.apply(null, arrLength);
}

findLongestWord("The quick brown fox jumped over the lazy dog");