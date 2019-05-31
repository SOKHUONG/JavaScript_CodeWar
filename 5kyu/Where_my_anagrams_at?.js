
//From mikie(ky vireak panha)


function anagrams(word, words) {
  let result = [];

  let oldWords = words;

  let newWord = "";
  let newWords = [];

  newWord = word
    .split("")
    .sort()
    .join("");

  for (let i = 0; i < words.length; i++) {
    newWords[i] = words[i]
      .split("")
      .sort()
      .join("");
  }

  for (let j = 0; j < words.length; j++) {
    if (newWord == newWords[j]) result.push(oldWords[j]);
  }

  console.log(result);
}
anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
