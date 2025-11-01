import Lotto from "../model/Lotto.js";
import Validator from "../util/Validator.js";
import { LottoConstants } from "../constant/index.js";
import { Random } from "@woowacourse/mission-utils"

class LottoService {
  validatePurchaseAmount(purchaseAmount) {
    Validator.validatePurchaseAmount(purchaseAmount);
  }

  calculatePurchaseCount(purchaseAmount) {
    return purchaseAmount / LottoConstants.PRICE;
  }

  generateLottoTickets(purchaseCount) {
    const tickets = [];
    for (let i = 0; i < purchaseCount; i++) {
        tickets.push(new Lotto(this.#generateRandomNumbers()));
    }
    return tickets;
  }

  #generateRandomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      LottoConstants.MIN_NUMBER, 
      LottoConstants.MAX_NUMBER, 
      LottoConstants.LENGTH
    );

    return numbers.sort((a, b) => a - b);
  }

  parseWinningNumbers(inputString) {
    const numbers = inputString.split(',').map(num => Number(num.trim()));
    return numbers;
  }
}

export default LottoService;