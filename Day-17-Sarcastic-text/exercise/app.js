const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');

const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
result.textContent = textarea.value;
/* eslint-disable */
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };
/* eslint-enable
 */
const filterOptions = {
  sarcastic: function (letter, index) {
    return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
  },
  funky: function (letter) {
    // first check if there is a funky letter for this case
    return funkyLetters[letter] ?? funkyLetters[letter.toUpperCase()] ?? letter;
  },
  unable: function (letter) {
    const random = Math.floor(Math.random() * 3);
    return (letter === " " && random === 2) ? '....' : letter;
  }, 
  stutter: function (letter, index, text) {
    const random = Math.floor(Math.random() * 3);
    const isFirstLetter = !text[index - 1] || text[index - 1] === " ";
    return isFirstLetter && random === 2 ? `${letter}-`.repeat(3) + letter : letter;
  },
  mate: function (letter, index, text) {
    const mate = 'mate';

    const isSymbol = text[index] === "." || text[index] === ',';
    const isDot = text[index -1] === '.';
    return isSymbol && !isDot ? ` ${mate}` + letter : letter;
  }
}
function transformText(text) {
  const filter = filterInputs.find((input) => input.checked).value;
  const mod = Array.from(text).map(filterOptions[filter]).join("");
  
  result.style.fontWeight = 'bold';
  result.textContent = mod;
}

textarea.addEventListener('input', (event) => transformText(event.target.value));


filterInputs.forEach(input =>
  input.addEventListener('input', () => {
    transformText(textarea.value);
  })
)

window.addEventListener("load", () => transformText(textarea.value));