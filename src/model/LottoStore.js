import Lotto from "./Lotto.js";
import Validator from "../util/Validator.js";
import { LottoRank } from "../constant/index.js";

class LottoStore {
  #purchaseAmount;
  #lottoTickets;
  #winningLotto;
  #bonusNumber;
  #winningRate;
  #winningResult;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottoTickets = [];
    this.#winningLotto = null;
    this.#bonusNumber = null;
    this.#winningRate = 0;
    this.#winningResult = 0;
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

  calculateResult() {
    Validator.validateLottoStoreForResult(this.#lottoTickets, this.#winningLotto, this.#bonusNumber);

    const rankCount = new Map([
      [LottoRank.FIRST, 0],
      [LottoRank.SECOND, 0],
      [LottoRank.THIRD, 0],
      [LottoRank.FOURTH, 0],
      [LottoRank.FIFTH, 0],
    ]);

    this.#lottoTickets.forEach((ticket) => {
      const matchCount = ticket.countMatchingNumbers(this.#winningLotto.getNumbers());
      const hasBonus = ticket.hasNumber(this.#bonusNumber);

      // 각 등수별로 matchCount와 보너스 번호 일치 여부 확인
      for (const [rank, rankInfo] of Object.entries(LottoRank)) {
        if (rankInfo.matchCount === matchCount) {
          // 5개 일치 + 보너스 번호 일치 여부로 2등/3등 구분
          if (matchCount === 5) {
            if (rankInfo.hasBonus === true && hasBonus) {
              rankCount.set(LottoRank.SECOND, rankCount.get(LottoRank.SECOND) + 1);
              break;
            } else if (rankInfo.hasBonus === false && !hasBonus) {
              rankCount.set(LottoRank.THIRD, rankCount.get(LottoRank.THIRD) + 1);
              break;
            }
          } else {
            rankCount.set(rankInfo, rankCount.get(rankInfo) + 1);
            break;
          }
        }
      }
    });

    this.#winningResult = rankCount;
    let totalPrize = 0;
    for (const [rank, count] of rankCount.entries()) {
      totalPrize += rank.prize * count;
    }
    
    const rate = (totalPrize / this.#purchaseAmount) * 100;
    this.#winningRate = Number(rate.toFixed(1));
  }

  getWinningRate() {
    return this.#winningRate;
  }

  getWinningResult() {
    return this.#winningResult;
  }
}

export default LottoStore;