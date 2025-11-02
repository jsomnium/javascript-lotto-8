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
}

export default Lotto;
