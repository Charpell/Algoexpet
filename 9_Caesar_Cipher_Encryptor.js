// Caesar Cipher Encryptor 

// Given a non-empty string of lowercase letters and non-negative integer 
// value representing a KeyboardEvent, write a function that returns a new 
// string obtained by shifting every letter in the input string by K positions 
// in the alphabet, where k is the key. Note that letters should wrap around the 
// alphabets; in other words, the letter z shifted by 1 returns letter z 

// Sample input: "xyz", 2;
// Sample output: "zab" 


function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet))
  }
  return newLetters.join("")
}

function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return newLetterCode <= 25 ? alphabet[newLetterCode] : alphabet[-1 + newLetterCode % 25]
}