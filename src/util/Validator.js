import { LottoConstants } from "../constant/index.js";
import { ErrorMessage } from "../constant/index.js";
import CustomError from "./Error.js";

class Validator {
  static validateLottoNumbers(numbers) {
    const { LENGTH, MIN_NUMBER, MAX_NUMBER } = LottoConstants;

    this.#validateLength(numbers, LENGTH);
    this.#validateDuplicate(numbers);
    this.#validateLottoNumbers(numbers, MIN_NUMBER, MAX_NUMBER);
  }

  static validateSingleNumber(number) {
    const { MIN_NUMBER, MAX_NUMBER } = LottoConstants;
    this.#validateSingleLottoNumber(number, MIN_NUMBER, MAX_NUMBER);
  }

  static #validateLength(numbers, LENGTH) {
    if (numbers.length !== LENGTH) {
      throw new CustomError(ErrorMessage.INVALID_LOTTO_NUMBERS_LENGTH);
    }
  }

  static #validateDuplicate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new CustomError(ErrorMessage.INVALID_LOTTO_NUMBERS_DUPLICATE);
    }
  }

  static #validateLottoNumbers(numbers, MIN_NUMBER, MAX_NUMBER) {
    numbers.forEach((number) => this.#validateSingleLottoNumber(number, MIN_NUMBER, MAX_NUMBER));
  }

  static #validateSingleLottoNumber(number, MIN_NUMBER, MAX_NUMBER) {
    const parsedNumber = Number(number);

    if (!Number.isInteger(parsedNumber) || isNaN(parsedNumber) || parsedNumber <= 0) {
      throw new CustomError(ErrorMessage.INVALID_LOTTO_NUMBER_TYPE);
    }

    if (parsedNumber < MIN_NUMBER || parsedNumber > MAX_NUMBER) {
      throw new CustomError(ErrorMessage.INVALID_LOTTO_NUMBER_RANGE);
    }
  }

  static validatePurchaseAmount(amount) {
    const { PRICE } = LottoConstants;

    this.#validatePositiveInteger(amount);
    this.#validateMultipleOfThousand(amount, PRICE);
  }

  static #validatePositiveInteger(amount) {
    if (!Number.isInteger(amount) || isNaN(amount) || amount <= 0) {
      throw new CustomError(ErrorMessage.INVALID_PURCHASE_AMOUNT_TYPE);
    }
  }

  static #validateMultipleOfThousand(amount, PRICE) {
    if (amount % PRICE !== 0) {
      throw new CustomError(ErrorMessage.INVALID_PURCHASE_AMOUNT_MULTIPLE);
    }
  }
    
  static validateBonusNumber(bonusNumber, winningNumbers) {
    const { MIN_NUMBER, MAX_NUMBER } = LottoConstants;

    this.#validateSingleLottoNumber(bonusNumber, MIN_NUMBER, MAX_NUMBER);
    this.#validateBonusNotInWinningNumbers(bonusNumber, winningNumbers);
  }

  static #validateBonusNotInWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.has(bonusNumber)) {
      throw new CustomError(ErrorMessage.INVALID_LOTTO_NUMBERS_DUPLICATE);
    }
  }

  static validateLottoStoreForResult(lottoTickets, winningLotto, bonusNumber) {
    if (lottoTickets.length === 0 || !winningLotto || bonusNumber === null) {
      throw new CustomError(ErrorMessage.INVALID_RESULT_CALCULATION);
    }
  }
}

export default Validator;
