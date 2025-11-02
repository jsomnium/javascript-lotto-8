import Lotto from "./Lotto.js";
import Validator from "../util/Validator.js";

class LottoStore {
  #purchaseAmount;
  #lottoTickets;
  #winningLotto;
  #bonusNumber;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottoTickets = [];
    this.#winningLotto = null;
    this.#bonusNumber = null;
  }
    
  setPurchaseAmount(amount) {
    this.#purchaseAmount = amount;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  addLottoTickets(tickets) {
    this.#lottoTickets.push(...tickets);
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  setWinningLotto(numbers) {
    this.#winningLotto = new Lotto(numbers);
  }
    
  getWinningLotto() {
    return this.#winningLotto;
  }

  setBonusLotto(number) {
    const winningNumbers = this.#winningLotto.getNumbers();
    Validator.validateBonusNumber(number, winningNumbers);
    this.#bonusNumber = number;
  }

  getBonusLotto() {
    return this.#bonusNumber;
  }
}

export default LottoStore;