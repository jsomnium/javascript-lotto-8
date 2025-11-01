import Lotto from "../model/Lotto.js";
import Validator from "../util/Validator.js";
import { LottoConstants } from "../constant/index.js";

class LottoService {
  validatePurchaseAmount(purchaseAmount) {
    Validator.validatePurchaseAmount(purchaseAmount);
  }

  calculatePurchaseCount(purchaseAmount) {
    return purchaseAmount / LottoConstants.PRICE;
  }

  generateLottoTickets(purchaseCount) {
    // 난수를 생성해서 로또 티켓을 생성하는 로직 구현 필요
    const tickets = [];
    for (let i = 0; i < purchaseCount; i++) {
        tickets.push(new Lotto(this.#generateRandomNumbers()));
    }
    return tickets;
  }
    
    #generateRandomNumbers() {
        const numbers = new Set();
        while (numbers.size < LottoConstants.LENGTH) {
            const randomNum = Math.floor(Math.random() * LottoConstants.MAX_NUMBER) + LottoConstants.MIN_NUMBER;
            numbers.add(randomNum);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }
}

export default LottoService;