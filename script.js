let submitBtn = document.getElementById('submit');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let percentage = document.getElementById('percentage');
let matchedWords = [];
let matchedWords1 = document.getElementById('matchedWords') 
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let text1Value = text1.value;
    let text2Value = text2.value;
    let matchingPercentage = calculateMatchingPercentage(text1Value, text2Value);
    percentage.innerHTML = matchingPercentage + '%';

});

// Calculate matching percentage between two strings
function calculateMatchingPercentage(text1, text2) {
    let matchingPercentage1 = 0;
    let matchingPercentage2 = 0;

    // Split the strings into arrays
    let text1Array = text1.split(' ');
    let text2Array = text2.split(' ');

    // Loop through the first array
    for (let i = 0; i < text1Array.length; i++) {
        // Loop through the second array
        for (let j = 0; j < text2Array.length; j++) {
            // Check if the words match
            if (text1Array[i] === text2Array[j]) {
                // Push the matched word into the array
                matchedWords.push(text1Array[i]);
                // Remove the matched word from the second array
                text2Array.splice(j, 1);
                // Increase the matching percentage
                matchingPercentage1++;
                // push the matched word into the array
                matchedWords.push(text2Array[j]);
                break;
            }
        }
    }

    // Loop through the second array
    for (let i = 0; i < text2Array.length; i++) {
        // Loop through the first array
        for (let j = 0; j < text1Array.length; j++) {
            // Check if the words match
            if (text2Array[i] === text1Array[j]) {
                // Push the matched word into the array
                matchedWords.push(text2Array[i]);
                // Remove the matched word from the first array
                text1Array.splice(j, 1);
                // Increase the matching percentage
                matchingPercentage2++;
                // push the matched word into the array
                matchedWords.push(text2Array[i]);
                break;
            }
        }
    }

    // Calculate the matching percentage
    let matchingPercentage = (matchingPercentage1 + matchingPercentage2) / (text1Array.length + text2Array.length) * 100;
    return matchingPercentage.toFixed(2);
}

matchedWords1.innerHTML = matchedWords;

