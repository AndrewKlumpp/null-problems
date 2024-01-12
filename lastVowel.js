function lastVowel(str) {
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      return str[i];
    }
  }
  return null;
}

function isVowel(word) {
  let vowels = "aeiou";
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
