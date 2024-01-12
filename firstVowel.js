function firstVowel(str) {
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

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
