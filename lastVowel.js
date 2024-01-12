function lastVowel(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (isVowel(str[i])) {
      return str[i];
    }
  }
  return null;
}

function isVowel(word) {
  let vowels = "aeiouAEIOU";
  for (i = 0; i < word.length; i++) {
    char = word[i];
    if (vowels.includes(char)) {
      return true;
    }
  }
};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
