function reverb(str) {
  if (typeof str !== 'string') {
    return null;
  }
  for (let i = 0; i < str.length; i++) {
    if (lastVowel(str)) {

    }
  }
}

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



console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
