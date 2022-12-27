let text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
let pattern = /[a-zA-Zà-üÀ-Ü]+/g;
let resultats = text.matchAll(pattern);

function translateToLouchebem(phrase) {
  // Separates the sentence into words
  let words = phrase.split(" ");
  // Translate each word into Louchebem
  let translatedWords = words.map(function (word) {
    // If the word starts with a consonant
    if (/^[^aeiouy]/i.test(word)) {
      // Move the consonant from the beginning of the word to the end and add "-em"
      return "l" + word.slice(1) + word[0] + "em";
    }
    // If the word starts with a vowel
    else {
      //
      return "l" + word + "é";
    }
  });
  // Join the words in one sentence
  return translatedWords.join(" ");
}

function translateToLouchebemFunctionCall() {
  let input = document.getElementById("inputText").value;
  let output = translateToLouchebem(input);
  document.getElementById("outputText").innerHTML = output;
}
