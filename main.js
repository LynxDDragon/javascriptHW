// Question 1
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string){
    if (dog_string == 'Max') {
        return 'Matched dog_name'
    } else {
        return 'No Matches'
    }
}

// Question 2


function replaceEvens(arr){
    var index = arr.indexOf()
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            arr[i] = 'even index'

        }
    }
    return arr
}

console.log(replaceEvens(arr))

// CODEWARS

// 8 Towers

function towerCombination(n) {
    return n === 1 ? 1 : n * towerCombination(n - 1);
  }

  // Anagram Detection

  function isAnagram (test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
  }
  