import Validator from "../util/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = new Set(numbers);
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  countMatchingNumbers(winningNumbers) {
    let matchCount = 0;
    winningNumbers.forEach((number) => {
      if (this.#numbers.has(number)) {
        matchCount++;
      }
    });
    return matchCount;
  }

  hasNumber(number) {
    return this.#numbers.has(number);
  }
}

export default Lotto;
